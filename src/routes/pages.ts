/*
 * @Author: ruoruochen
 * @Date: 2022-03-20 22:10:11
 * @LastEditTime: 2022-03-23 17:43:01
 * @Description:组件懒加载
 * Copyright (c) ${2022} by ruoruochen, All Rights Reserved.
 */

import { lazy } from 'react';
const PAGES = {
    HOME: lazy(() => import(/* webpackChunkName: 'home' */ '@/pages/Home')),
    PLAYER: lazy(() => import(/* webpackChunkName: 'player' */ '@/pages/Player')),
};

export default PAGES;
