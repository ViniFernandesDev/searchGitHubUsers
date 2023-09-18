import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders children when loading is false', () => {
    render(<Button loading={false}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('disables the button when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeDisabled();
  });

  it('calls the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders a loader when loading is true', () => {
    render(<Button loading>Click me</Button>);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });
});
