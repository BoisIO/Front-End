import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'

class TransparentPersonThumbnail extends Component {
    render() {
        return (
            <Link to={"/people/"+this.props.person.ID}>
                <div className="card streamcontainer">
                    <div className="card-image">
                        <img className="responsive-image picfit" src={this.props.person.avatar} alt=""/>
                    </div>
                    <div className="card-content">
                        <p style={{fontWeight: "bold"}}>{this.props.person.user}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

function mapStateToProps(store) {
    return store;
}
export default connect(mapStateToProps)(TransparentPersonThumbnail);
