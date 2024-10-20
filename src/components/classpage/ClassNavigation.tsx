import { BsFillFileEarmarkTextFill, BsFileEarmark, BsCameraVideoFill } from 'react-icons/bs';
import { Dropdown } from 'react-bootstrap'; // Import dropdown từ bootstrap

interface ClassNavigationProps {
    onSelect: (tab: 'posts' | 'files' | 'meetNow' | 'scheduleMeeting') => void;
}

const ClassNavigation: React.FC<ClassNavigationProps> = ({ onSelect }) => {
    return (
        <nav className="mb-3" style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '0.25rem', zIndex: '9000' }}>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <div
                        className="d-flex align-items-center me-3"
                        onClick={() => onSelect('posts')}
                        style={{ cursor: 'pointer' }}
                    >
                        <BsFillFileEarmarkTextFill className="me-2" />
                        <span>Posts</span>
                    </div>
                    <div className="vr" style={{ height: '20px', margin: '0 10px' }}></div>
                    <div
                        className="d-flex align-items-center ms-3"
                        onClick={() => onSelect('files')}
                        style={{ cursor: 'pointer' }}
                    >
                        <BsFileEarmark className="me-2" />
                        <span>Files</span>
                    </div>
                </div>

                {/* Phần họp online bên phải */}
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
                        <BsCameraVideoFill className="me-2" onClick={() => onSelect('meetNow')} />
                    </div>

                    <Dropdown>
                        <Dropdown.Toggle
                            variant="light"
                            id="dropdown-basic"
                            className="p-0"
                            style={{ boxShadow: 'none', border: 'none' }}
                        >
                            {/* Không có icon nào ở đây */}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => onSelect('meetNow')}>Meet now</Dropdown.Item>
                            <Dropdown.Item onClick={() => onSelect('scheduleMeeting')}>Schedule meeting</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </nav>
    );
};

export default ClassNavigation;
