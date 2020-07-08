import { mount } from 'enzyme';
import React from 'react';
import { Slider } from './Slider';

describe('Slider', () => {
    it('mounts', () => {
        const container = mount(
            <Slider />
        );
        expect(container.find('.slider').exists()).toBe(true);
    });
});
