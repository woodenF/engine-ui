import { defineComponent, h } from 'vue';
import { buttonProps } from '../types';
import 'uno.css';

export default defineComponent({
  name: 'Button',
  props: buttonProps,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
          py-2
          px-4
          bg-pink-500
          m-1
          hover:bg-gray-500
        `}
      >{ props.size } { props.type }</button>
    );
  }
});
