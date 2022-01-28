import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render, screen } from '@testing-library/react';

test('renders component without errors', ()=> {
    render (<Article/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article/>);

    const headline = screen.queryByTestId('headline');
    const author = screen.queryByTestId('author');

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article />);

    const author = screen.queryByTestId('author');

    expect(author).toHaveTextContent(/associated press/i)
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete = jest.fn();

    render (<Article handleDelete={handleDelete}/>);

    const deleteButton = screen.queryByRole('button');

    userEvent.click(deleteButton);

    expect(handleDelete).toHaveBeenCalled();
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.