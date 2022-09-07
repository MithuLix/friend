import React, { createContext } from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import Header from '../Header/Header'
import Catageries from './Catagories/Catageries';
export const CategoryContext = createContext();



const Home = (props) => {
    const {count} = props;
    const [friends, setFriends] = useState([]);

    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
    },[])

    return (
        <CategoryContext.Provider value = "laptop">
        <h2>Friends: {friends.length}</h2>
            <div className="singleFriend">
            {
            friends.map(friend => <Friend friend={friend}></Friend>)
            }
            <Catageries count={count}></Catageries>
            </div>
        </CategoryContext.Provider>
    );
};

export default Home;