import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <div className='container-fluid'>
      <div className='row min-vh-100 flex-column flex-lg-row'>
        <aside
          className='col-lg-3 bg-dark'
        >
          <Navbar />
        </aside>
        <main className='col px-0'>
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
