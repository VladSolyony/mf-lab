export const mfConfig = {
  name: "remote",
  exposes: {
    './Widget': './src/Widget.tsx'
  },
  shared: ["react", "react-dom"],
  filename: "remoteEntry-v1.js",
};
