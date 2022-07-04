import Button from ".";
import {render, screen} from "@testing-library/react";

describe(`Test component: ${Button.name}`,() => {

  test('Should be able to load the button component with the children props', () => {
    render(<Button type="button">Começar</Button>)

    const button = screen.getByTestId('button-test')
    expect(button.textContent).toBe('Começar')
  })
})
