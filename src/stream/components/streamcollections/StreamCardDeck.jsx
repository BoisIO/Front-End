import React, {Component} from 'react'
import StreamThumbnail from '../streamthumbnails/StreamThumbnail';

class StreamCardDeck extends Component {
    constructor() {
        super()
        this.state = {
            streams: [
                {ID: 0, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
                {ID: 1, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
                {ID: 2, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
                {ID: 3, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
                {ID: 4, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
                {ID: 5, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},
                {ID: 6, title: "Supahstream", imagesource:"https://cdn.pixabay.com/photo/2018/05/29/00/13/nature-3437614_1280.jpg", imagealt:"Superpenguin"},

            ]
        }
    }
    render() {
        return (
            <div className="row">
                    {this.state.streams.map(item =>
                    <div key={item.ID} className="col s2"> 
                        <StreamThumbnail title={item.title} imagesource={item.imagesource} imagealt={item.imagealt}/>
                    </div>
                    )}
            </div>
        )
    }
}

export default StreamCardDeck