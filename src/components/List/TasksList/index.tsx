import styles from './taskslist.module.scss';
import {TasksListProps} from "../../../types/tasks";

interface ListTasksProps extends TasksListProps {
  selectTask: (selectedTask: TasksListProps) => void
}


export default function TasksList({task, time, id, selected, completed, selectTask}: ListTasksProps) {
  const isSelectedTask = selected ? styles.listSelected : ''
  const isCompletedTask = completed ? styles.listCompleted : ''

  return (
    <li className={`${styles.item} ${isSelectedTask} ${isCompletedTask}`} onClick={() => !completed && selectTask({
      task, time, id, selected, completed
    })}>
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && <span className={styles.completed} aria-label="Tarefa completada"/>}
    </li>
  )
}
