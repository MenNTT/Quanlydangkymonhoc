import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Review {
    avatar: string;
    name: string;
    job: string;
    comment: string;
}

const reviews: Review[] = [
    {
        avatar: "https://via.placeholder.com/80",
        name: "Nguyen Van A",
        job: "Lập trình viên",
        comment: "Khóa học rất bổ ích và thú vị. Giảng viên nhiệt tình!"
    },
    {
        avatar: "https://via.placeholder.com/80",
        name: "Tran Thi B",
        job: "Nhân viên văn phòng",
        comment: "Mình đã học rất nhiều từ khóa học này. Rất hài lòng!"
    },
    {
        avatar: "https://via.placeholder.com/80",
        name: "Le Thi C",
        job: "Sinh viên",
        comment: "Khóa học đã giúp mình hiểu rõ hơn về lập trình."
    },
    {
        avatar: "https://via.placeholder.com/80",
        name: "Pham Van D",
        job: "Giáo viên",
        comment: "Cách giảng dạy rất dễ hiểu, thích hợp cho người mới bắt đầu."
    },
    {
        avatar: "https://via.placeholder.com/80",
        name: "Nguyen Van E",
        job: "Kỹ sư phần mềm",
        comment: "Rất đáng giá, nội dung rất chất lượng."
    },
    {
        avatar: "https://via.placeholder.com/80",
        name: "Tran Van F",
        job: "Nhân viên kế toán",
        comment: "Mình cảm thấy khóa học này rất hữu ích cho công việc của mình."
    },
    {
        avatar: "https://via.placeholder.com/80",
        name: "Le Van G",
        job: "Quản lý dự án",
        comment: "Cảm ơn khóa học đã giúp mình nâng cao kiến thức chuyên môn."
    },
];

const chunkArray = (array: Review[], chunkSize: number) => {
    const results: Review[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        results.push(array.slice(i, i + chunkSize));
    }
    return results;
};

const Reviews: React.FC = () => {
    // Chia các reviews thành các nhóm nhỏ (4 đánh giá mỗi nhóm)
    const reviewChunks = chunkArray(reviews, 4);

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
