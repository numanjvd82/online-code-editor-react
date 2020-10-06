import React, { Fragment, useState, useEffect } from 'react';
import Editor from './components/Editor.component/editor.component';

function App() {
  const [htmlMixed, setHtmlmixed] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${htmlMixed}</body>
        <style>${css}</style>
        <script>${js}</script>
        
      </html>
      `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [htmlMixed, css, js]);

  return (
    <Fragment>
      <div className="pane top-pane">
        <Editor
          language="htmlmixed"
          langName="HTML"
          value={htmlMixed}
          onChange={setHtmlmixed}
        />
        <Editor language="css" langName="CSS" value={css} onChange={setCss} />
        <Editor
          language="javascript"
          langName="JavaScript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        />
      </div>
    </Fragment>
  );
}

export default App;
