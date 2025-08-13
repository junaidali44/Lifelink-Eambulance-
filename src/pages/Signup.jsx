import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'patient'
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Replace with actual registration logic
      if (formData.name && formData.email && formData.password) {
        navigate('/login'); // Redirect to login after successful signup
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 my-5">
            <div className="auth-card card">
              <div className="auth-header">
                <h2>
                  <span className="text-dark">Join </span>
                  <span className="text-primary">Life</span>
                  <span className="text-danger">Link</span>
                </h2>
                <p className="text-muted mt-2">Create your account</p>
              </div>
              
              <div className="auth-body">
                {error && <div className="alert alert-danger">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control form-control-auth"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
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
                      minLength="8"
                      required
                    />
                    <div className="form-text">Minimum 8 characters</div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="userType" className="form-label">I am a:</label>
                    <select
                      className="form-select form-control-auth"
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleChange}
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Medical Professional</option>
                      <option value="admin">Admin Staff</option>
                    </select>
                  </div>
                  
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terms"
                      required
                    />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to the <Link  className="auth-link">Terms of Service</Link> and <Link  className="auth-link">Privacy Policy</Link>
                    </label>
                  </div>
                  
                  <div className="d-grid gap-2 mt-4">
                    <button 
                      type="submit" 
                      className="btn auth-btn btn-danger"
                      disabled={loading}
                    >
                      {loading ? 'Creating account...' : 'Create Account'}
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="auth-footer">
                <p className="mb-0">Already have an account? <Link to="/login" className="auth-link">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;