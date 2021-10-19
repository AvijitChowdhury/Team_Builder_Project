import React, { useState } from 'react';

const User = (props) => {
    const {name,email,picture,website,phone, id}= props.user;
    const [mobileNum,setMobile] = useState('');
    const addMember = props.addMember;
    const fullName = name.first +'' +name.last;
    const userStyle={
        border:'2px solid blue',
        margin:'10px',
        borderRadius:'10px',
        padding:'10px',
        display:'flex',
        width:'40%'
    }
    const setPhone = ()=>setMobile(phone);
    return (
        <div className='user' key={id} style={userStyle}>
            <div className='image' style={{marginTop:'25px'}}><img src={picture.large} alt="" /></div>
            <div className='user-details' style={{marginLeft:'20px'}}>
                <h2>Name: {fullName}</h2>
                <p>email: {email}</p>
                <p>{website}</p>
                <p>phone: {mobileNum}</p>
                <button onClick={setPhone}>Add Phone Number</button>
                <button onClick={()=>addMember(fullName)}>Add me</button>
            

            </div>
        </div>
    );
};

export default User;