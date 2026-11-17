/* wa_ss24_primeflex/frontend/src/components/homepage/DisplayData.js */
import React from 'react';

const DisplayData = ({ videos }) => {
    return (
        <div>
            <h2 style={{ color: 'white', backgroundColor: 'black', paddingTop: '30px', textAlign: 'center', margin:'0px' }}>
                Favorite
            </h2>
            {videos.length > 0 ? (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {videos.map((video) => (
                        <li key={video.id} style={{ color: 'white', backgroundColor: 'black', padding: '10px', margin: '10px', borderColor:'black' }}>
                            <strong>{video.title}</strong>: {video.description}
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ color: 'white', backgroundColor: 'black', paddingTop: '30px', textAlign: 'center', margin:'0px' }}>
                    No Favorite Movie or Serie
                </p>
            )}
        </div>
    );
};

export default DisplayData;