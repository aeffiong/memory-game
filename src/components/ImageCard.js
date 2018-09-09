import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="justify-content-center full-height align-items-center">
    <div className="game-images row">   
                    <div className="row" key={ props.id }>
                    <div className="card" onClick={() => props.shuffleImages(props.id)}>
                        <div className="img-container" id={props.id} key={ props.id}>
                            <img src={ props.src} id={ props.id} alt={ props.alt} />
                        </div>
                    </div>
                    </div>
           
    </div>
 </div>
); 

export default ImageCard;