import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import LoaderSpinner from './Loader/Loader.js';
import Modal from './Modal/Modal';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (query, page) => {
    const perPage = 12;
    const apiKey = '32579471-afdc8e0303a1983f0362481fc';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true&page=${page}&per_page=${perPage}`;

    setIsLoading(true);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      if (data.totalHits === 0) {
        throw new Error('No images found for the given query');
      }

      setImages(prevImages => (page === 1 ? data.hits : [...prevImages, ...data.hits]));

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const handleSearch = (event, query) => {
    event.preventDefault();
    setImages([]);
    setPage(1);
    setQuery(query);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = image => {
    setShowModal(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const scrollToBottom = () => {
    let currentScrollPosition = window.scrollY;
    let targetScrollPosition = document.body.scrollHeight - window.innerHeight;
    let scrollStep = Math.round((targetScrollPosition - currentScrollPosition) / 20);

    const smoothScroll = () => {
      currentScrollPosition += scrollStep;
      window.scrollTo(0, currentScrollPosition);

      if (currentScrollPosition < targetScrollPosition) {
        window.requestAnimationFrame(smoothScroll);
      }
    };

    window.requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    if (images.length > 0 && !isLoading) {
      scrollToBottom();
    }
  }, [images, isLoading]);

  return (
    <div className="App">
      <Searchbar onSubmit={(event, query) => handleSearch(event, query)} />

      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <LoaderSpinner />}
      {images.length > 0 && !isLoading && <Button onClick={handleLoadMore}>Load more</Button>}
      {showModal && <Modal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
