/* wa_ss24_primeflex/frontend/src/components/homepage/Teaser.js*/

import React from 'react';
import VideoThumbnail from './VideoThumbnail';

const Teaser = ({ videos, favoriteVideos, toggleFavorite }) => {
    return (
        <div className="video-thumbnails-container">
            {videos.map((video) => (
                <div key={video.id} className="video-thumbnail">
                    <VideoThumbnail
                        videoUrl={video.url}
                        title={video.title}
                        isFavorite={favoriteVideos.includes(video.id)}
                        onToggleFavorite={() => toggleFavorite(video.id)}
                    />
                    <p>{video.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Teaser;