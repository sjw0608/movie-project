import { PropType } from 'vue';

declare type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';
declare type ButtonType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
declare type ButtonShape = 'default' | 'circle' | 'round';
declare type ButtonStatus = 'success' | 'danger' | 'info' | 'warning' | 'normal';
declare type HtmlType = 'button' | 'submit' | 'reset';

const Props = {
    /**
     * 设置 button 原生的 type 值可选值请参考 [HTML 标准| https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type]
     * @default: button
     */
    htmlType: {
        type: String as PropType<HtmlType | string>,
        default: 'button',
    },
    /**
    * 设置按钮类型
    * @default: default
    */
    type: {
        type: String as PropType<ButtonType | string>,
        default: 'default'
    },
    /**
     * 设置按钮大小
     * @default: md
     */
    size: {
        type: String as PropType<ButtonSize | string>,
        default: 'md'
    },
    /**
     * 设置按钮的图标组件
     */
    icon: {
        type: String as PropType<string>,
        default: ''
    },
    /**
     * 设置按钮载入状态
     */
    loading: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    /**
     * 设置按钮是否禁用状态
     */
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    /**
     * 设置按钮形状
     * @default: default
     */
    shape: {
        type: String as PropType<ButtonShape | string>,
        default: 'default'
    },
    /**
    * 设置按钮状态
    * @default: normal
    */
    status: {
        type: String as PropType<ButtonStatus | string>,
        default: 'normal'
    },
    /**
     * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
     */
    href: {
        type: String as PropType<string>,
        default: ''
    },
    /**
     * 将按钮宽度调整为其父宽度的选项
     */
    block: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    /**
     * 自定义class
     */
    className: {
        type: String as PropType<string>,
        default: ''
    },
    /**
     * 自定义style
     */
    style: {
        type: Object as PropType<object>,
        default: {}
    },
    /**
     * 点击按钮的回调
     */
    onClick: {
        type: Function as PropType<(event: MouseEvent) => void>,
    }
}

export default Props;