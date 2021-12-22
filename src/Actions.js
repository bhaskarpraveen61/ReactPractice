export const increment = ()=> dispatch =>{
    dispatch({
        type:'Increment',
        payload:'Increment clicked'
    })
}
export const decrement = () => dispatch =>{
    dispatch({
        type:'Decrement',
        payload:'Decrement clicked'
    })
} 