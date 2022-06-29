import classNames from 'classnames';
import { TasksListProps } from "types/tasks";
import styles from './taskslist.module.scss';

interface ListTasksProps extends TasksListProps {
  selectTask: (selectedTask: TasksListProps) => void
}


export default function TasksList({ task, time, id, selected, completed, selectTask }: ListTasksProps) {
  return (
    <li className={classNames({
      [styles.item]: true,
      [styles.listSelected]: selected,
      [styles.listCompleted]: completed
    })} onClick={() => !completed && selectTask({
      task, time, id, selected, completed
    })}>
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={styles.completed} aria-label="Tarefa completada" />}
    </li>
  )
}
