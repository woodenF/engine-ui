import type { Plugin } from "vue";
/**
 * 组件外部使用use时执行install，然后将组件注册为全局
 */
export declare type SFCWithInstall<T> = T & Plugin;
/**
 * 定义一个withInstall方法处理以下组件类型问题
 * @param comp
 */
export declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;
