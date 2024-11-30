
import img from './search-interface-symbol.png';
import React from 'react';





function Nav({onSearch}) {

    const  handleSearch = (event) => {

        const value = event.target.value;
        onSearch(value);



    }

 


    return <>
    
    <nav className='nav'>
        <h3 className='title'>Gallery</h3> <input className='search'  onChange={handleSearch}></input><button  className='imgB'><img src={img} className='img' ></img></button><a className='a' href="#">Home</a><a className='a' href="#">About</a><a className='a' href="#">Contact</a>
       
               
            
    </nav>
    
    
    
    </>


}


export default Nav;
