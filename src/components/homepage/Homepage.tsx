import React from 'react'
import CarouselHomePage from "./CarouselHomePage.tsx";
import PostList from "./PostList.tsx";
import CourseList from "./CourseList.tsx";

const HomePage: React.FC = () => {
    return (
        <div>
            <CarouselHomePage />
            <PostList />
            <CourseList />
        </div>
    )
}

export default HomePage