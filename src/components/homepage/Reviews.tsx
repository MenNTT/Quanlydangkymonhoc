import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Review, mockReviews } from "../../mock_data/mockReviews";

const chunkArray = (array: Review[], chunkSize: number) => {
    const results: Review[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        results.push(array.slice(i, i + chunkSize));
    }
    return results;
};

const Reviews: React.FC = () => {
    // Chia các reviews thành các nhóm nhỏ (4 đánh giá mỗi nhóm)
    const reviewChunks = chunkArray(mockReviews, 4);

    return (
        <div className="container-fluid d-flex flex-column align-items-center py-5"
             style={{
                 height: "50vh",
                 backgroundImage: "url('https://via.placeholder.com/1200x600')",  // Placeholder cho background image
                 backgroundSize: "cover",  // Làm cho ảnh phủ hết toàn bộ phần nền
                 backgroundPosition: "center",  // Căn giữa hình ảnh
                 backgroundRepeat: "no-repeat",  // Không lặp lại ảnh
             }}
        >
            {/* Tiêu đề */}
            <h2 className="text-center mb-4">Cảm nhận của học viên</h2>

            {/* Carousel */}
            <div id="reviewsCarousel" className="carousel slide w-100" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {reviewChunks.map((chunk, chunkIndex) => (
                        <div className={`carousel-item ${chunkIndex === 0 ? "active" : ""}`} key={chunkIndex}>
                            <div className="d-flex justify-content-center">
                                {chunk.map((review, index) => (
                                    <div
                                        key={index}
                                        className="card p-3 mx-2"
                                        style={{
                                            width: "250px",
                                            maxHeight: "100%",
                                            flex: "1 0 auto",
                                            overflow: "hidden",
                                            whiteSpace: "normal",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={review.avatar}
                                                alt={review.name}
                                                className="rounded-circle me-3"
                                                style={{ width: "80px", height: "80px" }}
                                            />
                                            <div>
                                                <h5 className="mb-0">{review.name}</h5>
                                                <p className="text-muted">{review.job}</p>
                                            </div>
                                        </div>
                                        <p className="mt-3">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Nút điều khiển Carousel */}
                <button className="carousel-control-prev" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#reviewsCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Reviews;