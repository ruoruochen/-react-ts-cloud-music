import { ISinger, IAction, IMusicState } from '@/types';
import { GET_SONGS_DETAIL, GET_SONG_URL } from '@/api/player';
import request from '@/utils/request';

/* defaultState */
const defaultState: IMusicState = {
    id: '',
    name: '',
    picUrl: '',
    singerList: [],
    musicUrl: '',
    duration: 0,
};

/* Action Type */
export const GET_MUSIC_DATA = 'GET_MUSIC_DATA';
export const GET_MUSIC_URL = 'GET_MUSIC_URL';

/* reducer */
export function musicReducer(state: IMusicState = defaultState, action: IAction) {
    const { type, payload } = action;
    switch (type) {
        case GET_MUSIC_DATA:
        case GET_MUSIC_URL:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
}

/* thunk函数 */
export const fetchMusicData = (ids: string) => (dispatch: Function, getState: Function) => {
    request
        .get(GET_SONGS_DETAIL, { ids })
        .then((res: any) => {
            const songs = res?.songs?.[0];
            const filterData = {
                id: songs?.id,
                name: songs?.name,
                picUrl: songs?.al?.picUrl,
                singerList: songs?.ar,
                duration: songs?.dt,
            };
            dispatch({ type: GET_MUSIC_DATA, payload: filterData });
        })
        .catch(error => {});
};

export const fetchMusicUrl = (id: string) => (dispatch: Function, getState: Function) => {
    request
        .get(GET_SONG_URL, { id })
        .then((res: any) => {
            console.log(res?.data?.[0]?.url);
            dispatch({ type: GET_MUSIC_URL, payload: { musicUrl: res?.data?.[0]?.url } });
        })
        .catch(error => {});
};
