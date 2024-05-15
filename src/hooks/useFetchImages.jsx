import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:8000/api/imagenes');
        setImages(response.data);
        console.log(images) // Suponiendo que la respuesta es un arreglo de URLs de imágenes
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

    // Cleanup function
    return () => {
      // Cancelar la petición si el componente se desmonta antes de que se complete
    };
  }, [url]); // Volver a cargar cuando la URL cambie

  return { images, loading, error };
}

export default useFetchImages;
