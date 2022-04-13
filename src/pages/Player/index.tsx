import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from './components/Header';
import Album from './components/Album';
import Footer from './components/Footer';
import request from '@/utils/request';
import { GET_SONGS_DETAIL } from '@/api/player';
import { IMusicData, IRootState } from '@/types';
import { fetchMusicData, fetchMusicUrl } from '@/store/musicRedux';

interface IPlayerProps {
    ids: string;
    preId: string;
    getMusicData: Function;
    getMusicUrl: Function;
}

function Player(props: IPlayerProps) {
    useEffect(() => {
        const { ids, preId, getMusicData, getMusicUrl } = props;
        if (ids !== preId) {
            getMusicData?.(ids);
            getMusicUrl?.(ids);
        }
    }, [props.ids]);
    return (
        <div className="player-container">
            <Header />
            <Album />
            <Footer />
        </div>
    );
}

Player.defaultProps = {
    // 1394310910  1364471785 1359818052
    ids: '1394310910',
};

const mapState = (state: IRootState) => ({
    preId: state.music.id,
});

const mapDispatch = (dispatch: Function) => ({
    getMusicData: compose(dispatch, fetchMusicData),
    getMusicUrl: compose(dispatch, fetchMusicUrl),
});

export default connect(mapState, mapDispatch)(Player);
