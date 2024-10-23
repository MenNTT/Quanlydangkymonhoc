import React from 'react'
import CarouselHomePage from "./CarouselHomePage.tsx";
import PostList from "./PostList.tsx";
import CourseList from "./CourseList.tsx";
import SearchSection from "./SearchSection.tsx";
import MapSection from "./MapSection.tsx";
import Reviews from "./Reviews.tsx";

const HomePage: React.FC = () => {
    return (
        <div>
            <CarouselHomePage />
            <PostList />
            <CourseList />
            <SearchSection />
            <MapSection />
            <Reviews />
        </div>
    )
}

export default HomePage