import React, { useState, useCallback, useEffect } from 'react'
import { csv, arc, pie } from 'd3'
// import { message } from './utils/message'
// useCallback - good for adding event listeners only once
// - arg0 - function you want to control
// - arg1 - [array, of, dependencies] - things it needs to run
import './App.css'

const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'
// const csvUrl = 'https://gist.githubusercontent.com/ryan258/e4239ed73da5e5e8cc195f9c6560c89d/raw/cssNamedColors.csv'

const width = 500
const height = 500
const centerX = width / 2
const centerY = height / 2

const pieArc = arc().innerRadius(0).outerRadius(width)

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(setData)
  }, [])

  if (!data) {
    return <pre>'Loading...'</pre>
  }

  // console.log(data[0])

  const colorPie = pie().value(1)

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {
          colorPie(data).map((d) => (
            <path fill={d.data['RGB hex value']} d={pieArc(d)} />
          ))

          /* data.map((d, i) => (
          <path
            key={i}
            fill={d['RGB hex value']}
            d={pieArc({
              startAngle: (i / data.length) * 2 * Math.PI,
              endAngle: ((i + 1) / data.length) * 2 * Math.PI
            })
            }
          />
        )) */
        }
      </g>
    </svg>
  )
}

export default App
