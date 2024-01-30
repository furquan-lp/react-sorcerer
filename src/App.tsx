import RSEditor from "./components/Editor";
import Header from "./components/Header";

function App() {
  return (
    <div className='bg-nord1 text-nord6 min-h-screen max-w-full'>
      <Header />
      <article className='md:w-1/2 md:mx-auto md:p-0 p-2'>
        <RSEditor />
      </article>
    </div>
  );
};

export default App;
