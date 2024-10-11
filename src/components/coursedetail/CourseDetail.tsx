import React, { useState } from 'react';

// Dữ liệu khóa học mới nhất (danh sách bên phải)
const latestCourses = [
    { id: 1, title: 'Khóa học 1', date: '2024-10-01', image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Khóa học 2', date: '2024-10-02', image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Khóa học 3', date: '2024-10-03', image: 'https://via.placeholder.com/300x200' },
    { id: 4, title: 'Khóa học 4', date: '2024-10-04', image: 'https://via.placeholder.com/300x200' },
    { id: 5, title: 'Khóa học 5', date: '2024-10-05', image: 'https://via.placeholder.com/300x200' },
];

const CourseDetail: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('lich-khai-giang');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Phần bên trái: Thông tin khóa học */}
                <div className="col-md-8">
                    <div className="card mb-4">
                        <img src="https://via.placeholder.com/800x400" className="card-img-top" alt="Course" />
                        <div className="card-body">
                            <h2 className="card-title text-center">Tên khóa học</h2>
                            <ul className="nav nav-tabs justify-content-center mt-4">
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === 'lich-khai-giang' ? 'bg-dark text-white' : ''}`}
                                        onClick={() => handleTabClick('lich-khai-giang')}
                                    >
                                        Lịch khai giảng
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === 'thong-tin' ? 'bg-dark text-white' : ''}`}
                                        onClick={() => handleTabClick('thong-tin')}
                                    >
                                        Thông tin
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === 'noi-dung' ? 'bg-dark text-white' : ''}`}
                                        onClick={() => handleTabClick('noi-dung')}
                                    >
                                        Nội dung
                                    </button>
                                </li>
                            </ul>

                            {/* Nội dung bảng cho tab "Lịch khai giảng" */}
                            {activeTab === 'lich-khai-giang' && (
                                <div className="mt-4">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th>Ca học</th>
                                            <th>Thời gian</th>
                                            <th>Ngày khai giảng</th>
                                            <th>Địa điểm</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Ca 1</td>
                                            <td>08:00 - 10:00</td>
                                            <td>2024-11-01</td>
                                            <td>TP. Hồ Chí Minh</td>
                                        </tr>
                                        <tr>
                                            <td>Ca 2</td>
                                            <td>14:00 - 16:00</td>
                                            <td>2024-11-05</td>
                                            <td>Hà Nội</td>
                                        </tr>
                                        <tr>
                                            <td>Ca 3</td>
                                            <td>18:00 - 20:00</td>
                                            <td>2024-11-10</td>
                                            <td>Đà Nẵng</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Phần bên phải: Danh sách khóa học mới nhất */}
                <div className="col-md-4">
                    <h4 className="text-center mb-4">Khóa học mới nhất</h4>
                    {latestCourses.map(course => (
                        <div key={course.id} className="card mb-3">
                            <img src={course.image} className="card-img-top" alt={course.title} />
                            <div className="card-body d-flex flex-column text-center">
                                <h5 className="card-title">{course.title}</h5>
                                <p className="card-text">Ngày đăng: {course.date}</p>
                                <button className="btn btn-dark text-white w-100 mt-auto">Chi tiết</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
