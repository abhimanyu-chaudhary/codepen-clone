import React, { useEffect, useState } from 'react'
import Editor from './Editor';
import useLocalStorage from '../hooks/LocalStorage';

function FrontPage() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`);
    }, 250)

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className='w-full h-full'>
      <div className="h-[52vh] flex bg-zinc-400 py-2">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="h-[50vh]">
        <iframe
          className="h-full w-full bg-zinc-400 text-white"
          sandbox="allow-scripts"
          title="output"
          frameBorder="0"
          srcDoc={srcDoc}
        />
      </div>
    </div>
  );
}

export default FrontPage;
