import { render, screen } from "@testing-library/react";
import TasksList from "..";


describe(`Test component: ${TasksList.name} `, () => {
  it('Should be possible to snapshot the TasksList component when the page is rendered', () => {
    const { container } = render(<TasksList id="1" selectTask={() => { }} time="01:00:00" task={'Aprender Vue'} completed={false} selected={false} />)

    expect(container).toMatchSnapshot()
  })

  it('Should only contain the "item" class when i don"t have the task completed or selected', () => {
    render(
      <TasksList
        id="1"
        selectTask={() => { }}
        time="01:00:00"
        task={'Aprender Vue'}
        completed={false}
        selected={false}
      />
    )

    const getClassList = screen.getByRole('listitem').getAttribute('class')
    expect(getClassList).toBe('item')

  })

  it('Should only contain the "item listSelected" classes when i have the task selected', () => {
    render(
      <TasksList
        id="1"
        selectTask={() => { }}
        time="01:00:00"
        task={'Aprender Vue'}
        completed={false}
        selected
      />
    )

    const getClassList = screen.getByRole('listitem').getAttribute('class')
    expect(getClassList).toMatch(/item listSelected/i)

  })

  it('Should only contain the "item listSelected listCompleted" classes when i have the task selected and completed', () => {
    render(
      <TasksList
        id="1"
        selectTask={() => { }}
        time="01:00:00"
        task={'Aprender Vue'}
        completed
        selected
      />
    )

    const getClassList = screen.getByRole('listitem').getAttribute('class')
    expect(getClassList).toMatch(/listSelected listCompleted/i)

  })

  it('The task that the user wants to do must be rendered', () => {
    render(
      <TasksList
        id="1"
        selectTask={() => { }}
        time="01:00:00"
        task={'Aprender Vue'}
        completed={false}
        selected={false}
      />
    )

    const getTitleItemList = screen.getByText('Aprender Vue')
    expect(getTitleItemList.textContent).toBe('Aprender Vue')
  })

  it('The time that the user wants to do must be rendered', () => {
    render(
      <TasksList
        id="1"
        selectTask={() => { }}
        time="01:00:00"
        task={'Aprender Vue'}
        completed={false}
        selected={false}
      />
    )

    const getTitleItemList = screen.getByText('01:00:00')
    expect(getTitleItemList.textContent).toBe('01:00:00')
  })

  it('Should show completed task icon when task is completed', () => {
    render(
      <TasksList
        id="1"
        selectTask={() => { }}
        time="01:00:00"
        task={'Aprender Vue'}
        completed
        selected={false}
      />
    )

    const getIconCompletedTask = screen.getByLabelText('Tarefa completada')
    expect(getIconCompletedTask).toBeInTheDocument()

  })

  it('Should be able to have the class "completed" when the task is completed', () => {
    render(
      <TasksList
        id="1"
        selectTask={() => { }}
        time="01:00:00"
        task={'Aprender Vue'}
        completed
        selected={false}
      />
    )

    const getIconCompletedTask = screen.getByRole('listitem').getAttribute('class')
    expect(getIconCompletedTask).toMatch(/listCompleted/i)

  })

})