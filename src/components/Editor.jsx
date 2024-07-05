import React, { useState } from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import { Controlled as EditorController } from "react-codemirror2";

function Editor(props) {
  const { displayName, language, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  const [open, setOpen] = useState(true);

  return (
    
      <div className={`min-w-[10vw] flex flex-col mx-auto rounded flex-grow ${open ? '' : 'flex-grow-0'}`}>
        <div className="flex justify-between px-3 bg-slate-950 text-white rounded-tl-lg rounded-tr-lg">
          {displayName}
          <button onClick={() => setOpen(prev => !prev)} type="button" className="bg-slate-50 text-black">X</button>
        </div>
        <div className="flex-1">
            <EditorController
              className="overflow-hidden rounded-bl-md rounded-br-md flex-grow"
              onBeforeChange={handleChange}
              value={value}
              options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: 'material',
                lineNumbers: true
              }}
            />
          </div>
      </div>
    
  );
}

export default Editor;
