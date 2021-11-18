import { defineComponent, reactive } from "vue";
import { HelloWorld } from "@/components/HelloWorld";

interface State {
    msg: string;
    age: number;
}

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
                    <img alt="Vue logo" src="../assets/logo.png" />
                    {/*  */}
                    <HelloWorld msg={state.msg} />
                </div>
            </div>
        )
    }
})
