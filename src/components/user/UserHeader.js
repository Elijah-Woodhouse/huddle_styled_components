import { React } from 'react';

export default function UserHeader() {
    return (
        <>
        <div className="user-navbar">
            <div className="left-section">
                <img src="logo.png" alt="Logo" />
                <h1>This is the User Profile Page</h1>
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="right-section">
                <button>Find Groups</button>
                <button>Find a Neighbor</button>
            </div>
        </div>
        </>
    )
}