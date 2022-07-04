import List from "../index";
import {render, screen} from "@testing-library/react";
import {TasksListProps} from "../../../types/tasks";
import TasksList from "../TasksList";
import {task} from "../mocks/list.mock";

describe(`Test component: ${List.name}`,() => {
  const emptyTasks: TasksListProps[] = []

  test('Should be render a component', () => {
    render(
      <List selectTask={() => null} tasks={emptyTasks}/>
    )
  })

  test("Should be able to show the page title when i'm not a list of studies", async () => {
    render(<List selectTask={() => null} tasks={emptyTasks}/>)

    const title = await screen.findByText('Você ainda não adicionou algum estudo hoje.')
    expect(title).toBeInTheDocument()
  })

  test('Should be able to show the page title when I have one or more studies added to the list', async () => {
    render(<List selectTask={() => null} tasks={task}/>)

    const title = await screen.findByText('Estudos do dia')
    expect(title.textContent).toBe('Estudos do dia')
  })

  test(`It should be able to render the ${TasksList.name} component when one or more items are added to the list`, async () => {
    render(<List selectTask={() => null} tasks={task}/>)

    const itemList = screen.queryByTestId('tasks-list-item')
    expect(itemList).toBeInTheDocument()
  })

  test('Should be able to have an item in the list when an item is added to the list', () => {
    render(<List selectTask={() => null} tasks={task}/>)

    const itemList = screen.queryAllByTestId('tasks-list-item')
    expect(itemList).toHaveLength(1)
  })

  test('Should be able to have more than one item in the list when items are added to the list', () => {
    const tasks =[{
      task: 'Aprender Angular',
      id: '2',
      selected: false,
      completed: false,
      time: '01:00:00'
    }, {
      task: 'Aprender Vue',
      id: '3',
      selected: false,
      completed: false,
      time: '01:00:00'
    }]

    render(<List selectTask={() => null} tasks={tasks}/>)

    const itemList = screen.queryAllByTestId('tasks-list-item')
    expect(itemList).toHaveLength(2)
  })
})
