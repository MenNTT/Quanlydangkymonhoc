import React, { useState } from 'react';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title text-center mb-4">Register</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        <i className="bi bi-person-fill me-2"></i>Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        <i className="bi bi-envelope-fill me-2"></i>Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        <i className="bi bi-lock-fill me-2"></i>Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-success">
                                        <i className="bi bi-person-plus-fill me-2"></i>Register
                                    </button>
                                </div>
                            </form>
                            <div className="text-center mt-3">
                                <a href="/login" className="text-decoration-none">
                                    <i className="bi bi-box-arrow-in-right me-1"></i> Already have an account? Login
                                </a>
                            </div>
                            <div className="text-center mt-4">
                                <a href="/" className="btn btn-outline-secondary">
                                    <i className="bi bi-house-door-fill me-2"></i>Back to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
