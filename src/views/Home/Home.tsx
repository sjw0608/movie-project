import { defineComponent, reactive } from "vue";
import HelloWorld from "@/components/HelloWorld";
import Footer from '@/components/Footer';

import Button from '@/components/Button';

interface State {
    msg: string;
    age: number;
}

const Buttons = ['primary', 'ghost', 'dashed', 'link', 'text', 'default'];
export const Home = defineComponent({
    setup(props) {
        let state: State = reactive({
            msg: 'Welcome to Your Vue.js + TypeScript App',
            age: 18
        })
        setTimeout(() => {
            state.msg = 'Begin'
        }, 2000)
        return () => (
            <div>
                <div class="home">

                    {
                        Buttons.map(item => <Button type={item}>按钮</Button>)
                    }
                </div>
                <Footer />
            </div>
        )
    }
})
