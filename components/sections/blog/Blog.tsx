import { blogs } from "@/constants/blogs";
import React from "react";

const Blog = () => {
  // var doc = new DOMParser().parseFromString(blogs[0].content, "text/xml");

  return (
    <section className="blog">
      <h1 className="blogTitle">{blogs[0].title}</h1>
      <h3 className="bolgSubTitle">{blogs[0].excerpt}</h3>
      <React.Fragment>{blogs[0].content}</React.Fragment>
      <p className="blogContent">{blogs[0].content}</p>
    </section>
  );
};

export default Blog;
