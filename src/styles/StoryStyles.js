import styled from "styled-components";

export const StoryWrapper = styled.section`
    padding: 10px 10px 10px 10px;
    margin-bottom: 10px;
    border-top: 1px solid #ccc;
    text-align: center;

    &:first-of-type{
        border-top: 0;
    }

    &:last-of-type{
        border-bottom: 1px solid #ccc;
    }
`;

export  const StoryHeading = styled.h1`
    color: red;
    text-align: center;
    text-shadow: 0 1px 0 #ccc, 
               0 1px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
    border-bottom: 2px dotted black;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    background: white;
    margin: auto;
    padding: 15px 0 20px 0;
    font-size: 70px;
`;

export  const StoryTitle = styled.h1`
    margin-bottom: 5px;
    font-size: 30px;
    line-height: 1.8;
    margin: 0;
    text-decoration: none;
    text-shadow: 4px 3px 0px #fff, 4px 5px 0px rgba(0,0,0,0.15);

    a{
        color: black;
        text-decoration: none;

        &:hover{
            color: #777;
        }
    }
`;

export  const StoryMeta = styled.div`
    font-style: italic;
`;

export  const StoryMetaElement = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.color || "red"};
    font-style: normal;
`;