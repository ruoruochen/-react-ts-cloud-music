import { MouseEvent } from 'react';
import PropTypes from 'prop-types';

import useSlider from '@/hooks/useSlider';

import Icon from '@/components/icon';
import Player from '@/plugins';

interface INormalPlayerProps {
    max: number;
    min?: number;
    initValue?: number;
}

function NormalPlayer(props: INormalPlayerProps) {
    const [hotAreaProps, thumbProps, sliderState] = useSlider({ initValue: 0, min: 0, max: 0 });
    const { value } = sliderState;

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
            <div className="pause-btn" onClick={handlePauseMusic}>
                <Icon type="icon-zanting1"></Icon>
            </div>
            <div className="play-btn" onClick={handlePlayMusic}>
                <Icon type="icon-24gl-playCircle"></Icon>
            </div>
            <div className="pre-music" onClick={handlePreMusic}>
                <Icon type="icon-shangyiqu"></Icon>
            </div>
            <div className="next-music" onClick={handleNextMusic}>
                <Icon type="icon-xiayiqu"></Icon>
            </div>
            <div onClick={handleChangePlayType}>修改播放模式</div>
            <div className="next-music">
                <Icon type="icon-xunhuan"></Icon>
            </div>
        </div>
    );
}

NormalPlayer.propTypes = {};

export default NormalPlayer;
