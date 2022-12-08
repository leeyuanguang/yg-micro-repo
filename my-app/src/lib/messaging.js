//Parent
export const listenerCreator = (ref, callback) => {
    ref.onmessage = callback;
}

export const broadcaster = (frame, message) => {
  frame.postMessage(message, "*")
}
