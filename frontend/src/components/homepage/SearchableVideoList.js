/* wa_ss24_primeflex/frontend/src/components/homepage/SearchableVideoList.js */
import React, { useState } from 'react';
import VideoList from './VideoList';

function SearchableVideoList({ videos }) {
    const [searchText] = useState('');

    const filterVideos = (videos, searchText) => {
        return videos.filter(video =>
            video.title.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const foundVideos = filterVideos(videos, searchText);

    return (
        <>
            <VideoList
                videos={foundVideos}
                emptyHeading={`No matches for “${searchText}”`}
            />
        </>
    );
}

export default SearchableVideoList;