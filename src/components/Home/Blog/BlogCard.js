import React from "react";
import "./BlogCard.css";
import { Col } from "react-bootstrap";

const BlogCard = ({ blog }) => {
  const { title, desc, img, name, date } = blog;
  return (
    <Col md={4}>
      <div className="blog-item">
        <div className="blog-author">
          <img src={img} alt="" />
          <div>
            <h6>
              <a href="/blog">{name}</a>
            </h6>
            <span>{date}</span>
          </div>
        </div>
        <h4>
          <a href="/blog">{title}</a>
        </h4>
        <p>{desc}</p>
        <a href="/blog" className="blog-link">
          <i className="far fa-long-arrow-alt-right"></i>
        </a>
      </div>
    </Col>
  );
};

export default BlogCard;
