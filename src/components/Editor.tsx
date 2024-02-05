import { useState } from 'react';
import { Editor, EditorState, CompositeDecorator, ContentBlock, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const BoldSpan = ({ offsetKey, children }: { offsetKey: string, children: React.ReactNode }) => {
  return (
    <span className='font-bold' key={offsetKey}>{children}</span>
  )
};

export default function RSEditor() {
  const decorator: CompositeDecorator = new CompositeDecorator([{
    strategy: findWithRegex, component: BoldSpan
  }])
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty(decorator));

  function findWithRegex(contentBlock: ContentBlock, callback: (start: number, end: number) => void,
    contentState: ContentState) {
    const BOLD_REGEX: RegExp = /\*\*[^*]+\*\*/g;

    const text = contentBlock.getText();
    let matchArr;
    let start = 0;

    while ((matchArr = BOLD_REGEX.exec(text)) !== null) {
      start = matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  }

  return (
    <div className='my-10 p-6 shadow shadow-nord0 rounded bg-nord4 text-nord0 min-h-96 max-h-[75vh] overflow-scroll'>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}