import React, { useState, useEffect } from 'react';
import EventHero from '../components/EventHero';
import EventsGrid from '../components/EventsGrid';
import ShowMoreButton from '../components/ShowMoreButton';
import SectionLabel from '../components/SectionLabel';
import { events } from '../data/eventsData';
import styles from "../styles/Events.module.css";

const CARDS_PER_ROW = 4;
const INITIAL_COUNT = CARDS_PER_ROW * 2; // show first two full rows (8 cards)
const LOAD_MORE = CARDS_PER_ROW; // load a full row each click

const Events = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + LOAD_MORE, events.length));
  };

  const visibleEvents = events.slice(0, visibleCount);

  console.log("visibleCount:", visibleCount);
  console.log("visibleEvents.length:", visibleEvents.length);
  console.log("totalEvents:", events.length);

  const remainingEvents = events.length - visibleCount;
  const currentRowCount = Math.ceil(visibleCount / CARDS_PER_ROW);
  const rowsComplete = visibleCount % CARDS_PER_ROW === 0;
  // Show button only when there are hidden events and the current rows are complete
  const shouldShowMore = (remainingEvents > 0) && rowsComplete;
  console.log("remainingEvents:", remainingEvents);
  console.log("currentRowCount:", currentRowCount);
  console.log("rowsComplete:", rowsComplete);
  console.log("shouldShowMore:", shouldShowMore);

  return (
    <main className={`${styles.page} ${!shouldShowMore ? styles.pageNoButton : ''}`}>
      <EventHero />
      <EventsGrid events={visibleEvents} />
      {shouldShowMore && (
        <div className={styles.showMoreWrapper}>
          <ShowMoreButton onClick={handleShowMore} />
        </div>
      )}
    </main>
  );
};

export default Events;
