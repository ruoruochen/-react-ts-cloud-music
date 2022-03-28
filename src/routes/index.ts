import PAGES from './pages';

interface IRouteListItem {
    path: string;
    element: any;
}

const routesList: IRouteListItem[] = [
    { path: '', element: PAGES.HOME },
    { path: 'player', element: PAGES.PLAYER },
];

export default routesList;
