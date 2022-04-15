import { MouseEvent } from 'react';
import PropTypes from 'prop-types';

import useSlider from '@/hooks/useSlider';

import Icon from '@/components/icon';
import Player from '@/plugins';

import { PlayButton, PlayMusicTypes, PlayMusicStatus } from './styles.js';
interface INormalPlayerProps {
    max: number;
    min?: number;
    initValue?: number;
}

enum PlayTypes {
    ORDER,
    SINGLE,
    RANDOM,
}

enum PlayStatus {
    PLAYING,
    PAUSE,
    STOP,
}

function NormalPlayer(props: INormalPlayerProps) {
    const [hotAreaProps, thumbProps, sliderState] = useSlider({ initValue: 0, min: 0, max: 0 });
    const { value } = sliderState;
    let playType = 0;
    let playStatu = 0;

    const handlePauseMusic = (e: MouseEvent) => {
        e.stopPropagation();
        Player.pause();
    };

    const handlePlayMusic = (e: MouseEvent) => {
        e.stopPropagation();
        Player.play({});
    };

    const handlePreMusic = (e: MouseEvent) => {
        e.stopPropagation();
        Player.playPreSong();
    };

    const handleNextMusic = (e: MouseEvent) => {
        e.stopPropagation();
        Player.playNextSong();
    };

    const handleChangePlayType = (e: MouseEvent) => {
        e.stopPropagation();
        Player.changePlayType(2);
    };

    return (
        <div>
            {/* 时间拖动条 */}
            <div className="slider">
                <div className="track" {...hotAreaProps}></div>
                <div className="process" style={{ width: `${(value / 20) * 100}%` }}>
                    <div className="circle" {...thumbProps}></div>
                </div>
            </div>
            {/* 播放列表 */}
            <PlayButton>
                <PlayMusicTypes onClick={handleChangePlayType}>
                    {playType === PlayTypes.ORDER && <Icon type="icon-xunhuan"></Icon>}
                    {playType === PlayTypes.RANDOM && <Icon type="icon-xunhuanbofang"></Icon>}
                    {playType === PlayTypes.SINGLE && <Icon type="icon-24gl-repeatOnce2"></Icon>}
                </PlayMusicTypes>
                <Icon type="icon-shangyiqu" onClick={handlePreMusic}></Icon>
                <PlayMusicStatus>
                    {playStatu === PlayStatus.PAUSE && <Icon type="icon-zanting1" onClick={handlePauseMusic}></Icon>}
                    {playStatu === PlayStatus.PLAYING && (
                        <Icon type="icon-24gl-playCircle" onClick={handlePlayMusic}></Icon>
                    )}
                </PlayMusicStatus>
                <Icon type="icon-xiayiqu" onClick={handleNextMusic}></Icon>
                <Icon type="icon-24gl-playlistMusic"></Icon>
            </PlayButton>
        </div>
    );
}

NormalPlayer.propTypes = {};

export default NormalPlayer;
