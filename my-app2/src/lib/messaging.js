//Child
export const listenerCreator = (ref, callback) => {
  // ref.onmessage = callback;
  ref.onmessage = (ev) => console.log(ev.data);
  // ref.onmessage = (ev) => ev.data?.type === "filter" && callback(ev)
  
}

export const broadcaster = (frame, message) => {
  frame.postMessage(message, "*")
}
