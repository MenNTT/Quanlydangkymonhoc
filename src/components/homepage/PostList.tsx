// PostList.tsx
import React, { useState } from 'react';

interface Post {
    id: number;
    title: string;
    date: string;
    image: string; // Để lưu URL hình ảnh
    category: 'thong-tin' | 'thong-bao' | 'tin-tuc';
}

// Dữ liệu bài viết với hình ảnh placeholder
const postsData: Post[] = [
    { id: 1, title: 'Bài viết 1', date: '2024-10-01', image: 'https://via.placeholder.com/300x200', category: 'thong-tin' },
    { id: 2, title: 'Bài viết 2', date: '2024-10-02', image: 'https://via.placeholder.com/300x200', category: 'thong-bao' },
    { id: 3, title: 'Bài viết 3', date: '2024-10-03', image: 'https://via.placeholder.com/300x200', category: 'tin-tuc' },
    { id: 4, title: 'Bài viết 4', date: '2024-10-04', image: 'https://via.placeholder.com/300x200', category: 'thong-tin' },
    { id: 5, title: 'Bài viết 5', date: '2024-10-05', image: 'https://via.placeholder.com/300x200', category: 'thong-bao' },
    { id: 6, title: 'Bài viết 6', date: '2024-10-06', image: 'https://via.placeholder.com/300x200', category: 'tin-tuc' },
    { id: 7, title: 'Bài viết 7', date: '2024-10-07', image: 'https://via.placeholder.com/300x200', category: 'thong-tin' },
    { id: 8, title: 'Bài viết 8', date: '2024-10-08', image: 'https://via.placeholder.com/300x200', category: 'thong-bao' },
    { id: 9, title: 'Bài viết 9', date: '2024-10-09', image: 'https://via.placeholder.com/300x200', category: 'tin-tuc' },
    { id: 10, title: 'Bài viết 10', date: '2024-10-10', image: 'https://via.placeholder.com/300x200', category: 'thong-tin' },
    { id: 11, title: 'Bài viết 11', date: '2024-10-11', image: 'https://via.placeholder.com/300x200', category: 'thong-bao' },
    { id: 12, title: 'Bài viết 12', date: '2024-10-12', image: 'https://via.placeholder.com/300x200', category: 'tin-tuc' },
    { id: 13, title: 'Bài viết 13', date: '2024-10-13', image: 'https://via.placeholder.com/300x200', category: 'tin-tuc' },
    { id: 14, title: 'Bài viết 14', date: '2024-10-14', image: 'https://via.placeholder.com/300x200', category: 'tin-tuc' },
    { id: 15, title: 'Bài viết 15', date: '2024-10-15', image: 'https://via.placeholder.com/300x200', category: 'tin-tuc' }, // Đảm bảo có category phù hợp
];

const PostList: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('thong-tin');
    const [visiblePosts, setVisiblePosts] = useState<number>(6);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setVisiblePosts(6); // Reset số bài viết hiển thị khi chuyển tab
    };

    const loadMorePosts = () => {
        setVisiblePosts(prev => Math.min(prev + 3, postsData.filter(post => post.category === activeTab).length)); // Tăng số bài viết hiển thị
    };

    const filteredPosts = postsData.filter(post => post.category === activeTab);

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center mb-3">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className={`nav-link ${activeTab === 'thong-tin' ? 'active' : ''}`} onClick={() => handleTabClick('thong-tin')}>Thông tin</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${activeTab === 'thong-bao' ? 'active' : ''}`} onClick={() => handleTabClick('thong-bao')}>Thông báo</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${activeTab === 'tin-tuc' ? 'active' : ''}`} onClick={() => handleTabClick('tin-tuc')}>Tin tức</button>
                    </li>
                </ul>
            </div>
            <div className="row">
                {filteredPosts.slice(0, visiblePosts).map(post => (
                    <div key={post.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img src={post.image} className="card-img-top" alt={post.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">Ngày đăng: {post.date}</p>
                                <button className="btn btn-primary">Chi tiết</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visiblePosts < filteredPosts.length && (
                <div className="text-center">
                    <button className="btn btn-secondary" onClick={loadMorePosts}>Xem thêm</button>
                </div>
            )}
        </div>
    );
};

export default PostList;
