import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);
  useEffect(() => {
    if (url) {
    }
  }, [url, setFile]);
  return (
    <>
      <img
        src={url}
        style={{ width: "200px" }}
        className="progess-bar"
        alt="Preview"
      />
      <div
        className="progess-bar"
        style={{
          maxWidth: "200px",
          background: "purple",
          width: progress + "%",
          height: "5px",
        }}
      ></div>
    </>
  );
};
export default ProgressBar;
