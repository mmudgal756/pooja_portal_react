import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Paper,
} from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import Logo from '../assets/images/logo.svg';
import GoogleIcon from '../assets/images/Google.svg';
import { register } from '../services/UserService';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = {
        name,
        email,
        password,
      }
      await register(payload);

     //  await login(email, password);
      
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else if (error.message) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#f5f5f5',
        pt: 12,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 2,
          width: '100%',
          maxWidth: 380,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            backgroundColor: 'primary.main',
            mask: `url(${Logo}) no-repeat center / contain`,
            WebkitMask: `url(${Logo}) no-repeat center / contain`,
            margin: '0 auto',
            marginBottom: '0.5rem',
          }}
        />
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 0.5, color: '#5c5cb0', fontSize: '1.25rem' }}>
          Sign Up
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, fontSize: '0.75rem', color: '#64748b' }}>
          Enter your details below to create your account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Typography variant="body2" component="label" htmlFor="name" sx={{ textAlign: 'left', display: 'block', mb: 0.5, fontSize: '0.75rem', color: '#5c5cb0' }}>
            Name
          </Typography>
          <TextField
            required
            fullWidth
            id="name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ 
              mb: 1.5,  
              '& .MuiInputBase-root': { 
                height: '40px'
              }, 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: '#e2e8f0',
                },
              },
            }}
            placeholder="John Doe"
          />
          <Typography variant="body2" component="label" htmlFor="email" sx={{ textAlign: 'left', display: 'block', mb: 0.5, fontSize: '0.75rem', color: '#5c5cb0' }}>
            Email
          </Typography>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ 
              mb: 1.5,  
              '& .MuiInputBase-root': { 
                height: '40px'
              }, 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: '#e2e8f0',
                },
              },
            }}
            placeholder="m@example.com"
          />
          <Typography variant="body2" component="label" htmlFor="password" sx={{ textAlign: 'left', display: 'block', mb: 0.5, fontSize: '0.75rem', color: '#5c5cb0' }}>
            Password
          </Typography>
          <TextField
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ 
              mb: 1,  
              '& .MuiInputBase-root': { 
                height: '40px' 
              }, 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
                '&:hover fieldset': {
                  borderColor: '#e2e8f0',
                },
              },
            }}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 1.5 }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 1.5, 
              mb: 1.5, 
              py: 1, 
              bgcolor: '#5c5cb0',
              textTransform: 'none',
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Sign Up'}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<img src={GoogleIcon} alt="Google sign-in" />}
            sx={{ 
              mb: 1.5, 
              py: 1,
              borderColor: '#e2e8f0',
              color: '#64748b',
              justifyContent: 'center', 
              textTransform: 'none',
            }}
            onClick={() => {
              // TODO: Implement Google signup
            }}
          >
            Sign Up with Google
          </Button>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ textDecoration: 'none', color: '#5c5cb0', fontWeight: 'bold' }}>
              Sign in
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Signup;
