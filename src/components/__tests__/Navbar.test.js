import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders nav items including ABOUT', () => {
    render(
      <Navbar activeSection="home" menuOpen={false} onToggleMenu={() => {}} onNavClick={() => {}} />
    );

    expect(screen.getByText(/PADDOCK/i)).toBeInTheDocument();
    expect(screen.getByText(/ABOUT/i)).toBeInTheDocument();
    expect(screen.getByText(/LINEUP/i)).toBeInTheDocument();
    expect(screen.getByText(/MUSIC/i)).toBeInTheDocument();
  });

  test('hamburger reflects aria-expanded', () => {
    const { rerender } = render(
      <Navbar activeSection="home" menuOpen={false} onToggleMenu={() => {}} onNavClick={() => {}} />
    );

    const button = screen.getByLabelText(/toggle navigation menu/i);
    expect(button).toHaveAttribute('aria-expanded', 'false');

    rerender(<Navbar activeSection="home" menuOpen={true} onToggleMenu={() => {}} onNavClick={() => {}} />);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  test('clicking link calls onNavClick and closes menu when open', () => {
    const onNavClick = jest.fn();
    const onToggle = jest.fn();

    render(
      <Navbar activeSection="home" menuOpen={true} onToggleMenu={onToggle} onNavClick={onNavClick} />
    );

    const musicLink = screen.getByText(/MUSIC/i);
    fireEvent.click(musicLink);

    expect(onNavClick).toHaveBeenCalledWith('music');
    expect(onToggle).toHaveBeenCalled();
  });

  test('pressing Escape closes menu', () => {
    const onToggle = jest.fn();
    render(<Navbar activeSection="home" menuOpen={true} onToggleMenu={onToggle} onNavClick={() => {}} />);

    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(onToggle).toHaveBeenCalled();
  });

  test('clicking outside closes menu', () => {
    const onToggle = jest.fn();
    const { container } = render(
      <div>
        <Navbar activeSection="home" menuOpen={true} onToggleMenu={onToggle} onNavClick={() => {}} />
        <div data-testid="outside">outside</div>
      </div>
    );

    const outside = screen.getByTestId('outside');
    fireEvent.mouseDown(outside);
    expect(onToggle).toHaveBeenCalled();
  });
});
