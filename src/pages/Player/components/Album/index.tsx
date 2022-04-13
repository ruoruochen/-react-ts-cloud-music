import React from 'react';
import { connect } from 'react-redux';
import { IMusicData, IRootState } from '@/types';

interface IAlbumProps {
    picUrl: string;
}

function Album(props: IAlbumProps) {
    const { picUrl } = props;
    return (
        <div className="album-container">
            <img className="album-img" src={picUrl} alt="" />
        </div>
    );
}

const mapState = (state: IRootState) => {
    return {
        picUrl: state.music.picUrl,
    };
};

export default connect(mapState)(Album);
