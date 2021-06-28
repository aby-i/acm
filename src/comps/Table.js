import React from "react";
import useFirestore from "../hooks/useFirestore";

const Table = ({ setSelected }) => {
  const { docs } = useFirestore("entries");
  console.log(docs);
  return (
    <div>
      {docs &&
        docs.map((doc) => (
          <div key={doc.id} onClick={() => setSelected(doc.url)}>
            <img style={{ maxWidth: "200px" }} src={doc.url} alt="Upload Pic" />
          </div>
        ))}
    </div>
  );
};

export default Table;
