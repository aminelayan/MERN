import React from 'react'

const Home = (props) => {
  return (
    <div>
       <h1 style={{backgroundColor:props.background,color:props.color,width:"100%",height:40}}>{isNaN(props.chara)? "This Word:"+(props.chara):"This Number:"+(props.chara)}</h1> 
    </div>
  )
}

export default Home