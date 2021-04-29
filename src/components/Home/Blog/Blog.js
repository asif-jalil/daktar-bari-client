import React from "react";
import "./Blog.css";
import { Container } from "react-bootstrap";
import person1 from "../../../images/users/1.png";
import person2 from "../../../images/users/2.png";
import person3 from "../../../images/users/3.png";
import BlogCard from "./BlogCard";

const blogInfo = [
  {
    title: "Check at least a doctor in a  year for your teeth",
    desc: "It is a long established fact that by the readable content of a lot layout. The point ",
    img: person1,
    name: "Rashed Kabir",
    date: "23 April 2019",
  },
  {
    title: "2 times of brush in a day can Keep you healthy",
    desc: "It is a long established fact that by the readable content of a lot layout. The point ",
    img: person2,
    name: "Dr. Caudi",
    date: "23 April 2019",
  },
  {
    title: "The tooth cancer is taking a challenge",
    desc: "It is a long established fact that by the readable content of a lot layout. The point ",
    img: person3,
    name: "Dr. John Mitchel",
    date: "23 April 2019",
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <Container>
        <div className="section-title">
          <h5>OUR BLOG</h5>
          <h3>From Our Blog News</h3>
        </div>
        <div className="row blog-item-wrapper">
          {blogInfo.map((blog, idx) => (
            <BlogCard key={idx} blog={blog}></BlogCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
