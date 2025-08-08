import React, { useState } from "react";
import { books, blogs, courses } from "./data";

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  const bookdet = (
    <ul>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  const blogdet = blogs.length > 0 ? (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <strong>{blog.author}</strong>
          <p>{blog.content}</p>
        </div>
      ))}
    </ul>
  ) : (
    <p>No Blogs Available</p>
  );

  const coursedet = (
    <ul>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.cname}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </ul>
  );

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      <div>
        <h1>Book Details</h1>
        <button onClick={() => setShowBooks(!showBooks)}>
          {showBooks ? "Hide" : "Show"} Books
        </button>
        {showBooks && bookdet}
      </div>
      <div>
        <h1>Blog Details</h1>
        <button onClick={() => setShowBlogs(!showBlogs)}>
          {showBlogs ? "Hide" : "Show"} Blogs
        </button>
        {showBlogs && blogdet}
      </div>
      <div>
        <h1>Course Details</h1>
        <button onClick={() => setShowCourses(!showCourses)}>
          {showCourses ? "Hide" : "Show"} Courses
        </button>
        {showCourses && coursedet}
      </div>
    </div>
  );
}

export default App;
