import React,{useState} from "react";
import Nav from "./navigation";
import Text from "./text";
import Folder from "./gallery";
import all from './eifel.jpg';
import mountain from './mountain.jpg';
import students from './students.jpg';
import sun from './sunandtree.jpg';
import family from './freinds.jpg';
import friends from './family.jpg';
import tiger from './tiger.jpg';
import './style.css'

function App() {
  const [item,setItem] = useState('');

  
const users = [
  { id: 1, name: "Travel and Tourism", image: all },
  { id: 2, name: "Nature", image: mountain },
  { id: 3, name: "College", image: students },
  { id: 4, name: "Forest", image: sun },
  { id: 5, name: "Family", image: family },
  { id: 6, name: "Friends", image: friends },
  { id: 7, name: "Wild Life", image: tiger },
];

const namesOfReq =  users.map((user) => user.name.toLowerCase());
console.log(namesOfReq)


function handleInput(value) {

  setItem(value);
  let inputValue =   value.toLowerCase();

  console.log(value)
  console.log(  namesOfReq.includes(value.toLowerCase()));

  namesOfReq.includes(inputValue) ? changeChange(inputValue) : noChnage() ;


 

}


let isTrue = true;
const filteredUsers = item
? users.filter((user) =>
    user.name.toLowerCase().includes(item.toLowerCase())
  )
: users;

const change = isTrue && filteredUsers.map((user) => (
  <Folder key={user.id} name={user.name} image={user.image} />
));


function changeChange(inputValue,isTrue,newChange,isTrueAgain) {

  const index = namesOfReq.indexOf(inputValue);
  console.log(index)
  
  const newUsers =  namesOfReq[index] ;
  console.log(newUsers);

}

function noChnage() {

  console.log(`love you buddy`)

}

  return (
    <div>
      <Nav onSearch={handleInput} />
      <Text />
      <div className="gallery">
      <div className="stack">
        {change}
        
      </div>
      </div>
    </div>
  );
}

export default App;


