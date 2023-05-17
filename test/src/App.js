// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
// import Course from './Components/course';
import AllCourses from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import Header from './Components/header';
// import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row , Col } from 'reactstrap';
import Leftoption from './Components/LeftOptions';
function App() {
  // const btnHandle = () => { //Arrow function
  //   toast("This is toast");
  //   // toast.success("Done",{
  //   //   position: "top-center",
  //   // });
  //   // toast.error("Error",{
  //   //   position: "top-center",
  //   // });
  // };

  return (
      <div>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md ={4}>
            <Leftoption />
            </Col>
            <Col md ={8}><Home /> </Col>
          </Row>
        </Container>

      </div>
















      // <div>
      //   <Home />

      //   <AllCourses />
        
      //   <AddCourse />


      //   {/* <Course course={{title :"Java course", discription:"This is java Course"}}/>
      //   <Course course={{title :"Php Course", discription:"This is Php Course"}}/> */}
      // {/* All courses */}

      // </div>    


  // <div>
  //     <ToastContainer />
  //     <h1>Hello World This is BootStrap Component</h1>
  //     <Button color="primary" onClick={btnHandle}>Click</Button>


  //   </div>


    // <div>
    //   <h1>Hello World This is BootStrap Component</h1>
    //   <Button color="primary">Click</Button>
    // </div>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    // <div>
    //   {/* name, tile are props */}
    //   <Header name = "Tanu" title= "Soni" />
    //   <hr/>
    //   {/* <Header /> */}
    //   <h1> This is My React Application</h1>
    //   <p> This is Paragraph</p>
    //   <hr/>
    //   <Header name = "Manisha" title = "Agrawal" />
    //   <hr/>
    // </div>
    
  );
}

export default App;
