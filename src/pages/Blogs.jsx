
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogsData';
import BlogCard from '../components/BlogCard';
import ShowMoreButton from '../components/ShowMoreButton';
import styles from '../styles/Blog.module.css';
import heroImg from '../assets/hero_networking.png';

const CARDS_PER_ROW = 4;
const INITIAL_COUNT = CARDS_PER_ROW * 2; // First 8 blogs
const LOAD_MORE = CARDS_PER_ROW; // Load 4 more per click

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE, blogs.length)
    );
  };

  const displayBlogs = blogs.slice(0, visibleCount);

  const remainingBlogs = blogs.length - visibleCount;
  const rowsComplete = visibleCount % CARDS_PER_ROW === 0;

  const shouldShowMore =
    remainingBlogs > 0 &&
    rowsComplete;

  return (
    <div className={styles.page}>
      {/* Hero Banner */}
      <section
        className={styles.hero}
        style={{ minHeight: '500px' }}
      >
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.label}>
              INSIGHTS & ARTICLES
            </div>

            <h1 className={styles.title}>
              Trusted Network Blogs
            </h1>

            <p className={styles.description}>
              Explore business insights, networking strategies,
              industry trends, success stories, and professional
              growth articles from the Trusted Network community.
            </p>

            <Link to="/blogs" className={styles.cta}>
              Explore Blogs
            </Link>
          </div>

          <div className={styles.right}>
            <img
              src={heroImg}
              alt="Blogs hero"
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Blog Cards */}
      <section
        className={styles.gridSection}
        id="blogs-list"
      >
        <div className={styles.grid}>
          {displayBlogs.map((b) => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </div>

        {shouldShowMore && (
          <div
            className={styles.showMoreWrapper}
            style={{
              marginTop: '40px',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            <ShowMoreButton
              onClick={handleShowMore}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;