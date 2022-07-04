import Clock from "../";
import {render} from "@testing-library/react";


describe(`Tests from ${Clock.name}`, () => {
  it('Should be possible to render the Clock component when the page is rendered',() => {
    render(
      <Clock time={10} />
    )
  })
})
