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

// import firebase 
import { initializeApp } from  "firebase/app";
import { FirebaseConfig } from './config/FirebaseConfig';
import { getFirestore, getDocs, collection } from "firebase/firestore";   

//import firebase auth
import {getAuth, 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  signInWithEmailAndPassword } 
  from "firebase/auth"

import {getStorage, ref, getDownloadURL} from "firebase/storage"

//initialise Firebase 
const FBapp = initializeApp(FirebaseConfig);
//initialise Firebase auth 
const FBauth = getAuth(FBapp) 

//initialise Firestore Database
const FBdb = getFirestore(FBapp)

//initialise Firebase Storage
const FBstorage = getStorage() 



//function to create user account
const signup = (email, password) => {
  return new Promise (( resolve, reject )=> {
    createUserWithEmailAndPassword(FBauth,email, password)
    .then((userCredential) => resolve(userCredential.user))
    .catch((error) => reject(error))
  })
}

const signin =(email, password) => {
  return new Promise ((resolve, reject) => {
    signInWithEmailAndPassword(FBauth, email, password)
    .then((userCredential) => resolve(userCredential.user))
  })
}

const signOutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(FBauth)
    .then (() =>resolve(true) )
    .catch ((error) => reject(error))
  })
  
}

const NavData = [
  {name: "Home", path: "/", public: true},
  {name: "About", path: "/about", public: true},
  {name: "Contact", path: "/contact", public: true},
  {name: "Sign Up", path: "/signup", public: true},
  {name: "Sign In", path: "/signin", public: true},
]

const NavDataAuth = [
  {name: "Home", path: "/", public: true},
  {name: "About", path: "/about", public: true},
  {name: "Contact", path: "/contact", public: true},
  {name: "Sign Out", path: "/signout", public: true} 
]

function App() {

  const [auth , setAuth] = useState()
  const [nav, setNav] = useState(NavData) 
  const [data, setData] = useState([])

  useEffect(()=>{
    if(data.length === 0){
      setData(getDataCollection('keyboards'))
    }
  },[data])

onAuthStateChanged( FBauth, (user) => {
  if (user){
    // console.log(user)
    setAuth(user)
    setNav(NavDataAuth)
  }
  else{
    // console.log("not signed in.")
    setAuth(null)
    setNav(NavData)
  }
})

  const getDataCollection = async (path) => {
    const collectionData = await getDocs( collection (FBdb, path))
    let dbItems = []
    collectionData.forEach((doc)=>{
      let item = doc.data
      item.id = doc.id
      dbItems.push(item)
    }) 
    setData(dbItems)
    //return dbItems
  } 

  const getImageURL = (path) => {
    const ImageRef = ref(FBstorage, path)
    return new Promise ((resolve, reject) => {
      getDownloadURL (ImageRef)
      .then((url) => resolve(url))
      .catch((error) => reject(error))
      })
  }
  



  return (
    <div className="App">
      <Header title = "Keyboard World"  headernav = {nav}/>
      <Routes>
        <Route path ="/" element = {<Home listData = {data} imageGetter = {getImageURL}/>} />
        <Route path ="/about" element = {<About/>} />
        <Route path ="/contact" element = {<Contact/>} />
        <Route path='/signup' element = {<Signup handler = {signup}/>}/>
        <Route path='/signout' element = {<Signout handler={signOutUser} auth = {auth}/>}/>
        <Route path='/signin' element = {<Signin handler = {signin}/>}/>
      </Routes>
      <Footer year = "2022" /> 
    </div>
  );
}

export default App;
