import React, { useState } from 'react';
import '../../styles/CourseList.css';
import { BsCalendar2Event, BsCashStack } from 'react-icons/bs';
import {useNavigate} from "react-router-dom";

interface Course {
    id: number;
    title: string;
    date: string;
    originalPrice: string;
    discountedPrice: string;
    image: string;
}

interface TrainingProgram {
    name: string;
    courses: Course[];
}

// Dữ liệu khóa học
const allCourses: Course[] = [
    { id: 1, title: 'Microsoft Excel', date: '2024-11-01', originalPrice: '1.500.000đ', discountedPrice: '1.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 2, title: 'Power BI', date: '2024-11-05', originalPrice: '2.000.000đ', discountedPrice: '1.500.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 3, title: 'SQL Server', date: '2024-11-10', originalPrice: '2.500.000đ', discountedPrice: '2.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 4, title: 'Google Sheets', date: '2024-10-15', originalPrice: '1.200.000đ', discountedPrice: '900.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 5, title: 'Google Data Studio', date: '2024-10-20', originalPrice: '1.800.000đ', discountedPrice: '1.200.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 6, title: 'BigQuery', date: '2024-10-25', originalPrice: '2.000.000đ', discountedPrice: '1.600.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 7, title: 'Python', date: '2024-12-01', originalPrice: '3.000.000đ', discountedPrice: '2.500.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 8, title: 'Machine Learning', date: '2024-12-05', originalPrice: '3.200.000đ', discountedPrice: '2.800.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 9, title: 'Data Science', date: '2024-12-10', originalPrice: '3.500.000đ', discountedPrice: '3.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 10, title: 'JavaScript', date: '2024-12-15', originalPrice: '3.100.000đ', discountedPrice: '2.600.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 11, title: 'React', date: '2024-12-20', originalPrice: '3.200.000đ', discountedPrice: '2.700.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 12, title: 'Node.js', date: '2024-12-25', originalPrice: '3.300.000đ', discountedPrice: '2.800.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 13, title: 'Manual Testing', date: '2024-11-15', originalPrice: '2.200.000đ', discountedPrice: '1.800.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 14, title: 'Automation Testing', date: '2024-11-20', originalPrice: '2.500.000đ', discountedPrice: '2.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 15, title: 'Selenium', date: '2024-11-25', originalPrice: '2.800.000đ', discountedPrice: '2.200.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 16, title: 'Docker', date: '2024-12-01', originalPrice: '3.000.000đ', discountedPrice: '2.400.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 17, title: 'Kubernetes', date: '2024-12-05', originalPrice: '3.200.000đ', discountedPrice: '2.700.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 18, title: 'CI/CD', date: '2024-12-10', originalPrice: '3.500.000đ', discountedPrice: '3.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 19, title: 'Networking Basics', date: '2024-10-30', originalPrice: '2.000.000đ', discountedPrice: '1.600.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 20, title: 'Network Security', date: '2024-11-05', originalPrice: '2.200.000đ', discountedPrice: '1.800.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 21, title: 'Cisco Certification', date: '2024-11-10', originalPrice: '2.500.000đ', discountedPrice: '2.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 22, title: 'Microsoft Word', date: '2024-10-15', originalPrice: '1.500.000đ', discountedPrice: '1.200.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 23, title: 'Microsoft Excel', date: '2024-10-20', originalPrice: '1.500.000đ', discountedPrice: '1.200.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 24, title: 'Microsoft PowerPoint', date: '2024-10-25', originalPrice: '1.500.000đ', discountedPrice: '1.200.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 25, title: 'Photoshop', date: '2024-11-15', originalPrice: '2.500.000đ', discountedPrice: '2.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 26, title: 'Illustrator', date: '2024-11-20', originalPrice: '2.500.000đ', discountedPrice: '2.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 27, title: 'After Effects', date: '2024-11-25', originalPrice: '2.500.000đ', discountedPrice: '2.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 28, title: 'IC3 Certification', date: '2024-12-01', originalPrice: '2.000.000đ', discountedPrice: '1.600.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 29, title: 'MOS Certification', date: '2024-12-05', originalPrice: '2.200.000đ', discountedPrice: '1.800.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 30, title: 'IT Fundamentals', date: '2024-12-10', originalPrice: '2.500.000đ', discountedPrice: '2.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 31, title: 'Digital Art Fundamentals', date: '2024-12-15', originalPrice: '3.000.000đ', discountedPrice: '2.500.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 32, title: 'Advanced Painting Techniques', date: '2024-12-20', originalPrice: '3.200.000đ', discountedPrice: '2.700.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 33, title: 'Character Design', date: '2024-12-25', originalPrice: '3.500.000đ', discountedPrice: '3.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 34, title: '3D Modeling', date: '2024-10-30', originalPrice: '3.500.000đ', discountedPrice: '3.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 35, title: 'Video Editing', date: '2024-11-05', originalPrice: '2.500.000đ', discountedPrice: '2.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 36, title: 'Post-production', date: '2024-11-10', originalPrice: '3.000.000đ', discountedPrice: '2.400.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 37, title: 'HTML/CSS', date: '2024-12-01', originalPrice: '2.000.000đ', discountedPrice: '1.600.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 38, title: 'JavaScript', date: '2024-12-05', originalPrice: '2.500.000đ', discountedPrice: '2.000.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 39, title: 'Responsive Design', date: '2024-12-10', originalPrice: '2.800.000đ', discountedPrice: '2.300.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 40, title: 'SEO', date: '2024-12-15', originalPrice: '1.500.000đ', discountedPrice: '1.200.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 41, title: 'Google Analytics', date: '2024-12-20', originalPrice: '1.800.000đ', discountedPrice: '1.400.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 42, title: 'Social Media Marketing', date: '2024-12-25', originalPrice: '2.000.000đ', discountedPrice: '1.600.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 43, title: 'Flutter', date: '2024-11-15', originalPrice: '3.000.000đ', discountedPrice: '2.400.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 44, title: 'React Native', date: '2024-11-20', originalPrice: '3.200.000đ', discountedPrice: '2.700.000đ', image: 'https://via.placeholder.com/200x190' },
    { id: 45, title: 'iOS Development', date: '2024-11-25', originalPrice: '3.500.000đ', discountedPrice: '3.000.000đ', image: 'https://via.placeholder.com/200x190' }
];

const trainingPrograms: TrainingProgram[] = [
    {
        name: 'Data Analysis - Microsoft Platform',
        courses: allCourses.filter(course => ['Microsoft Excel', 'Power BI', 'SQL Server'].includes(course.title))
    },
    {
        name: 'Data Analysis - Google Platform',
        courses: allCourses.filter(course => ['Google Sheets', 'Google Data Studio', 'BigQuery'].includes(course.title))
    },
    {
        name: 'Chuyên đề Data Science & Machine Learning',
        courses: allCourses.filter(course => ['Python', 'Machine Learning', 'Data Science'].includes(course.title))
    },
    {
        name: 'Lập trình ứng dụng',
        courses: allCourses.filter(course => ['JavaScript', 'React', 'Node.js'].includes(course.title))
    },
    {
        name: 'Kiểm thử phần mềm',
        courses: allCourses.filter(course => ['Manual Testing', 'Automation Testing', 'Selenium'].includes(course.title))
    },
    {
        name: 'Master DevOps Engineer',
        courses: allCourses.filter(course => ['Docker', 'Kubernetes', 'CI/CD'].includes(course.title))
    },
    {
        name: 'Mạng máy tính',
        courses: allCourses.filter(course => ['Networking Basics', 'Network Security', 'Cisco Certification'].includes(course.title))
    },
    {
        name: 'Tin học văn phòng',
        courses: allCourses.filter(course => ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'].includes(course.title))
    },
    {
        name: 'Đồ họa đa truyền thông',
        courses: allCourses.filter(course => ['Photoshop', 'Illustrator', 'After Effects'].includes(course.title))
    },
    {
        name: 'Tin học quốc tế',
        courses: allCourses.filter(course => ['IC3 Certification', 'MOS Certification', 'IT Fundamentals'].includes(course.title))
    },
    {
        name: 'Digital Painting',
        courses: allCourses.filter(course => ['Digital Art Fundamentals', 'Advanced Painting Techniques', 'Character Design'].includes(course.title))
    },
    {
        name: '3D & Xử lý phim',
        courses: allCourses.filter(course => ['3D Modeling', 'Video Editing', 'Post-production'].includes(course.title))
    },
    {
        name: 'Thiết kế website',
        courses: allCourses.filter(course => ['HTML/CSS', 'JavaScript', 'Responsive Design'].includes(course.title))
    },
    {
        name: 'Internet Marketing',
        courses: allCourses.filter(course => ['SEO', 'Google Analytics', 'Social Media Marketing'].includes(course.title))
    },
    {
        name: 'Lập trình di động',
        courses: allCourses.filter(course => ['Flutter', 'React Native', 'iOS Development'].includes(course.title))
    }
];

const CourseList: React.FC = () => {

    const navigate = useNavigate();

    const [selectedProgram, setSelectedProgram] = useState<string | null>('Tất cả');
    const [visibleCourses, setVisibleCourses] = useState<number>(8); // Hiển thị ban đầu 8 khóa học

    const handleProgramSelect = (programName: string) => {
        setSelectedProgram(programName);
        setVisibleCourses(8); // Đặt lại số khóa học hiển thị khi chọn chương trình mới
    };

    const displayedCourses = selectedProgram === 'Tất cả'
        ? allCourses.slice(0, visibleCourses)
        : trainingPrograms.find(program => program.name === selectedProgram)?.courses.slice(0, visibleCourses) || [];

    const loadMoreCourses = () => {
        setVisibleCourses(prev => Math.min(prev + 4, (selectedProgram === 'Tất cả' ? allCourses.length : trainingPrograms.find(program => program.name === selectedProgram)?.courses.length || 0)));
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Chương trình đào tạo</h2>
            <div className="text-center" style={{maxWidth: '600px', margin: '0 auto'}}>
                <p>
                    Chương trình học đa dạng và thường xuyên cập nhật công nghệ mới.
                    Hãy để chúng tôi đồng hành cùng bạn trên hành trình chinh phục tri thức - vững vàng bước vào thế
                    giới công nghệ 4.0.
                </p>
            </div>

            <div className="d-flex flex-wrap justify-content-center mb-4">
                <button
                    className={`btn btn-outline-primary m-2 ${selectedProgram === 'Tất cả' ? 'active' : ''}`}
                    onClick={() => handleProgramSelect('Tất cả')}
                >
                    <i className="bi bi-grid"></i> Tất cả
                </button>
                {trainingPrograms.map((program) => (
                    <button
                        key={program.name}
                        className={`btn btn-outline-primary m-2 ${selectedProgram === program.name ? 'active' : ''}`}
                        onClick={() => handleProgramSelect(program.name)}
                    >
                        <i className="bi bi-book"></i> {program.name}
                    </button>
                ))}
            </div>

            <div className="row">
                {displayedCourses.map((course, index) => (
                    <div key={index} className="col-md-3 col-sm-6 mb-4 d-flex">
                        <div className="card course-card text-center w-100">
                            <img src={course.image} className="card-img-top" alt={course.title}
                                 style={{width: '100%', height: '190px', objectFit: 'cover'}}/>
                            <div className="card-body">
                                <h6 className="card-title mb-2">{course.title}</h6>
                                {/* Thêm icon lịch cho ngày khai giảng */}
                                <div className="d-flex justify-content-center align-items-center mb-2">
                                    <BsCalendar2Event className="me-2 text-primary" size={20}/>
                                    <span className="text-muted">{course.date}</span>
                                </div>
                                {/* Thêm icon tiền cho học phí */}
                                <div className="d-flex justify-content-between">
                                    <div className="text-muted d-flex align-items-center">
                                        <BsCashStack className="me-2 text-success" size={20}/>
                                        <del>{course.originalPrice}</del>
                                    </div>
                                    <div className="text-danger d-flex align-items-center">
                                        <BsCashStack className="me-2 text-danger" size={20}/>
                                        {course.discountedPrice}
                                    </div>
                                </div>
                                <button className="btn btn-dark text-white w-100 mt-3" onClick={() => navigate('/course-detail')}>Chi tiết</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Nút "Xem thêm" */}
            {displayedCourses.length < (selectedProgram === 'Tất cả' ? allCourses.length : trainingPrograms.find(program => program.name === selectedProgram)?.courses.length || 0) && (
                <div className="text-center">
                    <button className="btn btn-primary" onClick={loadMoreCourses}>Xem thêm</button>
                </div>
            )}
        </div>
    );
};

export default CourseList;
