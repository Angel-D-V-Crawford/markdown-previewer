import { useState } from 'react';
import './App.css';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

const defaultState = `# Hello 
## This is a Subheader
### This is an H3 title

[Let's Google](https://www.google.com)

\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
  if(param) {
    return param;
  }
}
\`\`\`

> Block Quote
1. First Item
2. Second Item

![React Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZbZRHsGIPHphj_dtaCEpwlKYSR_kwfJrAcGdI84eWssxBzY2It2fQUHIxAbF0BOc1Vk&usqp=CAU)

**This is a bold text**`

function Preview(props) {
  return (
    <div class='preview'>
      <i className='title'>Preview</i>
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.preview, {renderer: renderer})}}>
      </div>
    </div>
  );
}

function MarkdownPreviewer() {
  const [preview, setPreview] = useState(defaultState);

  const handleEditorOnChange = (event) => {
    setPreview(event.target.value);
  }

  return (
    <div className='wrapper-app'>
      <div className='editor'>
        <i className='title'>Editor</i>
        <textarea id='editor' onChange={handleEditorOnChange} value={preview}></textarea>
      </div>
      <Preview preview={preview} />
    </div>
  );
}

function App() {
  return (
    <div>
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
