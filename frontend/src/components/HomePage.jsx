
import React from 'react' ; 
import Sidebar from './Sidebar' ; 
import MessageContainer from './MessageContainer' ;

const HomePage =()=>{
    return (
        <div className='flex sm:h-[450px] md:h-[550 px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opac' >
            <Sidebar></Sidebar>
            <MessageContainer></MessageContainer>
        </div>
    )
}

export default HomePage 