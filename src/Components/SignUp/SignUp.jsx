import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"
const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear validation error message if field is not empty
    setErrors({
      ...errors,
      [name]: ''
    });
  };
  const Navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const newErrors = {};
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    // Set errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Submit form if validation passes
    console.log('Form submitted:', formData);
    localStorage.setItem('fullName', formData.fullName);

    Navigate("/home")
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className='Join'>
            <h4>Join to our community</h4>
            <p>“Sunshine is delicious, rain is refreshing, wind braces up, snow is exhilarating; there is no such thing as bad weather, only different kinds of good weather.”</p>
            <img src="pictures/Group 4 (1).png" alt="" className='w-75' />
          </div>
        </div>
        <div className="col-md-6 bg-white tika">
          <div className='signUpCard'>
            <p className='text-end mt-5'>English (U.K) <img src="pictures/drop down vector.png" alt="" /></p>
            <h3>Create Account</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <input type="text" placeholder='Full Name' className="form-control mt-5" name="fullName" value={formData.fullName} onChange={handleChange}  />
                {errors.fullName ?             <div className="alert alert-danger mt-2" role="alert">
                {errors.fullName && <span className="error">{errors.fullName}</span>}
</div>:""}
   
              </div>
              <div>
                <input type="email" placeholder='Email Address' className="form-control my-4" name="email" value={formData.email} onChange={handleChange}  />
                    {errors.email?         <div className="alert alert-danger" role="alert">
                {errors.email && <span className="error">{errors.email}</span>}
</div>:""}
       
              </div>
              <div>
                <input type="password" placeholder='Password' className="form-control" name="password" value={formData.password} onChange={handleChange}  />
                {errors.password ?            <div className="alert alert-danger mt-2" role="alert">
                {errors.password && <span className="error">{errors.password}</span>}
</div>:""}
    
              </div>
              <div className='text-center'>
                <button type="submit" className="btn mt-4">Sign Up</button>
              </div>
            </form>
            <div className='text-center'>
              <img src="pictures/Group 2 (1).png" alt="" className='mt-5 w-75 m-auto' />
            </div>
            <div className='text-center mt-5'>
              <Link to="#"><img src="pictures/Ellipse 1.png" alt="" /></Link>
              <Link to="#"><img src="pictures/Ellipse 2.png" alt="" className='mx-5' /></Link>
              <Link to="#"><img src="pictures/Ellipse 3.png" alt="" /></Link>
            </div>
            <div className="">
              <p className='text-center mt-5'>Already have an account ? <Link to="/login" className='text-dark text-decoration-none'>Log In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
