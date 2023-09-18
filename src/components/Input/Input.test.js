import { render, fireEvent, screen } from '@testing-library/react'
import { ContentInput } from './ContentInput'
import '@testing-library/jest-dom';

const InputComponent = () => {
  return <ContentInput label='Nome' type='text' placeholder='Seu nome e sobrenome' />
}

describe('Input Component', () => {
  it('should render the <Input /> with success', () => {
    render(<InputComponent />)
  })

  it('should change the value', () => {
    render(<InputComponent />)

    const inputTest = screen.getByRole('textbox')

    fireEvent.input(inputTest, {
      target: {
        value: 'new-value-test'
      }
    })

    expect(inputTest).toHaveValue('new-value-test')
  })

  it('disables the input when disabled prop is true', () => {
    render(<ContentInput placeholder='Seu nome e sobrenome' disabled />)

    const inputElement = screen.getByPlaceholderText('Seu nome e sobrenome')

    expect(inputElement).toBeDisabled()
  })

  it('displays type when there is a type prop', () => {
    const inputType = 'text';
  
    render(<ContentInput type={inputType} />);
  
    const inputElement = screen.getByRole('textbox');
  
    expect(inputElement).toHaveAttribute('type', inputType);
  });
  
  it('displays the label when there is a label prop', () => {
    render(<ContentInput label='Nome' />);
  
    const labelElement = screen.getByText('Nome');
  
    expect(labelElement).toBeInTheDocument();
  });

  it('displays the placeholder when there is a placeholder prop', () => {
    render(<ContentInput placeholder={'Seu nome e sobrenome'} />);
  
    const inputElement = screen.getByPlaceholderText('Seu nome e sobrenome');
  
    expect(inputElement).toBeInTheDocument();
  });
})
