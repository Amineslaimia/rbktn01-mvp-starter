import React from 'react';


const View = (props) =>{
  const view =<div >
              <p>city :{props.info.city}</p>
              <p>country :{props.info.country}</p>
              <p>current time :{props.info.time}</p>
              <p>temperature :{props.info.temperature}</p>
              <img src={props.info.icon}/>
              <p>{props.info.description}</p>
              <p>pressure :{props.info.pressure}</p>
              <p>humidity :{props.info.humidity}</p>

              </div>




  return  (
    <div>
      {view}
     </div>



  )

}
export default View;