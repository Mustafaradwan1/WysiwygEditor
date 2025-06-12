import { useState } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
const defaultStyles = {
  border: '1px solid #ccc',
  padding: '8px',
  minHeight: '120px',
  cursor: 'text',
};
type Props = {
  value?: EditorState; 
  onChange?: (editorState: EditorState) => void; 
  Btns?: (formatFn: (style: string) => void) => React.ReactNode;
  className?: string; 
  style?: React.CSSProperties;
};
const DefaultToolbar = ({ onToggle }: { onToggle: (style: string) => void }) => (
  <div style={{ marginBottom: '8px' }}>
    <button style={{margin:"0 5px"}} onMouseDown={(e) => { e.preventDefault(); onToggle('BOLD'); }}>Bold</button>
    <button style={{margin:"0 5px"}} onMouseDown={(e) => { e.preventDefault(); onToggle('ITALIC'); }}>Italic</button>
    <button style={{margin:"0 5px"}} onMouseDown={(e) => { e.preventDefault(); onToggle('UNDERLINE'); }}>Underline</button>
  </div>
);

const WysiwygEditor: React.FC<Props> = ({ 
     value,
     onChange,
     Btns,
     style,
     className
    }) => {
    const [internalState, setInternalState] = useState(() =>
    EditorState.createEmpty()
  );
  const isControlled = value !== undefined && onChange !== undefined;
  const controlledState = isControlled ? value : internalState
  const handleChange = (NewValue:EditorState)=>{
    if(isControlled){
        onChange(NewValue)
    }else{
        setInternalState(NewValue)
    }
  }
  const handleToggle = (style:string)=>{
    handleChange(RichUtils.toggleInlineStyle(controlledState, style));
  }
  return (
    <div className={className} style={style}>
        {Btns ? Btns(handleToggle) : <DefaultToolbar onToggle={handleToggle} />}
        <div style={ defaultStyles }>
            <Editor
                editorState={controlledState}
                onChange={handleChange}
             />
        </div>
    </div>
  )
}

export default WysiwygEditor