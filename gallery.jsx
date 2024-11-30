import React from "react";
import './style.css';
import Travel from "./travel";


function Folder(props) {

  let setSwicth = false

  const gallery = [
    {
      id : 1,
      image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.india.com%2Fphotos%2Ftravel%2Fseven-wonders-of-the-world-174851%2F&psig=AOvVaw1RKOYBulJGNfjYMMR1O9QL&ust=1733058125386000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj9r-OOhIoDFQAAAAAdAAAAABAE',

    },
    {
      id : 2,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAoHSdWIG4B5DmeASh6qVG1XHcww745h2STw&s',
    },
    {
      id : 3,
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvUKH7cFT1mUgjFlpq0fiWeevOMqWZ6wOkCw&s'
    }
  ]
  function newGallery(setSwicth) {

    setSwicth = true;




  }
 






  return (
    
     <button className="btn" onClick={newGallery} > <div className="folder">
        <img className="images" src={props.image} alt={props.name} />
        <p className="p">{props.name}</p>
      
    </div></button>
  );
}

export default Folder;




/*
       <div className="folder"><img className='images' src={mountain} ></img><p className='p'>Nature</p></div>
        <div className="folder"><img className='images' src={students} ></img><p className='p'>School</p></div>
        <div className="folder"><img className='images' src={sun} ></img><p className='p'>Forest</p></div>
        <div className="folder"><img className='images' src={family} ></img><p className='p'>Friends</p></div>
        <div className="folder"><img className='images' src={friends} ></img><p className='p'>Family</p></div>
        <div className="folder"><img className='images' src={tiger} ></img><p className='p'>Wild-Life</p></div> */