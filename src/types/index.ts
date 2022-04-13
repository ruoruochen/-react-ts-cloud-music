export interface IMusicData {
    name: string;
    ar: Array<ISinger>;
    al: IAlbumData;
}

// 歌手
export interface ISinger {
    id: number;
    name: string;
}

export interface IAlbumData {
    id: number;
    name: string;
    picUrl: string;
}

export interface IMusicUrl {
    url: string;
}

export interface IAction {
    type: string;
    payload: object;
}

// Redux
export interface IMusicState {
    id: string;
    name: string;
    picUrl: string;
    musicUrl: string;
    singerList: Array<ISinger>;
    duration: number;
}

export interface IRootState {
    music: IMusicState;
}
