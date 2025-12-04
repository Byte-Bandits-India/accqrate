// Environment-based API URL configuration
// Development/Test Mode: Uses local API (http://localhost/api) via Traefik
// Production Mode: Uses production API (https://prod.accqrate-erp.com/api)

const getApiUrl = () => {
  // Check if explicitly set via environment variable
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // Production mode triggers:
  // 1. NEXT_PUBLIC_DOCKER_MODE is set (for Docker production builds)
  // 2. NODE_ENV is 'production'
  const isProduction = 
    process.env.NEXT_PUBLIC_DOCKER_MODE === 'production' || 
    process.env.NODE_ENV === 'production';

  return isProduction
    ? 'https://prod.accqrate-erp.com/api'
    : 'http://localhost/api'; // Traefik on port 80
};

export default {
  API_URL: getApiUrl()
}