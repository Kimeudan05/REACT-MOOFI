import React from 'react'
import Part from './Part'

const Content = ({part1,part2,part3,exercises1,exercises3,exercises2}) => {
  return (
    <div>
      <Part part={part1} excercises={exercises1}/>
      <Part part={part2} excercises={exercises2}/>
      <Part part={part3} excercises={exercises3}/>
    </div>
  )
}

export default Content