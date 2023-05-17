import {Container, Button} from "reactstrap";
import React, { Fragment } from "react";
import {  Form, FormGroup, Input } from "reactstrap";

const AddCourse=()=>{
    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form>
                <FormGroup>
                    <label for = "userId">Course Id</label>
                    <Input type = "text" placeholder="Enter Here" name = "userId" id = "userId" />
                </FormGroup>
                <FormGroup>
                    <label for = "title">Course Title</label>
                    <Input type = "text" placeholder="Enter Title Here"  id = "title" />
                </FormGroup>
                <FormGroup>
                    <label for = "discription">Course Discription</label>
                    <Input type = "textarea" placeholder="Enter Discription Here"  id = "discription" style={{height:100}}/>
                </FormGroup>
                <Container className="text-center">
                    <Button color = "primary" outline>Add Course</Button>
                    <Button color="warning ml-3" outline>Clear</Button>
                </Container>

            </Form>
        </Fragment>
    )

}
export default AddCourse;