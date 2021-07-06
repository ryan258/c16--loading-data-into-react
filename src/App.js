import React, { useState, useCallback, useEffect } from 'react'
import { csv } from 'd3'
// import { message } from './utils/message'
// useCallback - good for adding event listeners only once
// - arg0 - function you want to control
// - arg1 - [array, of, dependencies] - things it needs to run
import './App.css'

const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv'
// const csvUrl = 'https://gist.githubusercontent.com/ryan258/e4239ed73da5e5e8cc195f9c6560c89d/raw/cssNamedColors.csv'

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    csv(csvUrl).then(setData)
  }, [])

  if (!data) {
    return <pre>'Loading...'</pre>
  }

  // console.log(data[0])

  return data ? data.map((d, i) => <div key={i} style={{ backgroundColor: d['RGB hex value'], width: '960px', height: '4px' }}></div>) : 'Loading...'
}

export default App
