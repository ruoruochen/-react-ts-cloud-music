import React from 'react';
import { connect } from 'react-redux';
import { IMusicData, IRootState, ISinger } from '@/types';

interface IHeaderProps {
    name: string;
    singerList: Array<ISinger>;
}
function Header(props: IHeaderProps) {
    const { name, singerList } = props;
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

const mapState = (state: IRootState) => {
    return {
        name: state.music.name,
        singerList: state.music.singerList,
    };
};

export default connect(mapState)(Header);
