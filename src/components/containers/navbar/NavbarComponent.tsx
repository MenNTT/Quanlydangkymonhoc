import React, {useState} from 'react';
import '../../../styles/NavbarComponent.css';
import TrainingProgramsDropdown from "../training_program_dropdown/TrainingProgramsDropdown.tsx";
import EnrollmentDatesDropdown from "../enrollmentdate_dropdown/EnrollmentDatesDropdown.tsx";
import ServiceListDropdown from "../service_list_dropdown/ServiceListDropdown.tsx";
import NewsDropdown from "../news_dropdown/NewsDropdown.tsx";

const NavbarComponent: React.FC = () => {
    const [CoursesIsDropdownOpen, CoursesSetDropdownOpen] = useState(false);
    const [enrollIsDropdownOpen, enrollSetDropdownOpen] = useState(false);
    const [serviceIsDropdownOpen, serviceSetDropdownOpen] = useState(false);
    const [newsIsDropdownOpen, newsSetDropdownOpen] = useState(false);

    const handleMouseCourseEnter = () => { CoursesSetDropdownOpen(true); };
    const handleMouseCourseLeave = () => { CoursesSetDropdownOpen(false); };

    const handleMouseEnrollEnter = () => { enrollSetDropdownOpen(true); };
    const handleMouseEnrollLeave = () => { enrollSetDropdownOpen(false); };

    const handleMouseServiceEnter = () => { serviceSetDropdownOpen(true); };
    const handleMouseServiceLeave = () => { serviceSetDropdownOpen(false); };

    const handleMouseNewsEnter = () => { newsSetDropdownOpen(true); };
    const handleMouseNewsLeave = () => { newsSetDropdownOpen(false); };

    return (
        <nav className="navbar py-1 navbar-component">
            <div className="container d-flex align-items-center mt-0">
                {/* Home button with icon */}

                {/* Menu Items */}
                <ul className="nav d-flex justify-content-start w-100 me-3"> {/* Adjust this value as needed */}
                    <li className="nav-item">
                        <a href="/" className="text-white text-decoration-none">
                            <i className="bi bi-house-fill" style={{fontSize: '1.5rem', color: 'white'}}></i>
                        </a>
                    </li>
                    <li className="nav-item" onMouseEnter={handleMouseEnrollEnter} onMouseLeave={handleMouseEnrollLeave}>
                        <a href="/lich-su-khai-giang" className="nav-link text-white">
                            Lịch khai giảng
                        </a>
                        <EnrollmentDatesDropdown isOpen={enrollIsDropdownOpen} onClose={handleMouseEnrollLeave} />
                    </li>
                    <li className="nav-item" onMouseEnter={handleMouseCourseEnter} onMouseLeave={handleMouseCourseLeave}>
                        <a href="/chuong-trinh-dao-tao" className="nav-link text-white">
                            Chương trình đào tạo
                        </a>
                        <TrainingProgramsDropdown isOpen={CoursesIsDropdownOpen} onClose={handleMouseCourseLeave} />
                    </li>
                    <li className="nav-item" onMouseEnter={handleMouseServiceEnter} onMouseLeave={handleMouseServiceLeave}>
                        <a href="/dich-vu" className="nav-link text-white">
                            Dịch vụ
                        </a>
                        <ServiceListDropdown isOpen={serviceIsDropdownOpen} onClose={handleMouseServiceLeave} />
                    </li>
                    <li className="nav-item" onMouseEnter={handleMouseNewsEnter} onMouseLeave={handleMouseNewsLeave}>
                        <a href="/tin-tuc" className="nav-link text-white">
                            Tin tức
                        </a>
                        <NewsDropdown isOpen={newsIsDropdownOpen} onClose={handleMouseNewsLeave} />
                    </li>
                    <li className="nav-item">
                        <a href="/huong-dan-thanh-toan" className="nav-link text-white">
                            Hướng dẫn thanh toán
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/lien-he" className="nav-link text-white">
                            Liên hệ
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarComponent;
