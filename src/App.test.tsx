import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
 

  it('applies the app-main class to the main container', () => {
    render(<App />);

    // Check if the main container has the correct class
    const container = screen.getByRole('main'); // Use the correct role or selector
    expect(container).toHaveClass('app-main');
  });
});
