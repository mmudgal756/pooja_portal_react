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
  Grid,
} from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import Logo from '../assets/images/logo.svg';
import GoogleIcon from '../assets/images/Google.svg';

function Login() {
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
      await login(email, password);
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
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            backgroundColor: 'primary.main',
            mask: `url(${Logo}) no-repeat center / contain`,
            WebkitMask: `url(${Logo}) no-repeat center / contain`,
            margin: '0 auto',
            marginBottom: '1rem',
          }}
        />
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#5c5cb0', fontSize: '1.5rem' }}>
          Login
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, fontSize: '0.875rem', color: '#64748b' }}>
          Enter your email below to login to your account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Typography variant="body2" component="label" htmlFor="email" sx={{ textAlign: 'left', display: 'block', mb: 1, fontSize: '0.875rem', color: '#5c5cb0' }}>
            Email
          </Typography>
          <TextField
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ 
              mb: 2,  
              '& .MuiInputBase-root': { 
                height: '40px'
              }, 
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#e2e8f0',
                },
              },
            }}
            placeholder="m@example.com"
          />
           <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Grid item>
              <Typography variant="body2" component="label" htmlFor="password" sx={{ fontSize: '0.875rem', color: '#5c5cb0' }}>
                Password
              </Typography>
            </Grid>
            <Grid item>
              <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
                <Typography variant="body2" color="primary" sx={{ fontSize: '0.875rem' }}>
                  Forgot your password?
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <TextField
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
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
              },
            }}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 1, 
              mb: 2, 
              py: 1, 
              bgcolor: '#5c5cb0',
              textTransform: 'none',
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Login'}
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<img src={GoogleIcon} alt="Google sign-in" />}
            sx={{ 
              mb: 2, 
              py: 1,
              borderColor: '#e2e8f0',
              color: '#64748b',
              justifyContent: 'center', 
              textTransform: 'none',
            }}
            onClick={() => {
              // TODO: Implement Google login
            }}
          >
            Login with Google
          </Button>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ textDecoration: 'none', color: '#5c5cb0', fontWeight: 'bold' }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
