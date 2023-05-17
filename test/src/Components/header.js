import React from "react"
import { Card, CardBody } from "reactstrap";

function Header({name,title}){
    return(
            
        <div className="text-center my-3">
            <Card className="my-1 bg-warning">
                <CardBody>
                <h1>Welcome to Courses Application</h1>
                </CardBody>
            </Card>
        </div>


        // <div style={{background:"yellow", padding:20,width:400}}>
        //     <h1> Hello {name +" "+ title} </h1>
        //     <p>This is Header Component</p>
        // </div>
    );
}
export default Header;