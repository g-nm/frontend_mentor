import { screen, render, fireEvent } from '@testing-library/react';
import Thumbnail from './Thumbnail';

describe('Test Thumbnail Component', () => {
  it('willl run when clicked', () => {
    const handleClickThumbnail = jest.fn();

    const { getByRole } = render(
      <Thumbnail handleClickThumbnail={handleClickThumbnail} />
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClickThumbnail).toBeCalled();
  });
});
