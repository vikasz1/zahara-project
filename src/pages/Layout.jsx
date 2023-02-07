import React from 'react'
import { Link } from 'react-router-dom';
const LayOut = (props) => {
    return (<ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/blogs">Blogs</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>);
}

export default LayOut;