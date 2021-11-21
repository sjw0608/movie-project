import { defineComponent, reactive } from 'vue';
import { Tabbar, TabbarItem } from 'vant';

export const Footer = defineComponent({
    setup() {
        let state = reactive({
            active: 0
        })
        return () => (
            // <div>这是一个底部footer</div>
            <Tabbar value={state.active}>
                <TabbarItem>首页</TabbarItem>
            </Tabbar>
        )
    }
})