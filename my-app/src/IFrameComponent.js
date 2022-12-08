import React, { useEffect, useState, createRef } from 'react'
import { listenerCreator, broadcaster } from './lib/messaging'
function IFrameComponent({ url, title }) {
  const [state, setState] = useState({})
  useEffect(() => {
    listenerCreator(window, (...ev) => console.log('parentlog', ...ev))
    // sending test message to iframe
    broadcaster(frameRef.current.contentWindow, { type: 'test', name: 'frame event' })
    broadcaster(frameRef.current.contentWindow, { type: 'filter', name: 'frame event' })
    // console.log(frameRef.current.contentWindow.postMessage)
  }, [])
  const frameRef = createRef()
  return (
    <div>
      <iframe title={title} src={url} ref={frameRef}></iframe>
    </div>
  )
}

export default IFrameComponent
