import React from 'react';
import { IMusicData } from '@/types/common';

interface IHeaderProps {
    musicData: IMusicData;
}
export default function Header(props: IHeaderProps) {
    const { name, ar: singerList } = props.musicData || {};
    console.log('info-name', name, singerList);
    return (
        <div className="header-container">
            <div className="left-icon"></div>
            <div className="music-data">
                {name}:{singerList && singerList.map((singer: Record<string, any>) => singer.name)}
            </div>
            <div className="share-music"></div>
        </div>
    );
}
