import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/duotone-dark.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/jsx/jsx';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/addon/lint/javascript-lint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExpandAlt,
  faCompressArrowsAlt,
} from '@fortawesome/free-solid-svg-icons';

const Editor = (props) => {
  const { langName, language, value, onChange } = props;

  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {langName}
        <button
          type="button"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          className="btn collapse-btn"
        >
          <FontAwesomeIcon icon={open ? faCompressArrowsAlt : faExpandAlt} />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="codemirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'duotone-dark',
          lineNumbers: true,
          autocorrect: 'true',
        }}
      />
    </div>
  );
};

export default Editor;
