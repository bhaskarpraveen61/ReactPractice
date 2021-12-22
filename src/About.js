import React,{useContext} from 'react'
import {store} from './Home'

export default function About() {
    const [data,setData] = useContext(store);
    return (
        <div>
            <center>
                <h1>
                Inside About {data}
                </h1>
            </center>
           
        </div>
    )
}
