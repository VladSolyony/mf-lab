export const mfConfig = {
  name: "host",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    remote: "remote@http://localhost:3001/remoteEntry.js",
  }
};
