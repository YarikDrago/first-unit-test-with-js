import { render, screen } from '@testing-library/react';
import App from './App';

const {showResult} = require('./App')

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('sum should return the sum of two numbers', ()=>{
  expect(showResult(1,3)).toBe(4)
})
