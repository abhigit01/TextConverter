import './App.css';
import Navbar from './COMPONENTS/Navbar';
import TextForm from './COMPONENTS/TextForm';

function App() {
  return (
    <>
    <Navbar title= "TesxtUtils" />
    <div className='container my-5'>
    <TextForm heading= "Enter The Text To Convert In Upper Or Lower Case" />

    </div>
    </>
  );
}

export default App;
