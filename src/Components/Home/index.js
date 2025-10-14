import { Component } from "react";
import Header from "../Header";
import DashBord from "../DashBord";
import VideoItem from "../VideoItem";
import "./index.css";

const courses = [
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video",
    rating: 4.5,
    description: "This is a sample video description.",
    moreLink: "https://www.example.com",
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video",
    rating: 4.5,
    description: "This is a sample video description.",
    moreLink: "https://www.example.com",
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video",
    rating: 4.5,
    description: "This is a sample video description.",
    moreLink: "https://www.example.com",
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video",
    rating: 4.5,
    description: "This is a sample video description.",
    moreLink: "https://www.example.com",
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video",
    rating: 4.5,
    description: "This is a sample video description.",
    moreLink: "https://www.example.com",
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video",
    rating: 4.5,
    description: "This is a sample video description.",
    moreLink: "https://www.example.com",
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video",
    rating: 4.5,
    description: "This is a sample video description.",
    moreLink: "https://www.example.com",
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video",
    rating: 4.5,
    description: "This is a sample video description.",
    moreLink: "https://www.example.com",
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video",
    rating: 4.5,
    description: "This is a sample video description.",
    moreLink: "https://www.example.com",
  },
  {
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Sample Video",
    rating: 4.5,
    description: "This is a sample video description.",
    moreLink: "https://www.example.com",
  },
  
];

class Home extends Component {
  getCourses = () => {};

  getDashBord = () => {};

  render() {
    return (
      <div className="home-container">
        <Header />
        <h1>Welcome to the Learning Portal</h1>
        <p>Your gateway to knowledge and skills.</p>
        <main>
          <section className="features">
            <div className="feature-card">
              {courses.map((course, index) => (
                <VideoItem
                  key={index}
                  videoUrl={course.videoUrl}
                  title={course.title}
                  rating={course.rating}
                  description={course.description}
                  moreLink={course.moreLink}
                />
              ))}
            </div>
          </section>
          <section className="dashboard-section">
            <DashBord />
          </section>
        </main>
      </div>
    );
  }
}

export default Home;
