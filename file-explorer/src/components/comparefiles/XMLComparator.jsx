import React, { useState } from "react";
import { parseString } from "xml2js";
import { diff } from "deep-diff";
import "./XMLComparator.css";

const XMLComparator = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [parsedXML1, setParsedXML1] = useState(null);
  const [parsedXML2, setParsedXML2] = useState(null);
  const [differences, setDifferences] = useState([]);

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.readAsText(file);
  };

  const parseXML = (xmlString, setParsedXML) => {
    parseString(xmlString, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        setParsedXML(sortXML(result));
      }
    });
  };

  const sortXML = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(sortXML).sort((a, b) => {
        if (typeof a === "object" && typeof b === "object") {
          const tagA = Object.keys(a)[0];
          const tagB = Object.keys(b)[0];
          return tagA.localeCompare(tagB);
        }
        return 0;
      });
    } else if (typeof obj === "object") {
      const sortedObj = {};
      Object.keys(obj)
        .sort()
        .forEach((key) => {
          sortedObj[key] = sortXML(obj[key]);
        });
      return sortedObj;
    }
    return obj;
  };

  const handleCompare = () => {
    if (parsedXML1 && parsedXML2) {
      const differences = diff(parsedXML1, parsedXML2);
      setDifferences(differences || []);
    }
  };

  const renderXML = (xml) => {
    return JSON.stringify(xml, null, 2)
      .split("\n")
      .map((line, index) => (
        <div key={index} className="line">
          {line}
        </div>
      ));
  };

  const renderDifferences = () => {
    if (differences.length === 0) {
      return <p>No differences found.</p>;
    }

    return differences.map((difference, index) => (
      <div key={index} className="difference">
        <strong>Path:</strong> {difference.path.join(" > ")}
        <br />
        <strong>Kind:</strong> {difference.kind}
        <br />
        {difference.lhs !== undefined && (
          <>
            <strong>Left-hand side:</strong>{" "}
            <pre>{JSON.stringify(difference.lhs, null, 2)}</pre>
          </>
        )}
        {difference.rhs !== undefined && (
          <>
            <strong>Right-hand side:</strong>{" "}
            <pre>{JSON.stringify(difference.rhs, null, 2)}</pre>
          </>
        )}
      </div>
    ));
  };

  return (
    <div>
      <h1>XML Comparator</h1>
      <div>
        <input type="file" onChange={(e) => handleFileChange(e, setFile1)} />
        <input type="file" onChange={(e) => handleFileChange(e, setFile2)} />
        <button onClick={() => parseXML(file1, setParsedXML1)}>
          Parse XML 1
        </button>
        <button onClick={() => parseXML(file2, setParsedXML2)}>
          Parse XML 2
        </button>
        <button onClick={handleCompare}>Compare</button>
      </div>
      <div className="comparison">
        <div className="column">
          <h2>File 1</h2>
          <div className="xml-content">
            {parsedXML1 ? <p>File loaded.</p> : <p>No file loaded.</p>}
          </div>
        </div>
        <div className="column">
          <h2>File 2</h2>
          <div className="xml-content">
            {parsedXML2 ? <p>File loaded.</p> : <p>No file loaded.</p>}
          </div>
        </div>
      </div>
      <div>
        <h2>Differences</h2>
        {renderDifferences()}
      </div>
    </div>
  );
};

export default XMLComparator;
