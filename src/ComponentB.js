import React,{useContext} from 'react'
import {store} from './App.js'

export default function ComponentB() {
    const [data,setData] = useContext(store);
    return (
        <div>
            <h1>
                in ComponentB{data}
            </h1>
        </div>
    )
}
