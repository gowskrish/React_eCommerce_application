import { useCallback, useState } from 'react'
import './App.css'
import Header from '../components/header/header'
// import Main from '../components/main/main'
import Main from '../components/main/classMain'
import Footer from '../components/footer/footer'
import Main_curosal from '../components/main/main_curosal/main_carosal'
import Subscribe_section from '../components/main/subscribe_section/subscribe_section'
import Hooks from '../components/codepractice/hooks/hooksprac';
import MainOld from '../components/main/main.jsx';

function App() {
  // const [users, setUsers] = useState([]);

  // const handleUsers = useCallback((data) => {
  //   setUsers(data);
  //   //  console.log("DataFromHeader", data);
  // }, []);

  // useEffect(() => {
  //     console.log("useEffect running");
  //     setCount(count + 1);
  // }, []);

  // useEffect(() => {
  //         console.log("Mounted / Updated");
  //     }, [count]);

  //     useEffect(() => {
  //       return () => {
  //         console.log("cleaned!!");
  //       }
  //     }, [])

  // useEfect(() => {}, [])

  return (
    <>
      {/* <Header sentDataToParent={handleUsers} /> */}
      {/* <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button> */}
      {/* <h1>{count}</h1> */}
      {/* <Main /> */}
      <MainOld />
      {/* <ProductTable /> */}
      <Main_curosal />  
      <Subscribe_section />
      <Footer />
      {/* <ProductTable /> */}
      <Hooks />
    </>
  )
}

export default App
