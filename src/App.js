import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';


function App() {
  const [Users,setUsers] =useState([]);
  const [members , setMembers] =useState([]);

  const getUsers=()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res=>res.json())
    .then(data=>
      setUsers(data.results));
  }


  useEffect(()=>{
    getUsers();
  },[]);
  console.log(Users);

  const addMember =(name)=>{
    console.log('clicked add member',name);
    setMembers([...members,name]);
  }
  return (
    <div className="App">
      <h2>Team Builder</h2>
      <h4>friend List:</h4>
      <ul>
        {members.map((member,idx)=><li key={idx}>{member}</li>)}
      </ul>
      <ul>
      {
        Users.map(user=><User user={user} addMember={addMember}></User>)
      }
      </ul>


      


    </div>
  );
}

export default App;
