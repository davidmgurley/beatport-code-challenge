import React, { useState, useEffect } from 'react';
import { SliderNavigation } from './SliderNavigation';
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
    const [dividedTilesLength, setDividedTilesLength] = useState(0);
    const [groupDivisibilityClass, setGroupDivisibilityClass] = useState('album-group-default');
    const [timerActive, setTimerActive] = useState(true);

    useEffect(() => {
        let interval = null;

        //divides the tiles into groups based on the requested group size and counts how many groups there are
        setDividedTiles(divideTilesByGroupSize(props.displayGroup, props.displayTiles));

        //checks the highest number the group size is divisible by up to 5 so the tiles are arranged as nice as possible given variable group size and tile counts
        checkGroupDivisibility(props.displayGroup);

        //checks if the timerActive state is active or not and sets the auto scrolling interval based on the input from the parent component
        timerActive ? interval = setInterval(() => {
            handlePageRight();
        }, props.interval * 1000) : clearInterval(interval);
        return () => clearInterval(interval);
    }, [dividedTilesLength, slideIndex, timerActive]);

    function divideTilesByGroupSize (groupSize, displayTiles) {
        const arrayOfArrays = [];
        for (var i = 0; i < displayTiles.length; i += groupSize) {
            arrayOfArrays.push(displayTiles.slice(i,i + groupSize));
        }
        setDividedTilesLength(arrayOfArrays.length);
        return arrayOfArrays;
    }

    function checkGroupDivisibility (groupSize) {
        if (groupSize % 2 === 0) {
            setGroupDivisibilityClass('album-group-2');
        }
        if (groupSize % 3 === 0) {
            setGroupDivisibilityClass('album-group-3');
        }
        if (groupSize % 4 === 0) {
            setGroupDivisibilityClass('album-group-4');
        }
        if (groupSize % 5 === 0) {
            setGroupDivisibilityClass('album-group-5');
        }
    }

    //decrements the index when the left arrow is clicked. If the index is 0 it sets the index back around to the end of the array of tile groups
    function handlePageLeft () {
        const newIndex = slideIndex > 0 ? slideIndex - 1 : dividedTilesLength - 1;
        setSlideIndex(newIndex);
    }

    //increments the index when the right arrow is clicked. if at the end of the array, it sets the index to 0
    function handlePageRight () {
        const newIndex = slideIndex < dividedTilesLength - 1 ? slideIndex + 1 : 0;
        setSlideIndex(newIndex);
    }

    //sets the index to the corresponding index position as the button that was clicked in the lower nav bar
    function handleNavIndex (index) {
        setSlideIndex(index);
    }

    //sets the timerActive state to the opposite of what it currents sits at. Currently controlled by mouseEnter and mouseLeave events
    function handleTimerToggle () {
        setTimerActive(!timerActive);
    }

    return (
        <div onMouseEnter={handleTimerToggle} onMouseLeave={handleTimerToggle} className="slider">
            <div className="mainSlider">
                <div className="sliderHeader">
                    <h3>{props.sliderTitle}</h3>
                    <div className="headerNav">
                        <button onClick={handlePageLeft}>left</button>
                        <button onClick={handlePageRight}>right</button>
                    </div>
                </div>
                <div className="sliderCenter">
                    <div>
                        <button onClick={handlePageLeft}>left</button>
                    </div>
                    {dividedTiles.map((group, index) => {
                        return index === slideIndex ?
                            <div className={groupDivisibilityClass}>
                                {group.map(tile => {
                                    return <div className="tile-group">
                                        <img alt={''} src={tile.coverArt}/>
                                    </div>;
                                })}
                            </div> : '';
                    })}
                    <div>
                        <button onClick={handlePageRight}>right</button>
                    </div>
                </div>
                <div className="footerNav">
                    {dividedTiles.map((group, index) => {
                        return <SliderNavigation
                            index={index}
                            handleNavIndex={handleNavIndex}
                        />;
                    })}
                </div>
            </div>
        </div>
    );
};

//default props so the slider behaves properly even if no props are fed to it from the parent component
Slider.defaultProps = {
    interval: 4,
    displayGroup: 1,
    sliderTitle: 'Beatport Tracks',
    displayTiles: [
        {
            artist: 'Pink Floyd',
            coverArt: 'https://static.billboard.com/files/media/Pink-Floyd-Dark-Side-of-the-Moon-album-covers-billboard-1000x1000-compressed.jpg',
            releaseYear: '1973',
            title: 'Dark Side of the Moon'
        }
    ]
};
