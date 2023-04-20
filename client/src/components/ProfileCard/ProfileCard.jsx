import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import {Link, useParams} from 'react-router-dom'
import { useSelector } from "react-redux";

const ProfileCard = ({location}) => {
  const {user} = useSelector((state)=>state.authReducer.authData)
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = import.meta.env.VITE_PUBLIC_FOLDER;
  // const ProfilePage = false;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={user.coverPicture? serverPublic + user.coverPicture : serverPublic + "defaultCover.jpg"} alt="" />
        <img src={user.profilePicture? serverPublic + user.profilePicture : serverPublic + "defaultprofile.png"} alt="" />
      </div>

      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.workAt? user.workAt: "Write about yourself"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followers</span>
          </div>

          {location === 'profilePage' && (
            <>
              <div className="vl"></div>
              <div className="follow">
              {
                posts.filter((post)=>post.userId === user._id).length
                }
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === 'profilePage' ? "" : <span>
        <Link style={{textDecoration: "none", color: "inherit"}} to={`/profile/${user._id}`}>
        My Profile
        </Link>
       </span>}

    </div>
  );
};

export default ProfileCard;