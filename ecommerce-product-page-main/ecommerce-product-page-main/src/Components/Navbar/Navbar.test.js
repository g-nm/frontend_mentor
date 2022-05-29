import { render } from '@testing-library/react';
import Navbar from './Navbar';

describe('Test for Navbar component', function () {
  it('Should render correctly', function () {
    render(<Navbar />);
  });
});
