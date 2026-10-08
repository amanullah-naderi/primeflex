// wa_ss24_primeflex/frontend/src/components/homepage/HomeVideo.js
import React, { useState, useEffect } from 'react';
import HomepageStuff from './HomepageStuff';
import DisplayData from './DisplayData';
import SearchableVideoList from './SearchableVideoList';
import AddReview from "./AddReview";
import Teaser from './Teaser';

const HomeVideo = () => {
    const [favoriteVideos, setFavoriteVideos] = useState([]);

    const saveFavoritesToLocalStorage = (favorites) => {
        localStorage.setItem('favoriteVideos', JSON.stringify(favorites));
    };

    const loadFavoritesFromLocalStorage = () => {
        const favorites = localStorage.getItem('favoriteVideos');
        return favorites ? JSON.parse(favorites) : [];
    };

    useEffect(() => {

        setFavoriteVideos(loadFavoritesFromLocalStorage());
    }, []);
    const toggleFavorite = (videoId) => {
        setFavoriteVideos((prevFavorites) =>
            prevFavorites.includes(videoId)
                ? prevFavorites.filter((id) => id !== videoId)
                : [...prevFavorites, videoId]
        );
    };

    useEffect(() => {
        saveFavoritesToLocalStorage(favoriteVideos);
    }, [favoriteVideos]);

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openNav = () => {
        setSidebarOpen(true);
    };

    const closeNav = () => {
        setSidebarOpen(false);
    };

    const videos = [
        { id: 1, title: 'Supacell', description: 'Neue Serie von Rapman. Debütiert diesen Juni auf Netflix.', url: 'https://youtu.be/0URJ2Gu4K2M' },
        { id: 2, title: 'Parasyte', description: 'Parasiten übernehmen menschliche Wirte. Menschheit kämpft dagegen an.', url: 'https://youtu.be/maIGHqJB6aQ' },
        { id: 3, title: 'Wednesday Addams', description: 'Staffel 2 kommt 2025.', url: 'https://youtu.be/uPOONJlXRr4' },
        { id: 4, title: 'Rebel Moon', description: 'Teil zwei kommt am 19. April 2024 auf Netflix.', url: 'https://youtu.be/UEJuNHOd8Dw' },
        { id: 5, title: 'Avatar', description: 'Die Live-Action-Serie kommt am 22. Februar auf Netflix.', url: 'https://youtu.be/ByAn8DF8Ykk' },
        { id: 6, title: 'Deadpool & Wolverine', description: 'Trailer-Konzept für Deadpool & Wolverine (2024)', url: 'https://youtu.be/uJMCNJP2ipI' }
    ];

    return (
        <div className="App">
            <HomepageStuff openNav={openNav} closeNav={closeNav} sidebarOpen={sidebarOpen} />
            <h3>Trends: Movie & Serien Teaser</h3>
            <DisplayData videos={videos.filter((video) => favoriteVideos.includes(video.id))}/>
            <SearchableVideoList videos={videos}/>
            <div className="video-thumbnails-container">
                <Teaser videos={videos} favoriteVideos={favoriteVideos} toggleFavorite={toggleFavorite}/>
            </div>
            <AddReview videos={videos}/>
        </div>
    );
}

export default HomeVideo;