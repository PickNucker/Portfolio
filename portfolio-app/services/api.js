const API_KEY ="e691250be93c575766d5818f851c01d2"
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}

export const readFile = async (filePath, callback) => {
    const response = await fetch(filePath);

    if(!response.ok) throw  new Error("Datei konnte nicht eingelesen werden");

    const data = await response.json();
    callback(data);
}

