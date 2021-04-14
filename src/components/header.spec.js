import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Header from './header.js';

describe('Testing header component', function(){
    test('test for rendering header', function(){
        render(<Header />);
        const linkElement = screen.getByText('Yet Another Todo List!');
        expect(linkElement).toBeInTheDocument();
    })
})