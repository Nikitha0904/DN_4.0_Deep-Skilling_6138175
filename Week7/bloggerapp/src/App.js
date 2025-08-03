import React, { useState } from 'react';
import './App.css';

// --- Data Definitions ---
const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const blogs = [
  { id: 201, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 202, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' },
];

const courses = [
  { id: 301, name: 'Angular', date: '4/5/2021' },
  { id: 302, name: 'React', date: '6/3/2020' },
];

// --- Component Definitions ---

// Book Details Component
function BookDetails({ books, showBooks }) {
  // Conditional Rendering Method 1: If-else statement
  if (!showBooks) {
    return null; // Don't render anything if showBooks is false
  }
  return (
    <div className="st2">
      <h1>Book Details</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Blog Details Component
function BlogDetails({ blogs, showBlogs }) {
  // Conditional Rendering Method 2: Logical && operator
  return (
    showBlogs && (
      <div className="v1">
        <h1>Blog Details</h1>
        {blogs.length > 0 ? ( // Conditional Rendering Method 3: Ternary operator
          <ul>
            {blogs.map(blog => (
              <li key={blog.id}>
                <h3>{blog.title}</h3>
                <h4>{blog.author}</h4>
                <p>{blog.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    )
  );
}

// Course Details Component
function CourseDetails({ courses, showCourses }) {
  // Conditional Rendering Method 4: Element Variables
  let courseContent;
  if (showCourses) {
    courseContent = (
      <div className="mystyle1">
        <h1>Course Details</h1>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <h3>{course.name}</h3>
              <h4>{course.date}</h4>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    courseContent = null; // Or a placeholder if you prefer
  }
  return courseContent;
}

// Main App Component
function App() {
  // State variables to control conditional rendering
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div className="App">
      <div className="controls">
        <button onClick={() => setShowBooks(!showBooks)}>
          Toggle Book Details
        </button>
        <button onClick={() => setShowBlogs(!showBlogs)}>
          Toggle Blog Details
        </button>
        <button onClick={() => setShowCourses(!showCourses)}>
          Toggle Course Details
        </button>
      </div>
      <div className="details-container">
        <BookDetails books={books} showBooks={showBooks} />
        <BlogDetails blogs={blogs} showBlogs={showBlogs} />
        <CourseDetails courses={courses} showCourses={showCourses} />
      </div>
    </div>
  );
}

export default App;