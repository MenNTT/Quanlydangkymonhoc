// CourseList.tsx
import React, { useState } from 'react';

interface Course {
    id: number;
    title: string;
    date: string;
    image: string; // Để lưu URL hình ảnh
}

// Dữ liệu khóa học với hình ảnh placeholder
const coursesData: Course[] = [
    { id: 1, title: 'Khóa học 1', date: '2024-10-01', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Khóa học 2', date: '2024-10-02', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Khóa học 3', date: '2024-10-03', image: 'https://via.placeholder.com/300x200' },
    { id: 4, title: 'Khóa học 4', date: '2024-10-04', image: 'https://via.placeholder.com/300x200' },
    { id: 5, title: 'Khóa học 5', date: '2024-10-05', image: 'https://via.placeholder.com/300x200' },
    { id: 6, title: 'Khóa học 6', date: '2024-10-06', image: 'https://via.placeholder.com/300x200' },
    { id: 7, title: 'Khóa học 7', date: '2024-10-07', image: 'https://via.placeholder.com/300x200' },
    { id: 8, title: 'Khóa học 8', date: '2024-10-08', image: 'https://via.placeholder.com/300x200' },
];

const CourseList: React.FC = () => {
    const [visibleCourses, setVisibleCourses] = useState<number>(6);

    const loadMoreCourses = () => {
        setVisibleCourses(prev => Math.min(prev + 3, coursesData.length)); // Tăng số khóa học hiển thị
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Các khóa học đã, đang và sắp khai giảng</h2>
            <div className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}> {/* Thêm giới hạn chiều rộng và căn giữa */}
                <p>
                    Chương trình học đa dạng và thường xuyên cập nhật công nghệ mới.
                    Hãy để chúng tôi đồng hành cùng bạn trên hành trình chinh phục tri thức - vững vàng bước vào thế giới công nghệ 4.0.
                </p>
            </div>
            <div className="row">
                {coursesData.slice(0, visibleCourses).map(course => (
                    <div key={course.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={course.image} className="card-img-top" alt={course.title} />
                            <div className="card-body d-flex flex-column text-center">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">Ngày khai giảng: {course.date}</p>
                                <p className="card-text">Hoc phí: {"1.000.000"} đ</p>
                                <button className="btn btn-dark text-white w-100 mt-auto">Chi tiết</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleCourses < coursesData.length && (
                <div className="text-center">
                    <button className="btn btn-secondary" onClick={loadMoreCourses}>Xem thêm khóa học</button>
                </div>
            )}
        </div>
    );
};

export default CourseList;
