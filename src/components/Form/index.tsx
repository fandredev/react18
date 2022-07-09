import React, { Dispatch, FormEvent, useState } from 'react';
import { TasksListProps } from "types/tasks";
import Button from "../Button";
import styles from "./form.module.scss";

import { v4 as uuidv4 } from 'uuid';

interface FormProps {
  setTasks: Dispatch<React.SetStateAction<TasksListProps[]>>
}

export default function Form({ setTasks }: FormProps) {
  const [task, setTask] = useState("")
  const [time, setTime] = useState("00:00:00")

  function addNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setTasks((oldState) => [
      ...oldState,
      { task, time, selected: false, completed: false, id: uuidv4() }
    ])

    clearForm()
  }

  function clearForm() {
    setTask('')
    setTime('00:00:00')
  }

  return (
    <form className={styles.newTaskForm} onSubmit={event => addNewTask(event)}>
      <div className={styles.inputContainer}>
        <label htmlFor="task">
          Adicione um novo estudo
        </label>
        <input onChange={event => setTask(event.target.value)} value={task} type="text" name="task" id="task"
          placeholder="O que você quer estudar" required />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="time">
          Tempo
        </label>
        <input data-testid="input-time" onChange={event => setTime(event.target.value)} value={time} type="time" step="1" name="time" id="time"
          min="00:00:00" max="01:30:00" required />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  )
}

// export default class Form extends Component<FormProps> {
//   state = {
//     task: '',
//     time: '00:00:00'
//   }
//
//   protected changeValueTask(event: ChangeEvent<HTMLInputElement>) {
//     const task = event.target.value
//     this.setState({
//       ...this.state,
//       task
//     })
//   }
//
//   protected changeValueTime(event: ChangeEvent<HTMLInputElement>) {
//     const time = event.target.value
//     this.setState({
//       ...this.state,
//       time
//     })
//   }
//
//   protected addNewTask(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//     this.props.setTasks((oldState) => [
//       ...oldState,
//       {...this.state, selected: false, completed: false, id: uuidv4()}
//     ])
//
//     this.clearForm()
//   }
//
//   private clearForm() {
//     this.setState({
//       task: '',
//       time: '00:00:00'
//     })
//   }
//
//   render() {
//     const {time, task} = this.state
//     return (
//       <form className={styles.newTaskForm} onSubmit={event => this.addNewTask(event)}>
//         <div className={styles.inputContainer}>
//           <label htmlFor="task">
//             Adicione um novo estudo
//           </label>
//           <input onChange={event => this.changeValueTask(event)} value={task} type="text" name="task" id="task"
//                  placeholder="O que você quer estudar" required/>
//         </div>
//         <div className={styles.inputContainer}>
//           <label htmlFor="time">
//             Tempo
//           </label>
//           <input onChange={event => this.changeValueTime(event)} value={time} type="time" step="1" name="time" id="time"
//                  min="00:00:00" max="01:30:00" required/>
//         </div>
//         <Button type="submit">Adicionar</Button>
//       </form>
//     )
//   }
// }
