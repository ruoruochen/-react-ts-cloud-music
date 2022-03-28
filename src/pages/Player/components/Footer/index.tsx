import React, { useState, useEffect } from 'react';
import { GET_SONG_URL } from '@/api/player';
import request from '@/utils/request';
import { IMusicUrl } from '@/types/common';
interface IFooterProps {
    id: string;
}

export default function Player(props: IFooterProps) {
    const [musicUrl, setMusicUrl] = useState<IMusicUrl>({ url: '' });

    useEffect(() => {
        const getMusicUrl = async () => {
            const res: { data: object } = await request.get(GET_SONG_URL, { id: props.id });
            let data = Array.isArray(res.data) ? res.data[0] : {};
            console.log(data);
            setMusicUrl(data);
        };

        getMusicUrl();
    }, [props.id]);
    return (
        <div>
            <audio className="player-audio" src={musicUrl.url}></audio>
            Player
        </div>
    );
}
