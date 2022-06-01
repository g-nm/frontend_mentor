import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ContextProvider from './Store/Context';

function App() {
  return (
    <div className="">
      <ContextProvider>
        <Navbar />
        <Header />
      </ContextProvider>
    </div>
  );
}

export default App;
