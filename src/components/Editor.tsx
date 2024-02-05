import { useState } from 'react';
import { Editor, EditorState, CompositeDecorator, ContentBlock, ContentState, DraftDecoratorComponentProps, DraftDecorator } from 'draft-js';
import 'draft-js/dist/Draft.css';

//const StyledSpan = ({ style, offsetKey, children }: {
//  style: string, offsetKey: string, children: React.ReactNode
//}) => {
//  return (
//    <span className={style} key={offsetKey}>{children}</span>
//  );
//};

function getDecorators(): DraftDecorator<any>[] {
  const richStyles: [RegExp, string][] = [
    [/(#{4}\s)(.*)/g, 'font-bold text-base'],
    [/(#{3}\s)(.*)/g, 'font-bold text-[1.17em]'],
    [/(#{2}\s)(.*)/g, 'font-bold text-[1.5em]'],
    [/(#{1}\s)(.*)/g, 'font-bold text-[2em]'],
    [/\*\*\*[^*]+\*\*\*/g, 'italic font-bold'],
    [/\*\*[^*]+\*\*/g, 'font-bold'],
    [/\*[^*]+\*/g, 'italic'],
  ]

  function findWithRegex(regex: RegExp): (
    block: ContentBlock,
    callback: (start: number, end: number) => void,
    contentState: ContentState,
  ) => void {
    return (contentBlock: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) => {
      const text = contentBlock.getText();
      let matchArr;
      let start = 0;

      while ((matchArr = regex.exec(text)) !== null) {
        start = matchArr.index;
        callback(start, start + matchArr[0].length);
      }
    }
  }

  return richStyles.map(e => {
    const StyledSpan: React.FC<Pick<DraftDecoratorComponentProps, 'offsetKey' | 'children'>> = ({ offsetKey,
      children }) => {
      return (
        <span className={e[1]} key={offsetKey}>{children}</span>
      );
    }
    return {
      strategy: findWithRegex(e[0]),
      component: StyledSpan
    }
  });
}

export default function RSEditor() {
  const decorator: CompositeDecorator = new CompositeDecorator(getDecorators())
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty(decorator));

  return (
    <div className='my-10 p-6 shadow shadow-nord0 rounded bg-nord4 text-nord0 min-h-96 max-h-[75vh] overflow-scroll'>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}