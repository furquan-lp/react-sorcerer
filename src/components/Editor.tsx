import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function RSEditor() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  return (
    <div className='my-10 p-6 shadow shadow-nord0 rounded bg-nord4 text-nord0'>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}