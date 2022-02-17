import { defineComponent, reactive, SetupContext, VNode } from 'vue';
import classNames from '@/utils/className';
import Props from './props';
import { PREFIX } from '../contants';

import './button.less';

const Button = defineComponent({
    name: 'Button',
    props: Props,

    setup(props, { slots }: SetupContext) {
        const {
            htmlType,
            type,
            size,
            icon,
            loading,
            disabled,
            shape,
            status,
            href,
            block,
            className,
            style
        } = props

        const classString = classNames([
            `${PREFIX}-button`,
            `${PREFIX}-button-type-${type}`,
            `${PREFIX}-button-status-${status}`,
            `${PREFIX}-button-shape-${shape}`,
            `${PREFIX}-button-size-${size}`,
            loading ? `${PREFIX}-button-loading` : '',
            icon ? `${PREFIX}-button-hasicon` : '',
            disabled ? `${PREFIX}-button-disabled` : '',
        ])
        const renderIcon = (): VNode => {
            return <div></div>
        }
        return () => (
            <button class={classString} disabled={disabled || loading}>
                <div class="">
                    {icon || loading ? renderIcon() : null}
                    <span class="">{slots.default && slots.default()}</span>
                </div>
            </button>
        );
    }
});

export default Button;