import React from 'react';
import {describe, expect, it} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import Menu from '../menu';
import Header from '../header';

describe('Menu', () => {
  it('should have a full menu', () => {
    const experiences = 'Experiences';
    const company = 'Company';
    const support = 'Support';
    const bookings = 'Bookings';
    render(
        <Menu/>,
    );
    expect(screen.queryByText(experiences)).toBeDefined();
    expect(screen.queryByText(company)).toBeDefined();
    expect(screen.queryByText(support)).toBeDefined();
    expect(screen.queryByText(bookings)).toBeDefined();
  });

  it('should hide bookings for large screens', () => {
    const bookings = 'Bookings';
    render(
        <Menu/>,
    );
    expect(screen.queryByText(bookings).className).toBe('lg:hidden');
  });

  it('should have well defined link paths', () => {
    const experiences = 'Experiences';
    const company = 'Company';
    const support = 'Support';
    const bookings = 'Bookings';
    const basePath = 'http://localhost';
    render(
        <Menu/>,
    );
    expect(screen.queryByText(experiences).closest('a').href).toBe(`${basePath}/experiences/`);
    expect(screen.queryByText(company).closest('a').href).toBe(`${basePath}/company/`);
    expect(screen.queryByText(support).closest('a').href).toBe(`${basePath}/support/`);
    expect(screen.queryByText(bookings).closest('a').href).toBe(`${basePath}/bookings/`);
  });
});
