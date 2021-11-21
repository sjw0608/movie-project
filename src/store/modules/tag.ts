import { TagItem } from '@/typeRequire/tag';
import * as types from '../action-type';

interface State {
    TAG_ACTIVE: number;
    TAG: Array<TagItem>
}

interface Mutations {
    [types.SET_TAG_ACTIVE](state: State, payload: number): void
}

const state: State = {
    TAG_ACTIVE: 0,
    TAG: [
        {
            title: "首页",
            icon: require("@/assets/images/home_n_icon.png"),
            iconActive: require("@/assets/images/home_a_icon.png"),
            id: 0
        },
        {
            title: "电影",
            icon: require("@/assets/images/movie_n_icon.png"),
            iconActive: require("@/assets/images/movie_a_icon.png"),
            id: 1
        },
        {
            title: "电影院",
            icon: require("@/assets/images/cinema_n_icon.png"),
            iconActive: require("@/assets/images/cinema_n_icon.png"),
            id: 2
        },
        {
            title: "发现",
            icon: require("@/assets/images/find_n_icon.png"),
            iconActive: require("@/assets/images/find_n_icon.png"),
            id: 3
        },
        {
            title: "我的",
            icon: require("@/assets/images/mine_n_icon.png"),
            iconActive: require("@/assets/images/mine_a_icon.png"),
            id: 4
        }
    ]
}

const mutations: Mutations = {
    [types.SET_TAG_ACTIVE](state: State, payload: number) {
        state.TAG_ACTIVE = payload
    }
}

const actions = {}

export default {
    namespace: true,
    state,
    mutations,
    actions,
}