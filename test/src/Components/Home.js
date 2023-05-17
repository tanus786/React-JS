import React from "react";
import {Container, Button} from "reactstrap";
const Home= () =>{
    return(
        <div>
            <Container className="text-center" style={{background:"beige"}}>
                <div>
                <h1 >Hey There!!</h1>
                <p>This is my website for Courses.</p>
                </div>
                <Button color="primary" outline>
                    Start Using My Application
                </Button>
            </Container>

        </div>


    )

 }
 export default Home;