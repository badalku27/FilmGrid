import React from 'react';
import { Container, Paper, Typography, Button, Box } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console or error reporting service
    console.error('Error Boundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container component="main" maxWidth="md" style={{ marginTop: '64px' }}>
          <Paper elevation={3} style={{ padding: '32px', textAlign: 'center' }}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <ErrorOutline color="error" style={{ fontSize: '64px' }} />
              <Typography variant="h4" color="error" gutterBottom>
                Something went wrong
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                The application encountered an unexpected error. Please try refreshing the page.
              </Typography>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <Box mt={3} p={2} bgcolor="grey.100" borderRadius={1} width="100%">
                  <Typography variant="h6" gutterBottom>
                    Error Details (Development Mode):
                  </Typography>
                  <Typography variant="body2" component="pre" style={{ 
                    textAlign: 'left', 
                    overflow: 'auto',
                    fontFamily: 'monospace',
                    fontSize: '12px'
                  }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                  </Typography>
                </Box>
              )}
              
              <Box mt={3} display="flex" gap={2}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={this.handleReload}
                >
                  Refresh Page
                </Button>
                <Button 
                  variant="outlined" 
                  onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
                >
                  Try Again
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;