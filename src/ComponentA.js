import React,{useContext} from 'react'
import {store} from './App.js'

export default function ComponentA() {
    const [data,setData] = useContext(store);
    return (
        <div>
            <h1>
                in ComponentA{data}
            </h1>
        </div>
    )
}
