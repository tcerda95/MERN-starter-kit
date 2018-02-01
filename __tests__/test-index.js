import React from 'react';
import Hero from '../src/components/Hero';
import ReactDOM from 'react-dom';

describe('React Hero testing', () => {
    it('mounts without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Hero />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});