import React from "react";
import "./InputFile.css";
export default function InputFile({ title, onChange }) {
  const [nameFile, setNameFile] = React.useState(null);
  function handleOnChange(event) {
    onChange?.(event);
    let fileName = event.target.files[0]?.name;
    if (fileName === undefined) {
      return;
    }
    setNameFile(fileName);
  }
  return (
    <div>
      <label>{title}</label>
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="customFile"
          name="filename"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={handleOnChange}
        />
        <label className="custom-file-label" htmlFor="customFile">
          {nameFile ? nameFile : "Chọn file"}
        </label>
      </div>
    </div>
  );
}
