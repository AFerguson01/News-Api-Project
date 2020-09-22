import React, {useEffect, useState} from 'react';
import {getStoryIds} from "../services/hnApi";
import {Story} from "../components/Story";
import {StoryHeading} from "../styles/StoryStyles";
import {StoryError} from "../styles/StoryStyles";
import {useInfiniteScroll} from "../hooks/useInfiniteScroll"

export const StoriesContainer = () => {
    const {count} = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);
    var fetchSuccess = true;
  
    useEffect(() => {
      getStoryIds().then(data => setStoryIds(data)).catch(err => {fetchSuccess = false;});
    }, []);

    if (storyIds == null){
      fetchSuccess = false;
    }
  
    return (
    <>
      <StoryHeading>
        Latest News Stories:
      </StoryHeading>
      <StoryError id="errorMsg">
        Test
      </StoryError>
      {fetchSuccess ? storyIds.slice(0, count).map(storyId => (
        <Story key={storyId} storyId={storyId} />
      )): ""}
    </>
    );
  }
  