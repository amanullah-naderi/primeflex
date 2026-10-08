/* wa_ss24_primeflex/frontend/src/components/homepage/VideoThumbnail.js */
import React from 'react';
import '../styles/VideoThumbnail.css';

const VideoThumbnail = ({ videoUrl, title, isFavorite, onToggleFavorite }) => {
    const videoId = videoUrl.split('/').pop();
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    const toggleFavorite = () => {
        onToggleFavorite();
    };

    const heartColor = isFavorite ? 'red' : 'white';
    const heartIcon = isFavorite ? '❤️' : '♡';

    const titleStyle = {
        color: 'white',
        fontWeight: 'bold',
        marginTop: '10px'
    };

    return (
        <div style={{ marginBottom: '20px', textAlign: 'left', overflow: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '24px', marginRight: '10px', cursor: 'pointer', color: heartColor }} onClick={toggleFavorite}>
                    {heartIcon}
                </span>
                <p style={titleStyle}>{title}</p>
            </div>
            <iframe
                width="100%"
                height="315"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoThumbnail;