import React from 'react';

import Header from '../header';
import {describe, expect, it} from '@jest/globals';
import {render, screen} from '@testing-library/react';

describe('Header', () => {
  it('should be defined', () => {
    const pageTitle = 'Default Starter';
    render(
        <Header siteTitle={pageTitle}/>,
    );
    expect(screen.queryByText(pageTitle)).toBeDefined();
  });

  it('links to homepage', () => {
    const pageTitle = 'Default Starter';
    const basePath = 'http://localhost';
    render(
        <Header siteTitle={pageTitle}/>,
    );
    expect(screen.queryByText(pageTitle)).toHaveProperty('href', `${basePath}/`);
  });
});
