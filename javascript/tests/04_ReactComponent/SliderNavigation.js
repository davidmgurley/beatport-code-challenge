import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import './slider.scss';

export const SliderNavigation = props => {
    const setNavIndex = () => props.handleNavIndex(props.index);
    return (
        <button onClick={setNavIndex}>{props.index}</button>
    );
};
