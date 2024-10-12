import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="py-3 bg-light shadow-sm">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo */}
                <div className="header-logo">
                    <a href="/">
                        <img
                            src="https://via.placeholder.com/100x40"
                            alt="Logo"
                            className="img-fluid"
                        />
                    </a>
                </div>

                {/* Search Bar */}
                <div className="header-search w-50">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control border-end-0"
                            placeholder="Search courses"
                            aria-label="Search"
                            aria-describedby="search-icon"
                        />
                        <span
                            className="input-group-text bg-white border-start-0 border-1"
                            id="search-icon"
                        >
              <i className="bi bi-search"></i>
            </span>
                    </div>
                </div>

                {/* Account & Cart */}
                <div className="header-account d-flex align-items-center">
                    <div className="me-3">
                        <a href="/cart" className="text-dark text-decoration-none">
                            <i className="bi bi-cart3"></i> Cart
                        </a>
                    </div>
                    <div>
                        <a href="/account" className="text-dark text-decoration-none">
                            <i className="bi bi-person"></i> Account
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
