import React from "react";
import VideoItem from "../VideoItem";
import "./index.css";

const myCourses = [
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "React Basics",
    rating: 4.7,
    description: "Learn the basics of React including components, props, and state.",
    moreLink: "https://reactjs.org/",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    title: "Advanced React Patterns",
    rating: 4.8,
    description: "Dive deeper into React with advanced patterns and hooks.",
    moreLink: "https://reactjs.org/docs/hooks-intro.html",
  },{
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "React Basics",
    rating: 4.7,
    description: "Learn the basics of React including components, props, and state.",
    moreLink: "https://reactjs.org/",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    title: "Advanced React Patterns",
    rating: 4.8,
    description: "Dive deeper into React with advanced patterns and hooks.",
    moreLink: "https://reactjs.org/docs/hooks-intro.html",
  },{
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "React Basics",
    rating: 4.7,
    description: "Learn the basics of React including components, props, and state.",
    moreLink: "https://reactjs.org/",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    title: "Advanced React Patterns",
    rating: 4.8,
    description: "Dive deeper into React with advanced patterns and hooks.",
    moreLink: "https://reactjs.org/docs/hooks-intro.html",
  },{
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "React Basics",
    rating: 4.7,
    description: "Learn the basics of React including components, props, and state.",
    moreLink: "https://reactjs.org/",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    title: "Advanced React Patterns",
    rating: 4.8,
    description: "Dive deeper into React with advanced patterns and hooks.",
    moreLink: "https://reactjs.org/docs/hooks-intro.html",
  },{
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "React Basics",
    rating: 4.7,
    description: "Learn the basics of React including components, props, and state.",
    moreLink: "https://reactjs.org/",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    title: "Advanced React Patterns",
    rating: 4.8,
    description: "Dive deeper into React with advanced patterns and hooks.",
    moreLink: "https://reactjs.org/docs/hooks-intro.html",
  },{
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "React Basics",
    rating: 4.7,
    description: "Learn the basics of React including components, props, and state.",
    moreLink: "https://reactjs.org/",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    title: "Advanced React Patterns",
    rating: 4.8,
    description: "Dive deeper into React with advanced patterns and hooks.",
    moreLink: "https://reactjs.org/docs/hooks-intro.html",
  },{
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "React Basics",
    rating: 4.7,
    description: "Learn the basics of React including components, props, and state.",
    moreLink: "https://reactjs.org/",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    title: "Advanced React Patterns",
    rating: 4.8,
    description: "Dive deeper into React with advanced patterns and hooks.",
    moreLink: "https://reactjs.org/docs/hooks-intro.html",
  },{
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "React Basics",
    rating: 4.7,
    description: "Learn the basics of React including components, props, and state.",
    moreLink: "https://reactjs.org/",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    title: "Advanced React Patterns",
    rating: 4.8,
    description: "Dive deeper into React with advanced patterns and hooks.",
    moreLink: "https://reactjs.org/docs/hooks-intro.html",
  },{
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "React Basics",
    rating: 4.7,
    description: "Learn the basics of React including components, props, and state.",
    moreLink: "https://reactjs.org/",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
    title: "Advanced React Patterns",
    rating: 4.8,
    description: "Dive deeper into React with advanced patterns and hooks.",
    moreLink: "https://reactjs.org/docs/hooks-intro.html",
  },
];

const MyCourses = () => (
  <div className="my-courses-container">
    <h2>My Courses</h2>
    <div className="courses-list">
      {myCourses.map((course, idx) => (
        <VideoItem
          key={idx}
          videoUrl={course.videoUrl}
          title={course.title}
          rating={course.rating}
          description={course.description}
          moreLink={course.moreLink}
        />
      ))}
    </div>
  </div>
);

export default MyCourses;