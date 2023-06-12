import React from "react";
import Tags from "pages/componentsPage/miksbar";
import Banner from "pages/componentsPage/banner";
import PostsPopular from "pages/componentsPage/post-row";
import Football from "pages/componentsPage/football";
import PostNew from "pages/componentsPage/post-col";
import VideoNews from "pages/componentsPage/video";
import PostTrendy from "pages/componentsPage/post-row";
import Pogoda from "pages/componentsPage/pogoda";
import PostTop from "pages/componentsPage/post-row";

const index = () => {
  return (
    <>
      <div>
        <Tags />
        <Banner />
        <PostsPopular titleName={"popular posts"} />
        <Football />
        <PostNew />
        <VideoNews />
        <PostTrendy titleName={"trendy posts"} />
        <Pogoda />
        <PostTop titleName={"top news"} />
      </div>
    </>
  );
};

export default index;
