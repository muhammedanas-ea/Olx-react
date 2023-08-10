import React,{useContext, useState, useEffect} from 'react';
import {PostContext} from '../../Store/PostContext';
import { FirebaseContext } from '../../Store/FirebaseContext';
import './View.css';

function View() {

  const [userDetails,setUserDetails] = useState('');
  console.log(userDetails);
  const {postDetails} = useContext(PostContext);
  const {firebase} = useContext(FirebaseContext);


  useEffect(() =>{
    const {userId} = postDetails;
    firebase.firestore().collection('users').where('id','==',userId).get().then((res) =>{
      res.forEach(doc => {
        setUserDetails(doc.data())
        console.log(doc.data());
      })
    })
  },[])


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.category}</span>
          <p>{postDetails.name}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
