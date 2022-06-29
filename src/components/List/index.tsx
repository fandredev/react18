import { TasksListProps } from "types/tasks";
import styles from "./list.module.scss";
import TasksList from "./TasksList";

interface ListProps {
  tasks: TasksListProps[]
  selectTask: (selectedTask: TasksListProps) => void
}

export default function List({ tasks, selectTask }: ListProps): JSX.Element {

  return (
    <aside className={styles.listTasks}>
      {tasks.length === 0 ? <h2>Você ainda não adicionou algum estudo hoje.</h2> : <h2>Estudos do dia</h2>}
      <ul>
        {tasks.map((task) =>
          <TasksList selectTask={selectTask} {...task} key={task.id} />
        )}
      </ul>
    </aside>
  )
}
