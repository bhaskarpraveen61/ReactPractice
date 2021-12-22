import React, { useState,useEffect,createContext} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Dashboard from './Dashboard';
import {connect} from 'react-redux' 
import About from './About';

const Context = React.createContext();
export const store = createContext();
function Home() {
  const [data, setdata] = useState({
    username:"",
    password:""
  })
  const {username,password} =data;
  const handler = e => {
    setdata({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e => {
    e.preventDefault();
    axios.put('https://practice-d0775-default-rtdb.firebaseio.com/registered.json',data).then(alert('successfully submitted'))
    navigation('/dashboard')
    // <Context.Provider value={username}>
    //   <Dashboard />
    // </Context.Provider>
  }
  const colorData = [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ]
  const arr = ["black","yellow","magenta","cyan","blue","green","red"]
  const filtered = arr.filter(value=>value.includes('e'))
  const [urlData, seturlData] = useState("")
  const [storedata,setstoreData] = useState(0)
  const navigation = useNavigate();
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //  .then(response => response.json())
    //  .then(json => console.log('fetch output',json))
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => console.log('axios output',response))
  }, [])
  // const filtered_dup = colorData.filter(value => console.log('colorData',value.value.includes('#')))
  return (
    <div>
      <center>
        <form onSubmit={submitHandler} >
          <h1>
            this is inside app
          </h1>
          <input placeholder="Username" name="username" value={username} onChange={handler} style={{margin:'10px'}}/><br />
          <input placeholder="Password" type="password" name="password" value={password} onChange={handler} style={{margin:'10px'}}/> <br/>
          <input type="submit" name="submit" />
          {filtered.map((value,index )=> <h1 key={index} >{value}</h1> )}
        </form>
        <store.Provider value={[storedata,setstoreData]}>
          <Dashboard />
          <About />
          <button onClick={()=>{setstoreData(storedata+1)}} />
        </store.Provider>
      </center>
    </div>
  );
}

// const mapStateToProps = (state) =>({
//   count:state
// })

// export default connect(mapStateToProps)(Home);
export default Home();