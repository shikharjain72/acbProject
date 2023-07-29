import React from 'react'


let url = "https://media.tenor.com/RBPXdOkCZOoAAAAM/mega-millions-lottery.gif"; 
let luckyNumber = Math.floor(Math.random()*10);

const Lucky = () => {
  return (
    <div>
        Welcome to the App
        <br/>
        {luckyNumber === 7 && <img src={url}/>}
    </div>
  )
}

export default Lucky;