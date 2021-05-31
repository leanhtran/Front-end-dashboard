import React, { useEffect, useState } from 'react'
import ReactExport from "react-data-export";

function ExportExel({ children, data, fileName, className }) {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    getKeysInData();
  }, [])

  const getKeysInData = () => {
    const keys = [];
    if (data && data.length > 0) {
      for(let key in data[0]) {
        keys.push(key);
      }
      setKeys(keys);
    }
  };

  const renderExel = () => {
    let result = [];
    if (data && data.length > 0) {
      for(let key in data[0]) {
        result.push(<ExcelColumn label={capitalizeFirstLetter(key)} value={key}/>);
      }
    }
    console.log('result', result);
    return result;
  };

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ExcelFile className={className} filename={fileName} element={children}>
      <ExcelSheet data={data} name={fileName}>
        {renderExel()}
      </ExcelSheet>
    </ExcelFile>
  );
};

export default ExportExel
