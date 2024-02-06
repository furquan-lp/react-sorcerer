import { useEffect, useState } from 'react';
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
    [/\`[^*]+\`/g, 'font-mono bg-nord1 text-nord8 p-0.5 rounded'],
    [/-[^*]+-/g, 'block text-center text-2xl'],
    [/(\_{1}#{4}\s)(.*)/g, 'font-bold text-base underline'],
    [/(\_{1}#{3}\s)(.*)/g, 'font-bold text-[1.17em] underline'],
    [/(\_{1}#{2}\s)(.*)/g, 'font-bold text-[1.5em] underline'],
    [/(\_{1}#{1}\s)(.*)/g, 'font-bold text-[2em] underline'],
    [/(#{4}\s)(.*)/g, 'font-bold text-base'],
    [/(#{3}\s)(.*)/g, 'font-bold text-[1.17em]'],
    [/(#{2}\s)(.*)/g, 'font-bold text-[1.5em]'],
    [/(#{1}\s)(.*)/g, 'font-bold text-[2em]'],
    [/\_\*\*\*[^*]+\*\*\*\_/g, 'italic font-bold underline'],
    [/\*\*\*[^*]+\*\*\*/g, 'italic font-bold'],
    [/\_\*\*[^*]+\*\*\_/g, 'font-bold underline'],
    [/\*\*[^*]+\*\*/g, 'font-bold'],
    [/\_\*[^*]+\*\_/g, 'italic underline'],
    [/\*[^*]+\*/g, 'italic'],
    [/\_[^*]+\_/g, 'underline'],
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

export default function RSEditor({ text, lsKey }: { text?: string | undefined, lsKey: string }) {
  const decorator: CompositeDecorator = new CompositeDecorator(getDecorators())
  const [editorState, setEditorState] = useState(() => {
    if (text) {
      return EditorState.createWithContent(ContentState.createFromText(text), decorator);
    } else {
      return EditorState.createEmpty(decorator);
    }
  });

  useEffect(() => {
    if (text) {
      setEditorState(() => EditorState.createWithContent(ContentState.createFromText(text), decorator));
    }
  }, [text]);

  const handleEditorState = (e: EditorState) => {
    localStorage.setItem(lsKey, e.getCurrentContent().getPlainText());
    setEditorState(e);
  }

  return (
    <div className='editor my-10 p-6 shadow shadow-nord0 rounded bg-nord2 text-nord6 min-h-96 max-h-[75vh]
     overflow-scroll'>
      <Editor editorState={editorState} onChange={handleEditorState} placeholder='You can begin typing...'
        spellCheck={true} />
    </div>
  );
}