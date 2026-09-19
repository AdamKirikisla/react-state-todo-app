import { useState } from 'react';
import reactLogo from '../../images/react.svg';



export default function Header(){
    
    const [date, setDate] = useState(new Date())
    
    
    
    return(
        <>

        <img src={reactLogo} alt="reactLogo" />
        <p>{date.toDateString()}</p>
        <h1>Good Afternoon</h1>
        <p>5 tasks remaining</p>
        
        </>
    )
}