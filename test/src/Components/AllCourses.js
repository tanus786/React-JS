import React, { useState } from "react";
import Course from "./course";

const AllCourses =()=>{
    const [courses] = useState([
        {title : "Java Course", discription:"This is Java Course"},
        {title : "PHP Course", discription:"This is PHP Course"},
        {title : "React Course", discription:"This is React Course"},
        {title : "JSP Course", discription:"This is JSP Course"}
    ])
    return(
        <div className="text-center">
            <h1>All Courses</h1>
            <p>List of Courses Are:</p>

            {
                courses.length>0 ? courses.map((item)=>(<Course course={item} />
                )):"No Courses"


            }
        </div>


    );
}
export default AllCourses;