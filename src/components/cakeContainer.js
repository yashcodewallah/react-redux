import React from 'react'
import buyCake from "./redux/cake/cakeAction"
import {connect} from "react-redux"



function cakeContainer(props) {
  return (
    <div>
        <h2>number of cakes-{props.numOfCakes}</h2>
        <button onClick={props.buyCake}>buy cake</button>
    </div>
  )
}

const mapStateToProps= state=>{
    return {
        numOfCakes:state.numOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
return {
    buyCake: ()=>dispatch(buyCake())
}
}

export default connect(mapStateToProps,mapDispatchToProps)(cakeContainer)