import React from 'react';

const NavbarComponent: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                {/* Logo, không bị dồn sát mép */}
                <a className="navbar-brand" href="#" style={{paddingLeft: '20px'}}>Navbar</a>

                {/* Nút cho responsive */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Các mục navbar, căn giữa và đẩy sang phải */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginRight: '50px'}}>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Giới thiệu
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Lịch sử trung tâm</a></li>
                                <li><a className="dropdown-item" href="#">Danh sách đối tác</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Đăng ký</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Giáo trình</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Tin tức
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Kỳ thi</a></li>
                                <li><a className="dropdown-item" href="#">Thông báo điểm</a></li>
                                <li><a className="dropdown-item" href="#">Học viên</a></li>
                                <li><a className="dropdown-item" href="#">Sinh viên</a></li>
                                <li><a className="dropdown-item" href="#">Hoạt động</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Tra cứu
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Điểm thi</a></li>
                                <li><a className="dropdown-item" href="#">Biểu mẫu</a></li>
                                <li><a className="dropdown-item" href="#">Lịch thi</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
