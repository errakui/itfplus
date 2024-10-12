import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import logo from '../assets/logo.png';
import sfondo from '../assets/sfondo.png';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('info@itfplus.it');
  const [password, setPassword] = useState('itfplus2024');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    
    // Simulazione di un processo di login
    setTimeout(() => {
      if (email === 'info@itfplus.it' && password === 'itfplus2024') {
        onLogin(email);
      } else {
        setErrorMessage('Email o password errati.');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${sfondo})` }}>
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 space-y-6">
        <img src={logo} alt="Logo" className="mx-auto h-16 w-auto" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            </button>
          </div>
          <button type="submit" className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700" disabled={loading}>
            {loading ? 'Accedendo...' : 'Accedi'}
          </button>
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        </form>
        <div className="text-center">
          <a href="#" className="text-sm text-purple-600 hover:underline">
            Password dimenticata?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;