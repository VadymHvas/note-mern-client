import React from 'react';
import "./UserAvatar.css";

const UserAvatar = ({user, className}) => {
    return (
        <div className={`user-avatar ${className}`}>
            {user.avatar && (
                <img src={`https://note-mern-server.vercel.app/${user.avatar}`} alt="errrr" />
            )}
        </div>
    );
};

export default UserAvatar;
