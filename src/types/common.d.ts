export interface IMusicData {
    name: string;
    ar: array<ISinger>;
    al: IAlbumData;
}

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
