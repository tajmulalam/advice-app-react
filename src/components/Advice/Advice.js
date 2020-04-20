import React from 'react';
import '../Advice/Advice.css';


const Advice=({slip_id,adv})=> {

    return (
        <>
          <li className="advice-list-item"><span>{adv}</span></li>  
        </>
    )
}

export default Advice
