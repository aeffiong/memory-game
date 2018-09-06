import React from "react";

const ImageCard = props => (
    <div className="game-images row">    
            {props.data.map(function(imageProps) {
                return (
                    <div className="card col-sm-3" id={imageProps.id} key={ imageProps.src} onClick={props.handleClick}>
                        <img src={ imageProps.src} id={imageProps.id} alt={ imageProps.alt} />
                    </div>
                )
            })}
    </div>
);

export default ImageCard;