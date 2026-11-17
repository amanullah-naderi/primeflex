/* wa_ss24_primeflex/frontend/src/components/homepage/VideoList.js */
import React, { useState } from 'react';
import '../styles/VideoList.css';

function VideoList({ videos, emptyHeading }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchInputChange = (value) => {
        setSearchTerm(value);

        setIsOpen(!!value);

        if (!value) {
            setIsOpen(false);
        }
    };

    return (
        <div className="video-list-container">
            <div className="video-list-header" onClick={() => setIsOpen(!isOpen)}>
                <span className={`arrow-icon ${isOpen ? 'open' : ''}`}></span>
            </div>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Search videos..."
                    value={searchTerm}
                    onChange={(e) => handleSearchInputChange(e.target.value)}
                />
            </div>

            {isOpen && (
                <div className="video-list-content">
                    {filteredVideos.length > 0 ? (
                        <ul className="video-ul">
                            {filteredVideos.map(video => (
                                <li key={video.id}>
                                    <a
                                        className="video-link"
                                        href={video.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <h3 className="video-title">{video.title}</h3>
                                    </a>
                                    <p className="video-description">{video.description}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="empty-heading">{emptyHeading}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default VideoList;