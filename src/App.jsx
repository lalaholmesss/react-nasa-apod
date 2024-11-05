import SideBar from "./components/SIdeBar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const[showModal, setShowModal] = useState(false);

function handleDisplayModal(){
  setShowModal(!showModal)
}

useEffect(() => {
  async function fetchAPIData() {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}` // query parameter(key-value pair after ?);
  
    const today = (new Date()).toDateString()
    const localKey = `NASA-${today}`
    if (localStorage.getItem(localKey)) {
      const apiData = JSON.parse(localStorage.getItem(localKey)) // parse string into an object and assign to apiData
      setData(apiData)
      return
    }
    localStorage.clear()

    try {
      const res = await fetch(url)
      const apiData = await res.json() // parse the json string into a js object;
      localStorage.setItem(localKey, JSON.stringify(apiData)) // turn object into string to store in localStorage;
      setData(apiData) // apiData is a js object after parsing, and to access its props we use dot notation: apiData.title etc;
    } catch (err) {
      console.log(err.message)
    }
  }
  fetchAPIData()
},[])


  return (
    <>
      {data ? (<Main data={data}/>): (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleDisplayModal={handleDisplayModal}/>)}
       
      {data && (<Footer data={data} handleDisplayModal = {handleDisplayModal}/>)}
    </>
  )
}

export default App
