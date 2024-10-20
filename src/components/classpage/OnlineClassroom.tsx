import React, { useState, useEffect, useRef } from 'react';
import '../../styles/OnlineClassroom.css';

const OnlineClassroom: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'chat' | 'people'>('people');
    const [isCameraOn, setIsCameraOn] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    // Xử lý bật camera
    const handleToggleCamera = () => {
        if (isCameraOn) {
            setIsCameraOn(false);
            if (videoRef.current && videoRef.current.srcObject) {
                (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
                videoRef.current.srcObject = null;
            }
        } else {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                    }
                    setIsCameraOn(true);
                })
                .catch((error) => console.error('Error accessing camera: ', error));
        }
    };

    return (
        <div>
            {/* Navigation */}
            <nav className="navbar navbar-light bg-light p-2">
                <div className="container-fluid">
                    <div className="d-flex">
                        <button className="btn btn-light icon-button me-2" onClick={() => setActiveTab('chat')}>
                            <i className="bi bi-chat-dots"></i>
                        </button>
                        <button className="btn btn-light icon-button me-2" onClick={() => setActiveTab('people')}>
                            <i className="bi bi-people"></i>
                        </button>
                        <button className="btn btn-light icon-button me-2" onClick={handleToggleCamera}>
                            <i className={`bi bi-camera-video${isCameraOn ? '-off' : ''}`}></i>
                        </button>
                        <button className="btn btn-light icon-button me-2">
                            <i className="bi bi-mic"></i>
                        </button>
                        <button className="btn btn-light icon-button me-2">
                            <i className="bi bi-display"></i>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container-fluid main-content d-flex">
                {/* Phần nội dung chính */}
                <div className="content-area col-md-9 d-flex justify-content-center align-items-center text-white bg-dark">
                    {isCameraOn ? (
                        <video ref={videoRef} autoPlay playsInline className="w-100" style={{ maxWidth: '600px' }}></video>
                    ) : (
                        <p>Nội dung chính hiển thị ở đây (Camera, Chia sẻ màn hình, v.v.)</p>
                    )}
                </div>

                {/* Sidebar */}
                <div className="sidebar col-md-3 bg-white p-3">
                    {activeTab === 'chat' ? (
                        <div id="chatBox" className="chat-box">
                            <h5>Chat</h5>
                            <div className="messages mb-3" style={{ minHeight: '300px', overflowY: 'auto' }}>
                                {/* Hiển thị tin nhắn */}
                            </div>
                            <input type="text" className="form-control mb-2" placeholder="Nhập tin nhắn..." />
                            <button className="btn btn-primary w-100">Gửi</button>
                        </div>
                    ) : (
                        <div id="userList" className="user-list">
                            <h5>Danh sách người dùng</h5>
                            <div className="user mb-3 d-flex align-items-center">
                                <img src="https://via.placeholder.com/50" className="user-avatar me-2" alt="User Avatar" />
                                <span>User 1</span>
                            </div>
                            <div className="user mb-3 d-flex align-items-center">
                                <img src="https://via.placeholder.com/50" className="user-avatar me-2" alt="User Avatar" />
                                <span>User 2</span>
                            </div>
                            <div className="user mb-3 d-flex align-items-center">
                                <img src="https://via.placeholder.com/50" className="user-avatar me-2" alt="User Avatar" />
                                <span>User 3</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OnlineClassroom;
