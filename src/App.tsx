import RSEditor from "./components/Editor";
import Header from "./components/Header";

function App() {
  return (
    <div className='bg-nord1 text-nord6 h-screen max-w-full'>
      <Header />
      <article className='md:w-1/2 md:mx-auto'>
        <RSEditor />
      </article>
    </div>
  );
};

export default App;
