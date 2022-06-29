import Form from "components/Form";
import List from "components/List";
import Stopwatch from "components/Stopwatch";
import { useState } from "react";
import { TasksListProps } from "types/tasks";
import style from './app.module.scss';


export default function App() {
  const [tasks, setTasks] = useState<TasksListProps[]>([])
  const [taskSelected, setTaskSelected] = useState<TasksListProps>()

  function selectTask(selectedTask: TasksListProps) {
    setTaskSelected(selectedTask)
    const isTaskSelectedExists = selectedTask !== undefined
    setTasks(oldTasks => oldTasks.map(oldTask => ({
      ...oldTask,
      selected: oldTask.id === (isTaskSelectedExists && selectedTask.id)
    })))
  }

  function finishTask() {
    if (taskSelected) {
      setTaskSelected(undefined)
      setTasks(oldTasks => oldTasks.map(oldTask => {
        if (oldTask.id === taskSelected.id) {
          return { ...oldTask, selected: false, completed: true }
        }

        return oldTask
      }))
    }
  }

  return (
    <main className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch taskSelected={taskSelected} finishTask={finishTask} />
    </main>
  );
}

