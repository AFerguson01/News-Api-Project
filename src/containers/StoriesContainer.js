import React, {useEffect, useState} from 'react';
import {getStoryIds} from "../services/hnApi";
import {Story} from "../components/Story";
import {StoryHeading} from "../styles/StoryStyles";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll"

export const StoriesContainer = () => {
    const {count} = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data));
    }, []);
  
    return (
    <>
      <StoryHeading>
        Latest News Stories:
      </StoryHeading>
      {storyIds.slice(0, count).map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
    );
  }
  