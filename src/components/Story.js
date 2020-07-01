import React, {useState, useEffect} from "react";
import {getStory} from "../services/hnApi";
import {StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement} from "../styles/StoryStyles";
import {mapTime} from "../maps/mapTIme"

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
      });


    return story && story.url ? (
        <StoryWrapper data-testid="story">

            <StoryTitle>
                <a href={story.url} target="_blank">
                    {story.title}
                </a>
            </StoryTitle>

            <StoryMeta>
                <span data-testid="story-by">
                    <StoryMetaElement color="black">By:</StoryMetaElement> {story.by}
                </span>
            </StoryMeta>
            
            <StoryMeta>
                <span data-testid="story-time">
                    <StoryMetaElement color="#333">Posted:</StoryMetaElement> {` `} {mapTime(story.time)} {`ago`}
                </span>
            </StoryMeta>

        </StoryWrapper>
    ): null;
};