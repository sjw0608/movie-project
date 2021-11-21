import { defineComponent, reactive, h } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import { useStore } from 'vuex'
import * as types from '@/store/action-type';
import { TagItem } from '@/typeRequire/tag';

interface tagChange {
    (index: number): void;
}

const Footer = defineComponent({
    setup() {
        const store = useStore();
        let state = reactive({
            active: store.state.tag.TAG_ACTIVE
        })

        const tag = store.state.tag.TAG;

        const tagChange: tagChange = (index) => {
            state.active = index
            store.commit(types.SET_TAG_ACTIVE, index)
        }

        return () => {
            const { active } = state
            return (
                <Tabbar
                    v-model={active}
                    fixed={true}
                    safe-area-inset-bottom={true}
                    active-color="#f73171"
                    inactive-color="#000"
                    onChange={tagChange}
                >
                    {
                        tag.map((item: TagItem) => (
                            h(
                                <TabbarItem key={item.id}></TabbarItem>,
                                {},
                                {
                                    icon: (props: any) => {
                                        return <img src={props.active ? item.iconActive : item.icon} />
                                    },
                                    default: () => {
                                        return <span>{item.title}</span>
                                    }
                                }
                            )
                        ))
                    }
                </Tabbar >
            )
        }
    }
})

export default Footer;