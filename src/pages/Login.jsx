import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    
      if (formData.email && formData.password) {
        navigate('/'); 
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="auth-card card my-5">
              <div className="auth-header">
                <h2>
                  <span className="text-dark">Welcome to </span>
                  <span className="text-primary">Life</span>
                  <span className="text-danger">Link</span>
                </h2>
                <p className="text-muted mt-2">Login to access your account</p>
              </div>
              
              <div className="auth-body">
                {error && <div className="alert alert-danger">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control form-control-auth"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-auth"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <div className="d-flex justify-content-end mt-2">
                      <Link to="/forgot-password" className="auth-link small">Forgot password?</Link>
                    </div>
                  </div>
                  
                  <div className="d-grid gap-2 mt-4">
                    <button 
                      type="submit" 
                      className="btn auth-btn auth-btn-primary"
                      disabled={loading}
                    >
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="auth-footer">
                <p className="mb-0">Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;