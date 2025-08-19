import { API_URL } from '@env';

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.message || 'Error al validar el código de descuento');
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error al mandar a llamar la API:", error);
    return [];
  }
};

export const getCharacter = async () => {
  try {
    const response = await fetch(`${API_URL}/character`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      const error = new Error(data.message || 'Error al validar el código de descuento');
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error al mandar a llamar la API:", error);
    return [];
  }
};