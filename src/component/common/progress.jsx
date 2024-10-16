
import { LineProgress, LineProgressBar } from 'keep-react'
import { twMerge } from 'tailwind-merge'

export const ProgressComponent = ({value, className}) => {
  return (
    <div className={twMerge("flex flex-col gap-5", className)}>
      <LineProgress progress={value} className='w-[527px] h-[5px] bg-[#d8d8d8]'>
        <LineProgressBar className='h-[5px] bg-primary'/>
      </LineProgress>
    </div>
  )
}
