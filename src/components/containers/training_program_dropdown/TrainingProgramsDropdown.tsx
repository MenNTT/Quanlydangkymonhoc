import React, { useState, useRef } from 'react';
import '../../../styles/TrainingProgramsDropdown.css'; // Bạn có thể tạo file CSS để tùy chỉnh style nếu cần

const TrainingProgramsDropdown: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {

    const trainingPrograms = [
        'Data Analysis - Microsoft Platform',
        'Data Analysis - Google Platform',
        'Lập trình ứng dụng'
    ];

    // Dữ liệu khóa học tương ứng với mỗi chương trình đào tạo
    const coursesByProgram: { [key: string]: string[] } = {
        'Data Analysis - Microsoft Platform': ['Microsoft Excel', 'Power BI', 'SQL Server'],
        'Data Analysis - Google Platform': ['Google Sheets', 'Google Data Studio', 'BigQuery'],
        'Lập trình ứng dụng': ['JavaScript', 'React', 'Node.js']
    };

    // State để lưu trữ chương trình đang được hover
    const [hoveredProgram, setHoveredProgram] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null); // Tạo ref cho dropdown

    // Hàm xử lý hover
    const handleMouseEnterProgram = (program: string) => {
        setHoveredProgram(program);
    };

    // Hàm xử lý rời chuột
    const handleMouseLeaveDropdown = (event: React.MouseEvent) => {
        // Kiểm tra nếu chuột không ở trong dropdown thì mới gọi onClose
        if (dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget as Node)) {
            setHoveredProgram(null); // Đặt hoveredProgram về null khi chuột ra ngoài
            onClose(); // Gọi onClose
        }
    };

    return (
        <div
            className={`dropdown-menu ${isOpen ? 'show' : ''}`}
            onMouseLeave={handleMouseLeaveDropdown}
            style={{ minWidth: '600px' }}
            ref={dropdownRef} // Gán ref cho dropdown
        >
            <div className="d-flex p-3">
                {/* Phần bên trái */}
                <div className="me-4 flex-fill">
                    <h6>Chương trình đào tạo</h6>
                    <hr className="bg-dark" />
                    <ul className="list-unstyled">
                        {trainingPrograms.map((program, index) => (
                            <li
                                key={index}
                                className="d-flex align-items-center mb-2"
                                onMouseEnter={() => handleMouseEnterProgram(program)} // Hover vào chương trình
                            >
                                <i className="bi bi-book" style={{ fontSize: '1rem', marginRight: '10px' }}></i>
                                <span className="me-auto pe-2 program-name">{program}</span>
                                <i className="bi bi-chevron-right"></i>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Phần bên phải */}
                <div
                    className="flex-fill"
                    onMouseLeave={handleMouseLeaveDropdown} // Kiểm tra khi chuột ra khỏi phần danh sách khóa học
                >
                    {hoveredProgram ? (
                        <>
                            <h6>Khóa học của {hoveredProgram}</h6>
                            <hr className="bg-dark" />
                            <ul className="list-unstyled">
                                {coursesByProgram[hoveredProgram].map((course, index) => (
                                    <li key={index} className="d-flex align-items-center mb-2">
                                        <i className="bi bi-journal-code" style={{ fontSize: '1rem', marginRight: '10px' }}></i>
                                        <span className="me-auto">{course}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <>
                            <h6>Khóa học nổi bật</h6>
                            <hr className="bg-dark" />
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center mb-2">
                                    <i className="bi bi-star" style={{ fontSize: '1rem', marginRight: '10px' }}></i>
                                    <span className="me-auto">Data Analysis - Microsoft Platform</span>
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <i className="bi bi-star" style={{ fontSize: '1rem', marginRight: '10px' }}></i>
                                    <span className="me-auto">Data Analysis - Google Platform</span>
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <i className="bi bi-star" style={{ fontSize: '1rem', marginRight: '10px' }}></i>
                                    <span className="me-auto">Lập trình ứng dụng</span>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrainingProgramsDropdown;
