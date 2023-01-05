import "./App.css";
import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default function App() {
  return (
    <div className="App">
      <title>Hire Emmett</title>
      <header>
        <h1>Hire Emmett </h1>
      </header>
      <useScript src="https://testimonial.to/js/iframeResizer.min.js" />
      <iframe
        title="wall-of-love"
        className="App-header"
        src="https://embed.testimonial.to/w/hire-emmett?theme=light&card=small"
        frameborder="5"
        scrolling="yes"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
