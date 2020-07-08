import axios from 'axios';

/**
 * Write a function(s) that takes a config object defining a list of urls with their available http methods
 * and returns an object that has the available api functions to interact with each of those endpoints.
 * This problem relies using on axios. We provided a helper `fetch` function to abstract axios for you.
 *
 * @param {Object} obj
 * @param {String} prefix
 * @returns {Object}
 */
export const integrationFunctions = integrationConfig => { // eslint-disable-line no-unused-vars
    // Write your solution here
};

/**
 *
 * @param {Str} url
 * @param {Str} method
 * @param {Object} config
 * @description Helper fetch function used to create integration functions
 */
export const fetch = (url, method, config) => axios({
    url,
    method,
    ...config, // Feel free to reference the axios docs for what this config might consist of (headers, params, etc)..
});

export const routeDefinitions = {
    track: {
        methods: ['get', 'patch', 'delete'],
        url: 'https://api.testing.com/tracks/:id/'
    },
    tracks: {
        methods: ['get', 'post'],
        url: 'https://api.testing.com/tracks/'
    },
};

export const expected = {
    track: {
        get: (id, config) => axios({
            url: `https://api.testing.com/tracks/${id}/`,
            method: 'get',
            ...config,
        }),
        patch: (id, config) => axios({
            url: `https://api.testing.com/tracks/${id}/`,
            method: 'patch',
            ...config,
        }),
        delete: (id, config) => axios({
            url: `https://api.testing.com/tracks/${id}/`,
            method: 'delete',
            ...config,
        }),
    },
    tracks: {
        get: config => axios({
            url: 'https://api.testing.com/tracks/',
            method: 'get',
            ...config,
        }),
        post: config => axios({
            url: 'https://api.testing.com/tracks/',
            method: 'post',
            ...config,
        }),
    }
};

jest.mock('axios');

describe('integrationFunctions', () => {
    beforeEach(() => {
        axios.mockReset();
    });

    const api = integrationFunctions(routeDefinitions);

    it('creates an object of api integration functions based on user supplied config', () => {
        expect(Object.keys(api)).toEqual(['track', 'tracks']);
        expect(Object.keys(api.track)).toEqual(['get', 'patch', 'delete']);
        expect(Object.keys(api.tracks)).toEqual(['get', 'post']);
    });

    it('calls an api endpoints without url params', () => {
        api.tracks.get();
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: 'https://api.testing.com/tracks/'
        });
    });

    it('calls an api endpoints with url params', () => {
        api.track.get({ id: 123 });
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: 'https://api.testing.com/tracks/123/'
        });
    });
});
