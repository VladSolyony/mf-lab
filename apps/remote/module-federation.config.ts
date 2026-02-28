export const mfConfig = {
  name: "remote",
  exposes: {
    './Widget': './src/Widget.tsx'
  },
  shared: ["react", "react-dom"],
  filename: "remoteEntry.js",
};
