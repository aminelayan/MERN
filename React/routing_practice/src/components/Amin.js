import React from 'react'

const Amin = (props) => {
  return (
    <div>
        <div style={{backgroundColor:props.background,color:props.color,width:"100%",height:40}}>{isNaN(props.chara)? "This Word:"+(props.chara):"This Number:"+(props.chara)}</div>
        
        </div>
  )
}

export default Amin