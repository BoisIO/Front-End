import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './StreamNavigation.css'

class StreamNavigation extends Component {
    render() {
        return (
            <div>
                {/* <div class="collapsible-header">
                    <img src="/assets/img/menu_burger.svg" alt="Burger icon"/>
                </div> */}
                <ul className="collection">
                    <Link to="/popular" className="collection-item">
                        <p className="SidemenuItem">Popular</p>
                    </Link>
                    <Link to="/trending" className="collection-item">
                        <p className="SidemenuItem">Trending</p>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default StreamNavigation