/**
 * API Configuration for OctoFit Tracker
 * 
 * Environment Variables:
 * - VITE_CODESPACE_NAME: GitHub Codespaces name (optional)
 *   Set this in .env.local to enable Codespaces API URLs
 *   Example: VITE_CODESPACE_NAME=my-codespace-name
 */

function getApiBaseUrl(): string {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev`;
  }

  // Fallback to localhost for development
  return 'http://localhost:8000';
}

export const API_BASE_URL = getApiBaseUrl();

/**
 * Build endpoint URL from component path
 * @param path - API endpoint path (e.g., 'users', 'activities', 'teams')
 * @returns Full API URL
 */
export function getEndpointUrl(path: string): string {
  return `${API_BASE_URL}/api/${path}`;
}

/**
 * Fetch data from API endpoint with error handling
 * @param path - API endpoint path
 * @returns Data array or null on error
 */
export async function fetchFromApi<T>(path: string): Promise<T[]> {
  try {
    const url = getEndpointUrl(path);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Handle both paginated responses (object with key) and direct array responses
    if (Array.isArray(data)) {
      return data as T[];
    }

    // Extract array from paginated response (e.g., { users: [...] })
    const firstArrayValue = Object.values(data).find((value) =>
      Array.isArray(value)
    );

    if (Array.isArray(firstArrayValue)) {
      return firstArrayValue as T[];
    }

    return [];
  } catch (error) {
    console.error(`Failed to fetch from ${path}:`, error);
    return [];
  }
}
