import React, { useEffect, useState } from 'react';
import '../style/AlbumsManagement.css';
import { KEYS, load, save } from '../utils/localStorage';

import AddAlbumForm from './forms/AddAlbumForm';
import Album from './Album';

const AlbumsManagement = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        loadAlbums();
    }, [])

    useEffect(() => {
        save(KEYS.ALBUMS, JSON.stringify(albums));
    }, [albums]);

    const loadAlbums = async () => {
        const loadedAlbumsJSON = await load(KEYS.ALBUMS);
        const loadedAlbums = JSON.parse(loadedAlbumsJSON);

        if (loadedAlbums) {
            setAlbums(loadedAlbums);
        }
    };

    const handleAlbumAdd = (album) => {
        const id = `album-${album.name}`;
        setAlbums([...albums, {...album, id}]);
    }

    const handleMarkFavourite = (album) => {
        const foundAlbumidx = albums.findIndex(a => a.id === album.id);
        const updatedAlbums = [...albums];
        updatedAlbums[foundAlbumidx].isTheBestOf = !album.isTheBestOf; //toggle
        setAlbums(updatedAlbums);
    } 

    const handleDeleteAlbum = (album) => {
        setAlbums(albums.filter(a => a.id !== album.id));
    }

    return (
        <div className="albums-manager">
            <div className="albums-manager__add-album-section grey lighten-5">
                <AddAlbumForm onSubmit={handleAlbumAdd}/>
            </div>
            <div className="albums-manager__albums-collection-section">
                <ul className="row">
                    {!!albums && albums.length > 0 && albums.map((album, idx) => 
                        <li key={`album-item-${idx}`} className="col s4">
                            <Album data={album} onStarPress={() => handleMarkFavourite(album)} onDeletePress={() => handleDeleteAlbum(album)}/>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default AlbumsManagement;