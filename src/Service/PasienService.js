import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/pasien/noRkmMedis';

export async function fetchPasien(noRkmMedis) {
  const url = `${API_BASE_URL}/${noRkmMedis}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pasien data for noRkmMedis: ${noRkmMedis}`, error);
    throw error;
  }
}

export default fetchPasien;