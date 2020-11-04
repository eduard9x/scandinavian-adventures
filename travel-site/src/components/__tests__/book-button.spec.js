import React from 'react';
import {describe, expect, it} from '@jest/globals';
import BookButton from '../book-ticket';

import {fireEvent, render, screen} from '@testing-library/react';

describe('BookButton', () => {
  it('renders correctly', () => {
    const mockCallback = jest.fn();
    const bookMessage = 'Book experience';
    render(
        <BookButton id='winter-tour-gothenburg'
                    callback={mockCallback}
                    featured={false}/>,
    );

    expect(screen.queryByText(bookMessage)).toBeDefined();
  });

  it('disabled the button on click', () => {
    const mockCallback = jest.fn();
    const bookMessage = 'Book experience';
    render(
        <BookButton id='winter-tour-gothenburg'
                    callback={mockCallback}
                    featured={false}/>,
    );
    fireEvent.click(screen.queryByText(bookMessage));
    expect(screen.queryByText(bookMessage)).toHaveProperty('disabled', true);
  });
});
