import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ListGroup, ListGroupItem } from "reactstrap";
const Leftoption=()=>{
    return(
            <ListGroup>
            <Link className = "list-group-item list-group-item-action" tag = "a" to = "/" action>Home</Link>

            <Link className = "list-group-item list-group-item-action" tag = "a" to = "/addCourse" action>Add Course</Link>

            <Link className = "list-group-item list-group-item-action" tag = "a" to = "/viewcourses" action>View Courses</Link>

            <Link className = "list-group-item list-group-item-action" tag = "a" to = "#!" action>About Us</Link>

            <Link className = "list-group-item list-group-item-action" tag = "a" to = "#!" action>Contact</Link>
            </ListGroup>
    );
};
export default Leftoption;
