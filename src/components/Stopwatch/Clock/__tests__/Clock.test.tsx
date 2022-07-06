import { render } from "@testing-library/react";
import Clock from "../";


describe(`Tests from ${Clock.name}`, () => {
  it('Should be possible to snapshot the Clock component when the page is rendered', () => {
    const { container } = render(
      <Clock time={10} />
    )

    expect(container).toMatchSnapshot()
  })
})
