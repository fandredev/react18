import { timeToSeconds } from "common/utils/time";
import { useEffect, useState } from "react";
import { TasksListProps } from "types/tasks";
import Button from "../Button";
import Clock from "./Clock";
import style from './stopwatch.module.scss';

interface StopwatchProps {
  taskSelected: TasksListProps | undefined
  finishTask: () => void
}

export default function Stopwatch({ taskSelected, finishTask }: StopwatchProps) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (taskSelected?.time) setTime(timeToSeconds(taskSelected.time))
  }, [taskSelected])

  function startStopwatchRegress(time: number = 0) {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1)
        return startStopwatchRegress(time - 1)
      }
      finishTask()
    }, 1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro.</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => startStopwatchRegress(time)}>Começar</Button>
    </div>
  )
}
