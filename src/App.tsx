

import  { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import WysiwygEditor from './components/WysiwygEditor';


const App: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleFakeSave = () => {
    const raw = convertToRaw(editorState.getCurrentContent());
    console.log('Sending to fake API...', JSON.stringify(raw));
    setTimeout(() => {
      alert('Content sent to fake API (check console)');
      setEditorState(EditorState.createEmpty())
    }, 1000);
  };
  return (
    <div style={{ padding: '2rem' }}>
        <h2> Uncontrolled Mode</h2>
        <WysiwygEditor />
        <hr style={{ margin: '2rem 0' }} />
        <h2> Controlled Mode</h2>
        <WysiwygEditor
        className="custom-editor"
        style={{ backgroundColor: '#e8e8e8', padding: '1rem' }}
        value={editorState}
        onChange={setEditorState}
          Btns={(toggleFn) => (
          <div style={{ marginBottom: '8px' }}>
            <button style={{margin:"0 5px"}} onMouseDown={(e) => { e.preventDefault(); toggleFn('BOLD'); }}>Bold</button>
            <button style={{margin:"0 5px"}} onMouseDown={(e) => { e.preventDefault(); toggleFn('ITALIC'); }}>Italic</button>
            <button style={{margin:"0 5px"}} onMouseDown={(e) => { e.preventDefault(); toggleFn('UNDERLINE'); }}>Underline</button>
            <button style={{margin:"0 5px"}} onClick={handleFakeSave}> Fake Save</button>
          </div>
        )}
         />
    </div>
  );
};

export default App;