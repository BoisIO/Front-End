import React, {Component} from 'react'
import { Chip } from 'materialize-css'

class ChatMessage extends Component {
    render() {
        return (
            <li class="collection-item">
                <Chip>
                <img src='img/yuna.jpg' alt='Contact Person' />
                Jane Doe
                </Chip>
            </li>
        )
    }
}

export default ChatMessage;