import { React } from 'react';

export default function UserMessagePage() {


    return (
        <>
        <h2>Messages</h2>
        <div className="mesages">
            <ul>
                <li>message</li>
                <li>message</li>
                <li>message</li>
                <li>message</li>
            </ul>
        </div>
        <input className="message-box" type='text'/>
        </>
    )
}