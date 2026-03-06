export const loadRemote = (url: string, scope: string) =>
  new Promise((resolve, reject) => {
    if (scope in window) {
      return resolve(undefined);
    }

    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => resolve(undefined);
    script.onerror = reject;

    document.head.appendChild(script);
});
