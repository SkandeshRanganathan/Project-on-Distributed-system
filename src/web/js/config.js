// Backend Configuration
// Change this URL to point to your deployed backend

// For localhost development
const LOCAL_BACKEND = 'http://localhost:8080';

// For deployed backend (Railway, Render, etc.)
// Replace with your actual backend URL
const DEPLOYED_BACKEND = 'https://your-backend.railway.app';

// Auto-detect: Use deployed backend if not on localhost
const BACKEND_URL = (() => {
    const hostname = window.location.hostname;
    
    // If running on localhost, use local backend
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return LOCAL_BACKEND;
    }
    
    // Otherwise, use deployed backend (or fallback to simulation)
    // Uncomment the line below and set your backend URL:
    // return DEPLOYED_BACKEND;
    
    // Return null to use simulation mode
    return null;
})();

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BACKEND_URL };
}
