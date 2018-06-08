import React, {Component} from 'react'
import './StreamContainer.css'

class StreamContainer extends Component {
    render() {
        return (
            <div className="card streamcontainer">
                <div className="card-image">
                    <video autoPlay loop>
                        <source src="/assets/video/otterdance.mp4" type="video/mp4"/>
                        <source src="/assets/video/otterdance.webm" type="video/webm"/>
                    </video>
                </div>
                <span>Thijmen: Zo cute!</span><br/>
                <span>Okke: Echt wel!</span><br/>
                <span>Patrick: Otter 4 life!</span>
            </div>
        )
    }
}

export default StreamContainer;