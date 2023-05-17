import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Button,Container } from "reactstrap";

const Course = ({course})=>{
    return(
        
            <Card className="text-center">
                <CardBody>
                    <CardSubtitle tag="h5" >{course.title}</CardSubtitle>
                    <CardText>{course.discription}</CardText>
                    <Container className="text-center">
                        <Button color="danger" outline>Delete</Button>
                        <Button color="warning ml-3" outline>Update</Button>
                    </Container>
                </CardBody>
            </Card>
        

    );



}
export default Course;