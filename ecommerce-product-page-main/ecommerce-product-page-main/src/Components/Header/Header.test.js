import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', function () {
  it('Header renders correctly', function () {
    render(<Header />);
  });
  it('Changes product image when button is clicked', () => {
    const { getByTestId, getByAltText } = render(<Header />);
    const productImage = getByTestId('productImage');
    // const thumbnailButton = getAllByRole('button')[1];
    const thumbnailImage = getByAltText(
      'a pair of sneakers with one shoe balancing on a rock'
    );
    // const altText = thumbnailButton.querySelector('img').alt;
    const altText = thumbnailImage.alt;
    fireEvent.click(thumbnailImage);
    expect(productImage).toHaveAttribute('alt', altText);
  });
});
