import axios from "axios"
import "./App.css";
import {useEffect, useState} from "react"
import Allroutes from "./Components/Allroutes";
function App() {

  const [data,setData] = useState([])
  const [title,setTitle] = useState("")
  useEffect(() => {
    GetData()
  }, [])


  console.log(data)
const GetData=()=>{
    axios
    .get("https://still-refuge-42329.herokuapp.com/api/products")
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => console.log(err));
  } 




  return <div className="App">

    <Allroutes/>


  </div>

  }


export default App;