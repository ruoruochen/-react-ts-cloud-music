import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NormalPlayer from '@/components/normal-player';
import { IRootState } from '@/types';
import Player from '@/plugins';
interface IFooterProps {
    url: string;
    duration: number;
}

function Footer(props: IFooterProps) {
    const { url, duration } = props;
    useEffect(() => {
        Player.play({ url });
    }, [props.url]);
    return (
        <div>
            <NormalPlayer max={duration} />
        </div>
    );
}

const mapState = (state: IRootState) => {
    return {
        url: state.music.musicUrl,
        duration: state.music.duration,
    };
};

export default connect(mapState)(Footer);
