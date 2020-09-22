import axios from "axios";
import {selectFields} from '../utils/selectFields'

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
    const result = await axios.get(`${storyUrl + storyId}.json`).then(({data}) => data && selectFields(data))
    .catch(err => {
        console.log(err);
        var errorHtml = document.getElementById('errorMsg');
        errorHtml.innerHTML = err;
        errorHtml.style.display = "block";
        return null;
    });
    return result;
}

export const getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({data}) => data)
    .catch(err => {
        console.log(err);
        var errorHtml = document.getElementById('errorMsg');
        errorHtml.innerHTML = err.message + "<br>" + "Try refreshing the page";
        errorHtml.style.display = "block";
        return null;
    });
    return result;
}