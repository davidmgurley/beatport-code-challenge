import React from 'react';
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

    var shuffledArray = shuffleArray(fixtures);

    let content = (
        <React.Fragment>
            <Slider
                interval={1}
                displayTiles={shuffledArray}
                displayGroup={4}
            />
            <Slider
                displayTiles={shuffledArray}
                displayGroup={2}
            />
            <Slider
                interval={8}
                displayTiles={shuffledArray}
                displayGroup={10}
            />
        </React.Fragment>
    );
    return content;
};

export default App;
