export default () => {
  const wsUrl = process.env.REACT_APP_WS_URL!;
  const socket = new WebSocket(wsUrl);
  const reader = new FileReader();
  socket.onmessage = ({ data }: MessageEvent) => {
    // JSON will appear as a `Blob` at this point
    // Need to use a file reader in order to transform it
    if (data instanceof Blob) {
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          // TODO: send this via a saga event channel so it can be added to the store
          // https://redux-saga.js.org/docs/advanced/Channels.html
          console.log(JSON.parse(result));
        }
      };
      reader.readAsText(data);
    }
  };
};
