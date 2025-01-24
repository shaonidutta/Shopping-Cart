import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';

describe('Layout Component', () => {
    it('should render the Layout component', () => {
      render(<Layout />);
      expect(screen.getByText(/Product Details/i)).toBeInTheDocument();
    });
});