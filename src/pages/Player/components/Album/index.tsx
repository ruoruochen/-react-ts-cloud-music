import React from 'react';
import { IMusicData } from '@/types/common';

interface IAlbumProps {
    musicData: IMusicData;
    id: string;
}

export default function Album(props: IAlbumProps) {
    const { al: albumData } = props.musicData;
    return (
        <div className="album-container">
            <img className="album-img" src={albumData?.picUrl} alt="" />
        </div>
    );
}
