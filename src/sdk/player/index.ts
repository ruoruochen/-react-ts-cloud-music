// Player SDK功能划分
// 1. 基础功能：视频的播放、暂停、上一首、下一首、音乐进度调整。
// 2. 延伸功能：声音调整。
// 3. UI界面，通过传入id，使用js增加class

// 第一阶段，先实现功能，忽略UI层
// interface IOptions {
//     // id: string; // 占位DOM
//     url: string; // 播放链接
// }

enum PLAY_TYPES {
    ORDER,
    SINGLE,
    RANDOM,
}

export default class Player {
    songs = [
        'http://m8.music.126.net/20220413224109/47b0b47c7befd64ff1dce41717a2ebf3/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2502101503/e631/d337/8df0/2bf3669d8399403cbf7444a143d80f83.mp3',
        'http://m7.music.126.net/20220413224141/7e3dd39a0e918f282790a3b72a464dff/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/13928035108/8ced/3d40/004e/360c5d70eaac8c79ff2a30545f6159ba.mp3',
        'http://m8.music.126.net/20220413224207/b70e63370467a5adfa51814c07be3798/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/13928005782/66c9/ea22/1dc4/b6dcace49fa03987e6d3ff0b97e7a7a4.mp3',
    ];
    currenIndex = 0;
    playType: PLAY_TYPES = PLAY_TYPES.ORDER;
    audio: any;
    url: any;

    constructor(opts?: any) {
        this.audio = document.createElement('audio');
        this.audio.autoplay = true;
        this.audio.onended = () => {
            console.log('info-play-end');
            // 根据playType，选择url 继续Play
            if (this.playType == PLAY_TYPES.RANDOM) {
                // 计算一个随机数
                const index = Math.floor(Math.random() * this.songs.length);
                // 随机播放一个音频文件
                this.audio.src = this.songs[index];
            } else if (this.playType == PLAY_TYPES.ORDER) {
                // 播放下一个音频文件
                this.audio.src = this.songs[++this.currenIndex % this.songs.length];
            } else {
            }
            // 播放
            this.audio.play();
        };
        this.url = opts?.url;
    }

    // 播放
    play({ url = this.url }) {
        try {
            if (!url) {
                return new Error('Invalid url');
            }
            if (this.url !== url) {
                this.url = url;
                this.audio.src = url;
            }
            this.audio.play();
        } catch (error) {
            console.error(error);
        }
    }

    // 暂停
    pause() {
        this.audio.pause();
    }

    // 上一曲
    playPreSong() {
        this.currenIndex = Math.max(0, this.currenIndex - 1);
        this.play({ url: this.songs[this.currenIndex] });
    }

    // 下一曲
    playNextSong() {
        this.currenIndex = Math.min(this.songs.length - 1, this.currenIndex + 1);
        this.play({ url: this.songs[this.currenIndex] });
    }

    // 切换播放模式
    changePlayType(type: number) {
        this.playType = type;
    }

    // 更新配置
    updatePlayerConfig(opts: any) {}
}
