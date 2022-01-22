import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Button from './components/Button/Button';

describe('<App />', () => {
  it('should render initial state', () => {
    render(<App />);

    expect(screen.queryByText('Forex Live Wall')).toBeInTheDocument();
    expect(
      screen.queryByText('Please choose currency pair')
    ).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('e.g. usd')).toBeInTheDocument();
  });

  it('should change input value', () => {
    render(<App />);

    const input = screen.getByPlaceholderText('e.g. usd');

    fireEvent.change(input, { target: { value: 'usd' } });

    expect(input).toBeInTheDocument();
  });

  it('should show "Nothing found"', () => {
    render(<App />);

    const firstInput = screen.getByPlaceholderText('e.g. usd');
    const secondInput = screen.getByPlaceholderText('e.g. eur');
    const button = screen.getByText('⇄');
    fireEvent.change(firstInput, { target: { value: 'usd' } });
    fireEvent.change(secondInput, { target: { value: 'eur' } });
    fireEvent.click(button);

    expect(firstInput).toHaveValue('eur');
  });
});

describe('<Button />', () => {
  it('should show', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick} />);

    expect(screen.queryByText('Search')).toBeInTheDocument;

    fireEvent.click(screen.getByText('Search'));

    expect(onClick).toBeCalled;
  });
});
