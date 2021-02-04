declare module '*.css';
declare module '*.scss';
declare module '*.png';
declare module '*.svg';

declare module 'mockjs';


interface JQuery {
    toastuiEditor(options: { initialValue: string }): JQuery;
}

// api接口域名
declare const WEBSITE_APP_APIHOST: string;
