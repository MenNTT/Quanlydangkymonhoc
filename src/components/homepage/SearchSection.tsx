import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/SearchSection.css';

const SearchSection: React.FC = () => {
    return (
        <div className="text-center my-5 mx-5">
            <h2>Tổng khai giảng khóa 1 từ ngày xx/xx/xxxx đến ngày xx/xx/xxxx</h2>
            <h2>Ưu đãi học phí lên đến 100%</h2>
            <button className="btn btn-orange my-3 rounded-pill px-4 py-2">Đăng ký ngay</button>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card bg-dark text-white">
                        <img src="https://via.placeholder.com/400x200" className="card-img" alt="Search for exam scores" />
                        <div className="card-img-overlay d-flex flex-column justify-content-center">
                            <h3 className="card-title"><b>Search for exam scores</b></h3>
                            <p className="card-text text-white">Description for searching exam scores.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card bg-dark text-white">
                        <img src="https://via.placeholder.com/400x200" className="card-img" alt="National IT certification exam schedule" />
                        <div className="card-img-overlay d-flex flex-column justify-content-center">
                            <h3 className="card-title"><b>National IT certification exam schedule</b></h3>
                            <p className="card-text text-white">Description for the exam schedule.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card bg-dark text-white">
                        <img src="https://via.placeholder.com/400x200" className="card-img" alt="Certificate Lookup" />
                        <div className="card-img-overlay d-flex flex-column justify-content-center">
                            <h3 className="card-title"><b>Certificate Lookup</b></h3>
                            <p className="card-text text-white">Description for certificate lookup.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;