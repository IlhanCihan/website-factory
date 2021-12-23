import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { useBlock } from '@/helpers';

export default function (block) {
    return {
        name: 'Block' + upperFirst(camelCase(block.type)),
        props: {
            content: {
                type: Object,
                default: () => ({}),
            },
            children: {
                type: Array,
                default: () => [],
            },
            media: {
                type: Array,
                default: () => [],
            },
            related: {
                type: Array,
                default: () => [],
            },
            ...block.props,
        },
        emits: ['update:content', 'update:children', 'update:related', 'update:*'],
        setup(props, context) {
            const { initializeFields } = useBlock();

            props = initializeFields(block, props);

            if (
                block.hasOwnProperty('setup') &&
                block.setup instanceof Function
            ) {
                return block.setup(props, context);
            }
        },
    };
}
