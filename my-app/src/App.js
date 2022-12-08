import './App.css'
import './IFrameComponent'
import React, { useEffect, useState, createRef } from 'react'
import IFrameComponent from './IFrameComponent'
import { listenerCreator, broadcaster } from './lib/messaging'

function App() {
  const childs = [
    {
      url: 'http://localhost:3001',
      title: 'second',
    },
    {
      url: 'http://localhost:3002',
      title: 'third',
    },
    {
      url: 'http://localhost:3003',
      title: 'fourth',
    },
  ]
  useEffect(() => {})
  return (
    <div className="App">
      {childs.map((c, i) => (
        <IFrameComponent key={`frame-${i}`} title={c.title} url={c.url} />
      ))}
    </div>
  )
}

export default App
