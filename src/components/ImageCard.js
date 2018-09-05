import React from "react";


// image cards
const images = [
    { src: 'https://www.pexels.com/photo/assorted-sliced-fruits-1128678/', alt: 'Your description here 1' }, 
    { src: 'https://www.pexels.com/photo/assorted-sliced-fruits-in-white-ceramic-bowl-1092730/', alt: 'Your description here 2' },
    { src: 'http://placehold.it/200x200/76BD23', alt: 'Your description here 3' },
    { src: 'http://placehold.it/200x200/76BD24', alt: 'Your description here 4' },
    { src: 'http://placehold.it/200x200/76BD25', alt: 'Your description here 5' },
    { src: 'http://placehold.it/200x200/76BD26', alt: 'Your description here 6' },
    { src: 'http://placehold.it/200x200/76BD27', alt: 'Your description here 7' },
    { src: 'http://placehold.it/200x200/76BD28', alt: 'Your description here 8' },
    { src: 'http://placehold.it/200x200/76BD29', alt: 'Your description here 9' },
    { src: 'http://placehold.it/200x200/76BD210', alt: 'Your description here 10' },
    { src: 'http://placehold.it/200x200/76BD211', alt: 'Your description here 11' },
    { src: 'http://placehold.it/200x200/76BD212', alt: 'Your description here 12' }
  ];
const ImageCard = props => (
        <div className="container">
            <div className="game-images">
                <ul className="game-image-list">
                    {images.map(function(imageProps) {
                        return (
                            <div children="card" key={ imageProps.src}>
                                <img src={ imageProps.src} alt={ imageProps.alt} />
                            </div>
                        )
                    })}
                </ul>

            </div>
        </div>
);

export default ImageCard;