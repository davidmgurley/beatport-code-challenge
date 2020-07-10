import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import fixtures from './fixtureData/fixture.json';
import { Slider } from './Slider';

const App = () => {
    //shuffle function just to randomize the album art. Would remove and replace with fetch function to actual API for production
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    /* eslint-disable no-console */
    var shuffledArray = shuffleArray(fixtures);
    console.log(shuffledArray);

    let content = (
        <React.Fragment>
            <Slider
                displayTiles={shuffledArray}
                displayGroup={3}
            />
            <Slider
                displayTiles={shuffledArray}
                displayGroup={2}
            />
            <Slider
                displayTiles={shuffledArray}
                displayGroup={10}
            />
        </React.Fragment>
    );
    return content;
};

export default App;
