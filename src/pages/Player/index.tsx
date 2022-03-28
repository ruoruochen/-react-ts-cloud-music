import { useState, useEffect } from 'react';
import Header from './components/Header';
import Album from './components/Album';
import Footer from './components/Footer';
import request from '@/utils/request';
import { GET_SONGS_DETAIL } from '@/api/player';
import { IMusicData } from '@/types/common';

interface IPlayerProps {
    ids: string;
}

export default function Player(props: IPlayerProps) {
    const [musicData, setMusicData] = useState({});

    useEffect(() => {
        const getMusicData = async () => {
            let data: any = await request.get(GET_SONGS_DETAIL, { ids: props.ids });
            data = Array.isArray(data.songs) ? data.songs[0] : {};
            setMusicData(data);
        };

        getMusicData();
    }, [props.ids]);
    return (
        <div className="player-container">
            <Header musicData={musicData as IMusicData} />
            <Album musicData={musicData as IMusicData} id={props.ids} />
            <Footer id={props.ids} />
        </div>
    );
}

Player.defaultProps = {
    ids: '1394310910',
};
