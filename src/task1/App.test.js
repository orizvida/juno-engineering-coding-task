import { render,screen } from '@testing-library/react';
import App from "./App";
test("Testing works!", () => {
  render(<App />);
  const nextBtn = screen.getByTestId('nextbtn')
  const prevBtn = screen.getByTestId('prevbtn')
  const skeleton = screen.getByTestId('placeholder')

  expect(nextBtn).toBeDisabled();
  expect(prevBtn).toBeDisabled();  
  expect(skeleton).toBeInTheDocument();  

});

