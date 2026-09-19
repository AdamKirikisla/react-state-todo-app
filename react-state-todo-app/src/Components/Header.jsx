import { useState } from 'react';
import reactLogo from '../../images/react.svg';



export default function Header(){
    
    const [date, setDate] = useState(new Date())
    
    
    
    return(
        <header>

        <div className='header-top'>
            <p className='date'>{date.toDateString()}</p>
            <img src={reactLogo} alt="reactLogo" className='react-logo' />
        </div>

        <div className='header-bottom'>
            <h1>Good Afternoon</h1>
            <p className='task-counter'>5 tasks remaining</p>
        </div>

        
        </header>
    )
}