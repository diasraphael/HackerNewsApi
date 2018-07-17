import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


class Nav extends Component {

    render() {
        return (
                <ul id="nav" className="navWidth">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chart">Chart</Link>
                    </li>
                </ul>
        )
    }

    
}
export default Nav;