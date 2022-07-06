import { render, screen } from "@testing-library/react";
import Button from "../index";

describe(`Test component: ${Button.name}`, () => {

  test('Should be possible to snapshot the Button component when the page is rendered', () => {
    const { container } = render(<Button type="button">Começar</Button>)

    expect(container).toMatchSnapshot()
  })

  test('Should be able to load the button component with the children props', () => {
    render(<Button type="button">Começar</Button>)

    const button = screen.getByRole('button')
    expect(button.textContent).toBe('Começar')
  })
})
