import React, {useEffect, useRef, useState} from 'react';
import ClassNavigation from './ClassNavigation';
import FileComponent from './FileComponent';
import PostForm from './PostForm'; // Import PostForm

interface AttachedFile {
    name: string;
    url: string;
}

interface Comment {
    message: string;
    username: string;
    avatar: string;
    timestamp: string;
    attachedFiles: AttachedFile[];
}

interface Post {
    subject: string;
    message: string;
    comments: Comment[];
    username: string;
    avatar: string;
    timestamp: string;
    attachedFiles: AttachedFile[];
}

interface MainContentProps {
    selectedTab: 'posts' | 'files';
    onSelectTab: (tab: 'posts' | 'files' | 'meetNow' | 'scheduleMeeting') => void;
}

const MainContent: React.FC<MainContentProps> = ({ selectedTab, onSelectTab }) => {
    const [isPostFormVisible, setPostFormVisible] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    // Xử lý khi lưu bài viết mới
    const handlePostSubmit = (postData: { subject: string; content: string; files: File[] }) => {
        const attachedFiles = postData.files.map((file) => ({
            name: file.name,
            url: URL.createObjectURL(file), // Tạo URL cho file
        }));

        const newPost: Post = {
            subject: postData.subject,
            message: postData.content,
            comments: [],
            username: 'User',
            avatar: 'https://via.placeholder.com/30', // Sử dụng hình đại diện placeholder
            timestamp: new Date().toLocaleString(), // Thời gian đăng bài
            attachedFiles: attachedFiles, // Lưu các file đã được đính kèm
        };
        setPosts([...posts, newPost]);
        setPostFormVisible(false); // Đóng form sau khi lưu
    };

    // Xử lý chọn tab
    const handleSelectTab = (tab: 'posts' | 'files' | 'meetNow' | 'scheduleMeeting') => {
        if (tab === 'meetNow') {
            alert('Bắt đầu cuộc họp ngay lập tức...');
        } else if (tab === 'scheduleMeeting') {
            alert('Lên lịch cuộc họp...');
        } else {
            onSelectTab(tab);
        }
    };

    // Xử lý thêm bình luận vào bài viết
    const handleCommentSubmit = (postIndex: number, comment: { message: string; files: File[] }) => {
        const attachedFiles = comment.files.map((file) => ({
            name: file.name,
            url: URL.createObjectURL(file), // Tạo URL cho file đính kèm trong bình luận
        }));

        const newComment: Comment = {
            message: comment.message,
            username: 'User',
            avatar: 'https://via.placeholder.com/30', // Sử dụng hình đại diện placeholder
            timestamp: new Date().toLocaleString(),
            attachedFiles: attachedFiles, // Lưu các file đã được đính kèm
        };

        const updatedPosts = [...posts];
        updatedPosts[postIndex].comments.push(newComment);
        setPosts(updatedPosts);
    };

    return (
        <div className="flex-grow-1 p-3" style={{ marginLeft: '250px' }}>
            <ClassNavigation onSelect={handleSelectTab} />

            {isPostFormVisible ? (
                <PostForm onClose={() => setPostFormVisible(false)} onSave={handlePostSubmit} />
            ) : null}

            <div style={{ marginTop: '20px', height: 'calc(100vh - 190px)', overflowY: 'auto' }}>
                {selectedTab === 'posts' ? (
                    posts.length === 0 ? (
                        <p>Chưa có bài viết nào.</p>
                    ) : (
                        posts.map((post, postIndex) => (
                            <div key={postIndex} className="border rounded p-2 mb-3 bg-light">
                                <div className="d-flex align-items-center mb-2">
                                    <img
                                        src={post.avatar}
                                        alt="Avatar"
                                        className="rounded-circle me-2"
                                        style={{ width: '30px', height: '30px' }}
                                    />
                                    <div>
                                        <strong>{post.username}</strong>{' '}
                                        <span className="text-muted" style={{ fontSize: 'small' }}>
                                            {post.timestamp}
                                        </span>
                                    </div>
                                </div>
                                <h5>{post.subject}</h5>
                                <p dangerouslySetInnerHTML={{ __html: post.message }}></p>
                                {/* Hiển thị danh sách file đính kèm trong post */}
                                {post.attachedFiles.length > 0 && (
                                    <div>
                                        <hr className='text-black'></hr>
                                        <strong>File đính kèm:</strong>
                                        <ul>
                                            {post.attachedFiles.map((file, index) => (
                                                <li key={index}>
                                                    <a href={file.url} target="_blank" rel="noopener noreferrer">
                                                        {file.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="mt-2">
                                    <hr className='text-black'></hr>
                                    {post.comments.map((comment, index) => (
                                        <div key={index} className="border rounded p-2 mb-2 bg-white d-flex">
                                            <img
                                                src={comment.avatar}
                                                alt="Avatar"
                                                className="rounded-circle me-2"
                                                style={{ width: '30px', height: '30px' }}
                                            />
                                            <div>
                                                <strong>{comment.username}</strong>{' '}
                                                <span className="text-muted" style={{ fontSize: 'small' }}>
                                                    {comment.timestamp}
                                                </span>
                                                <p>{comment.message}</p>
                                                {/* Hiển thị danh sách file đính kèm trong bình luận */}
                                                {comment.attachedFiles.length > 0 && (
                                                    <div>
                                                        <strong>File đính kèm:</strong>
                                                        <ul>
                                                            {comment.attachedFiles.map((file, fileIndex) => (
                                                                <li key={fileIndex}>
                                                                    <a href={file.url} target="_blank" rel="noopener noreferrer">
                                                                        {file.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <CommentBox
                                        onSubmit={(message, attachedFiles) =>
                                            handleCommentSubmit(postIndex, {
                                                message,
                                                files: attachedFiles, // Truyền file đính kèm từ CommentBox
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        ))
                    )
                ) : (
                    <FileComponent /> // Hiển thị danh sách tệp khi chọn tab "files"
                )}
            </div>

            {/* Nút để hiển thị form tạo bài viết mới */}
            {!isPostFormVisible && (
                <button
                    className="btn btn-primary position-fixed"
                    style={{ bottom: '0', left: '20%', margin: '20px' }}
                    onClick={() => setPostFormVisible(true)}
                >
                    Tạo bài viết mới
                </button>
            )}
        </div>
    );
};

// Component CommentBox với khả năng đính kèm file
const CommentBox: React.FC<{ onSubmit: (message: string, attachedFiles: File[]) => void }> = ({ onSubmit }) => {
    const [comment, setComment] = useState('');
    const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    // Tự động mở rộng height của textarea khi người dùng nhập nội dung dài
    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [comment]);

    const handleCommentSubmit = () => {
        if (comment.trim() || attachedFiles.length > 0) {
            onSubmit(comment, attachedFiles);
            setComment('');
            setAttachedFiles([]); // Reset file sau khi gửi bình luận
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            setAttachedFiles((prevFiles) => [...prevFiles, ...files]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleCommentSubmit();
        }
    };

    return (
        <div className="mt-3 d-flex align-items-start">
            <textarea
                ref={textareaRef}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Viết bình luận..."
                className="form-control me-2"
                style={{ resize: 'none', overflow: 'hidden', minHeight: '38px' }} // Disable manual resize, auto-expand height
            />
            <input
                type="file"
                id="fileInput"
                multiple
                style={{ display: 'none' }} // Ẩn input file, chỉ kích hoạt qua nút icon
                onChange={handleFileChange}
            />
            <button
                className="btn btn-light me-2"
                onClick={() => document.getElementById('fileInput')?.click()} // Kích hoạt input file khi nhấn icon
            >
                {attachedFiles.length > 0 ? (
                    <i className="bi bi-check-circle-fill text-success"></i> // Icon dấu tích khi có file đính kèm
                ) : (
                    <i className="bi bi-paperclip"></i> // Icon đính kèm file khi chưa có file
                )}
            </button>
            <button
                onClick={handleCommentSubmit}
                className="btn btn-primary"
                disabled={!comment.trim() && attachedFiles.length === 0} // Vô hiệu hóa nút nếu không có bình luận hoặc file
            >
                <i className="bi bi-send"></i> {/* Icon gửi bình luận */}
            </button>
        </div>
    );
};

export default MainContent;
