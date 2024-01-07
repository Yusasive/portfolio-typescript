import React from "react";
import { motion } from "framer-motion";
import projectsPageImg from "../assets/projects-page.svg";
import { Reveal } from "../components";
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to Framer Motion",
      content: "This is a blog post about Framer Motion.",
    },
    {
      id: 2,
      title: "Building Animated React Components",
      content: "Learn how to create animated React components.",
    },
    {
        id: 2,
        title: "Building Animated React Components",
        content: "Learn how to create animated React components.",
      },
      {
        id: 2,
        title: "Building Animated React Components",
        content: "Learn how to create animated React components.",
      },
      {
        id: 2,
        title: "Building Animated React Components",
        content: "Learn how to create animated React components.",
      },
   
     
    // Add more blog posts as needed
  ];

  return (
    <div
      id="blog"
      className="min-h-screen relative"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <Reveal>
        <h2
          className="text-center pt-6 text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary">
          My Recents <span className="text-secondary"> Blogs</span>
        </h2>
      </Reveal>
      <ul>
        {blogPosts.map((post) => (
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center pl-6 pt-6 gap-4 justify-center xl:justify-start flex-col sm:flex-row">
            <motion.li
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ listStyle: "none", marginBottom: "20px" }}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </motion.li>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
