import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Loading({title}) {
    return (
        <div className='loading'>
           
           <Loader
        type="Puff"
        color="#0c4c8a"
        height={100}
        width={100}
        
      />
      <h4>{title} data loading...</h4>
        </div>
    )
}

export default Loading
