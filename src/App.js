import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Signup } from './pages/Signup'
import { Signout } from './pages/Signout'
import { Signin } from './pages/Signin'
import { Detail } from './pages/Detail'
import { Product } from './pages/Product'





// import firebase and firestore
import { initializeApp } from "firebase/app";
import { FirebaseConfig } from './config/FirebaseConfig';
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  query,
  onSnapshot,
  where
} from "firebase/firestore";

//import firebase auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth"

import { getStorage, ref, getDownloadURL } from "firebase/storage"

//initialise Firebase 
const FBapp = initializeApp(FirebaseConfig);
//initialise Firebase auth 
const FBauth = getAuth(FBapp)

//initialise Firestore Database
const FBdb = getFirestore(FBapp)

//initialise Firebase Storage
const FBstorage = getStorage()

const NavData = [
  { name: "Home", path: "/", public: true },
  { name: "Product", path: "/product", public: true },
  { name: "About", path: "/about", public: true },
  { name: "Contact", path: "/contact", public: true },
  { name: "Sign Up", path: "/signup", public: true },
  // { name: "Sign In", path: "/signin", public: true },
]

const NavDataAuth = [
  { name: "Home", path: "/", public: true },
  { name: "Product", path: "/product", public: true },
  { name: "About", path: "/about", public: true },
  { name: "Contact", path: "/contact", public: true },
  { name: "Sign Out", path: "/signout", public: true }
]

function App() {

  const [auth, setAuth] = useState()
  const [nav, setNav] = useState(NavData)
  const [data, setData] = useState([])
  const [userData, setUserData] = useState()
  // keybaord reviews
  const [keyboardReviews, setKeyboardReviews] = useState([])

  useEffect(() => {
    if (data.length === 0) {
      getDataCollection('keyboards')
    }
  })

  onAuthStateChanged(FBauth, (user) => {
    if (user) {
      // console.log(user)
      setAuth(user)
      setNav(NavDataAuth)
      getUserData(user.uid)
    }
    else {
      // console.log("not signed in.")
      setAuth(null)
      setNav(NavData)
      setUserData(null)
    }
  })

  //function to create user account
  const signup = (username, email, password) => {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(FBauth, email, password)
        .then(async (userCredential) => {
          const uid = userCredential.user.uid
          const userObj = {
            name: username,
          }
          await setDoc(doc(FBdb, "users", uid), userObj)
          setUserData(userObj)
          resolve(userCredential.user)
        })
        .catch((error) => reject(error))
    })
  }

  const signin = (username, email, password) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(FBauth, email, password)
        .then(async(userCredential) => {
          const uid = userCredential.user.uid
          getUserData(uid)
          resolve(userCredential.user)
        })
        .catch((error) => reject(error))
    })
  }

  const signOutUser = () => {
    return new Promise((resolve, reject) => {
      signOut(FBauth)
        .then(() => resolve(true))
        .catch((error) => reject(error))
    })
  }

  const getUserData = async (uid) => {
    const docRef = doc(FBdb, "users", uid)
    const docData = await getDoc(docRef)
    setUserData(docData.data())
  }

  const getDataCollection = async (path) => {
    const collectionData = await getDocs(collection(FBdb, path))
    let dbItems = []
    collectionData.forEach((doc) => {
      let item = doc.data()
      item.id = doc.id
      dbItems.push(item)
    })
    setData(dbItems)
    //return dbItems
  }

  const getImageURL = (path) => {
    const ImageRef = ref(FBstorage, path)
    return new Promise((resolve, reject) => {
      getDownloadURL(ImageRef)
        .then((url) => resolve(url))
        .catch((error) => reject(error))
    })
  }

  const getDocument = async (col, id) => {
    const docRef = doc(FBdb, col, id)
    const docData = await getDoc(docRef)
    if (docData.exists()) {
      return docData.data()
    }
    else {
      return null
    }
  }


  const addKeyboardReview = async (keyboardId, reviewText, userId) => {
    const path = "keyboards/" + keyboardId + "/reviews"
    const reviewObj = { KeyboardId: keyboardId, UserId: userId, Text: reviewText, Date: new Date() }
    const reviewRef = await addDoc(collection(FBdb, path), reviewObj)
    if (reviewRef.id) {
      return true
    }
    else {
      return false
    }
  }


  const getKeyboardReviews = async (keyboardId) => {
    const collectionStr = "keyboards/" + keyboardId + "/reviews"
    const reviewsQuery = query(collection(FBdb, collectionStr))
    const unsubscribe = onSnapshot(reviewsQuery, (reviewsSnapshot) => {
      let reviews = []
      reviewsSnapshot.forEach((review) => {
        let reviewData = review.data()
        // create a js date object from firebase
        let dateData = reviewData.Date.toDate()
        // get the year month and date
        let year = dateData.getFullYear()
        let month = dateData.getMonth() + 1
        let date = dateData.getDate()
        let hours = dateData.getHours()
        let minutes = dateData.getMinutes()
        // construct as a string
        let dateStr = `${date}/${month}/${year} ${hours}:${minutes}`

        reviewData.Date = dateStr

        reviews.push(reviewData)
      })
      //return reviews
      setKeyboardReviews(reviews)
    })
  }

  return (
    <div className="App">
      <Header title="Keyboard World" headernav={nav} user={userData}/>
      <Routes>
        <Route path="/product" element={<Product listData={data} imageGetter={getImageURL} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<Signup handler={signup} />} />
        <Route path='/signout' element={<Signout handler={signOutUser} auth={auth} />} />
        <Route path='/signin' element={<Signin handler={signin} />} />
        <Route
          path='/keyboards/:keyboardId'
          element={
            <Detail
              getter={getDocument}
              auth = {auth}
              imageGetter={getImageURL}
              addReview={addKeyboardReview}
              getReviews={getKeyboardReviews}
              reviews={keyboardReviews}
            />
          }
        />
      </Routes>
      <Footer year="2022" />
    </div>
  );
}

export default App;
