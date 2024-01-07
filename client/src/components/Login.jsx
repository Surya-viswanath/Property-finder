// Modal.js
import React, { useState } from 'react';
import './Modal.css';
import './Menu.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from './OAuth';

const Modal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
    onClose(); // Close the modal after login
  };


   ///signin box///
   const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`} style={{alignItems:'center'}}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container" style={{alignItems:'center',width:'700px',margin:'auto',marginTop:'50px',borderRadius:'15px'}}>
        <div className="modal-content" style={{height:'500px'}}>
          <div className="modal-header">
            <span className="modal-title">Welcome to Property Finder</span>
            <button className="modal-close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div style={{display:'flex'}}>
            <div className='loginsub'>
                <p className='view'>View saved properties<br></br>
Keep search history across devices<br></br>
See which properties you have <br></br>contacted</p>
            </div>
          <div className="modal-body" style={{width:'50%'}}>
            {/* <form>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />

              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />

              <button type="button" onClick={handleLogin} className="btn">
                Login
              </button>
            </form> */}


<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
{/* <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button> */}
        <OAuth/>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <button style={{backgroundColor:'#e3e3e3',color:'grey'}} className='border p-3 rounded-lg'>continue</button>

        
      </form>
      {/* <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>} */}

      <div className='flex gap-2 mt-5'>
        <p style={{fontsize:'10.464px'}}>By registering you accept our Terms & Conditions and our privacy policy.</p>
      </div>
    </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
