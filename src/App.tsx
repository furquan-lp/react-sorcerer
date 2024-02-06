import { useState, useEffect } from "react";

import RSEditor from "./components/Editor";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [defaultText, setDefaultText] = useState<string>('');

  useEffect(() => {
    const pastText: string | null = localStorage.getItem('rseditorText');
    if (pastText !== null) {
      setDefaultText(pastText);
    } else {
      (async () => {
        const defaultFile = await fetch('/Default.md');
        if (defaultFile.ok) {
          const text = await defaultFile.text();
          setDefaultText(text);
        }
      })();
    }
  }, []);

  return (
    <div className='bg-nord1 text-nord6 min-h-screen max-w-full'>
      <Header />
      <article className='md:w-1/2 md:mx-auto md:p-0 p-2'>
        <RSEditor text={defaultText !== '' ? defaultText : undefined} />
      </article>
      <Footer />
    </div>
  );
};

export default App;
