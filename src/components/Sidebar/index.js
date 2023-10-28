import React from 'react';

function Sidebar() {
    return (
        <aside className="col text-center" id="sidebar">
            <div className="profile">
                <img src="/assets/profile/profilePic.jpeg" alt="my Name" />
                <h2>my Name</h2>
                <h4>Frontend Developer</h4>
            </div>
            <ul className="social-list">
                <li><a href="https://www.facebook.com/mehdi.moradzadeh97" target='_blank'>Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
