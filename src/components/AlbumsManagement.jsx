import React, { useEffect, useState } from 'react';
import '../style/AlbumsManagement.css';
import { KEYS, load, save } from '../utils/localStorage';
import { v4 as uuidv4 } from 'uuid';
import AddAlbumForm from './forms/AddAlbumForm';
import Album from './Album';
import { useTranslation } from 'react-i18next';

const AlbumsManagement = () => {
    const [favMusicList, setFavMusicList] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        loadAlbums();
    }, [])

    useEffect(() => {
        save(KEYS.ALBUMS, JSON.stringify(favMusicList));
    }, [favMusicList]);

    const loadAlbums = async () => {
        const loadedAlbumsJSON = await load(KEYS.ALBUMS);
        const loadedAlbums = JSON.parse(loadedAlbumsJSON);

        if (loadedAlbums) {
            setFavMusicList(loadedAlbums);
        }
    };

    const handleAlbumAdd = (album) => {
        const id = uuidv4();
        setFavMusicList([...favMusicList, {...album, id}]);
    }

    const handleMarkBestOf = (album) => {
        const foundAlbumidx = favMusicList.findIndex(a => a.id === album.id);
        const updatedAlbums = [...favMusicList];
        updatedAlbums[foundAlbumidx].isTheBestOf = !album.isTheBestOf; //toggle
        setFavMusicList(updatedAlbums);
    }

    const handleDeleteAlbum = (album) => {
        setFavMusicList(favMusicList.filter(a => a.id !== album.id));
    }

    return (
        <div className="albums-manager">
            <div className="albums-manager__add-album-section grey lighten-5">
                <AddAlbumForm onSubmit={handleAlbumAdd}/>
            </div>
            <div className="albums-manager__albums-collection-section">
                {!!favMusicList && 
                    <ul className="row">
                        {favMusicList.length > 0 &&
                            favMusicList.map((album, idx) => 
                                <li key={`album-item-${idx}`} className="col m12 l6 xl4 scale-transition scale-in">
                                    <Album data={album} onStarPress={() => handleMarkBestOf(album)} onDeletePress={() => handleDeleteAlbum(album)}/>
                                </li>
                            )  
                        }
                        {favMusicList.length === 0 && <p className="flow-text grey-text">{t('albumsManagement.noAlbums')}</p>}
                    </ul>
                }
            </div>
        </div>
    );
}

export default AlbumsManagement;