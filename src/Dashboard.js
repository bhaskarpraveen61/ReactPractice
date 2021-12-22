import React,{useContext} from 'react'
import { connect } from 'react-redux';
import {increment,decrement} from './Actions'
import {store} from './Home'

function Dashboard() {
    const [storedata,setstoreData] = useContext(store);
    return (
        <div>
            <center>
                <h1>
                inside dashboard {storedata}
                </h1>
                {/* <button onClick={()=>increment}>Increment</button>
                <button onClick={()=>decrement}>Decrement</button> */}
            </center>

        </div>
    )
}
// const mapStateToProps = (state) =>({
//     count:state
//   })
  
// const mapDispatchToProps = (dispatch) =>{
//     return{
//         increment: () => dispatch({type:'INCREMENT'}),
//         decrement: () => dispatch({type:'DECREMENT'}),
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
export default Dashboard();