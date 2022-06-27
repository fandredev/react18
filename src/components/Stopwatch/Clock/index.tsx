import styles from './clock.module.scss'

interface ClockProps {
  time: number | undefined
}

export default function Clock({time = 0}: ClockProps) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minTen, minUnity] = String(minutes).padStart(2,'0')
  const [secTen, secUnity] = String(seconds).padStart(2,'0')

  return (
    <>
      <span className={styles.clockNumber}>{minTen}</span>
      <span className={styles.clockNumber}>{minUnity}</span>
      <span className={styles.clockDivision}>:</span>
      <span className={styles.clockNumber}>{secTen}</span>
      <span className={styles.clockNumber}>{secUnity}</span>
    </>
  )
}

