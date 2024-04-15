import './App.css';
import Navbar from './COMPONENTS/Navbar';
import TextForm from './COMPONENTS/TextForm';

function App() {
  return (
    <>
    <Navbar title= "TesxtUtils" />
    <div className='container my-5'>
    <TextForm heading= "ENTER THE TEXT TO CONVERT IN UPPER CASE" />

    </div>
    </>
  );
}

export default App;
