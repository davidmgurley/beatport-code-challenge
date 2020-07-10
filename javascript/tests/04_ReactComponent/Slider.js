import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import './slider.scss';

/**
 * @type {React.Component}
 *
 * @description Create a Slider/Carousel using modern react. It's up to you to add styles.
 * Sass is available, but feel free to use any styling solution you. CSS-in-JS, CSS, etc.
 * This component needs to be reusable and customizable. Multiple instances of this component
 * should be able to exist in the same view.
 *
 * The Slider should:
 * a. Allow for variable slide intervals, but default to 4 seconds
 * b. Should pause when a user is interacting with the component
 * c. The Slider should be able to take different types of slides. For example,
 * it could be a single image or a set of tiles. Reference Beatport.com for an example
 */

/* eslint-disable no-console */

export const Slider = props => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [dividedTiles, setDividedTiles] = useState([]);

    useEffect(() => {
        setDividedTiles(divideTilesByGroupSize(props.displayGroup, props.displayTiles));
    }, []);

    const handleIndexChange = () => {
        var slide = slideIndex;
        setSlideIndex(slide + 1);
        console.log(slideIndex);
    };

    const divideTilesByGroupSize = (groupSize, displayTiles) => {
        const arrayOfArrays = [];
        for (var i = 0; i < displayTiles.length; i += groupSize) {
            arrayOfArrays.push(displayTiles.slice(i,i + groupSize));
        }
        return arrayOfArrays;
    };

    return (
        <div className="slider">
            <div className="mainSlider">
                {dividedTiles.map((group, index) => {
                    return <div>
                        {index === slideIndex ? group.map(tile => {
                            return tile.title;
                        }) : ''}
                    </div>;
                })}
            </div>
            <button onClick={handleIndexChange}>increment</button>
        </div>
    );
};

Slider.defaultProps = {
    interval: 4,
    displayGroup: 1,
    displayTiles: [
        {
            artist: 'Pink Floyd',
            coverArt: 'https://static.billboard.com/files/media/Pink-Floyd-Dark-Side-of-the-Moon-album-covers-billboard-1000x1000-compressed.jpg',
            releaseYear: '1973',
            title: 'Dark Side of the Moon'
        }
    ]
};
