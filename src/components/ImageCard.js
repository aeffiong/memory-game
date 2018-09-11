import React from 'react';
import './ImageCard.css';

const ImageCard = props => (
    <div className="images">  
        <div className="card" onClick={() => props.shuffleImages(props.id)}>
            <div className="img-container" id={props.id} key={ props.id}>
                <img src={ props.src} id={ props.id} alt={ props.alt} style={{width: "200px", marginTop: "15px"}} />
            </div>
        </div>
    </div>
); 

export default ImageCard;