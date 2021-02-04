import * as $ from 'jquery';

import { trim } from "../utils/trim";

$(function(): void {

    const searchInputDom: JQuery<HTMLElement> = $('#jq-search-input');
    const searchTipsDom: JQuery<HTMLElement> = $('#jq-search-tips');
    searchInputDom.on('input propertychange', function() {
        const val: string = $(this).val() as string;
        if(trim(val) === '') {
            searchTipsDom.text('请输入搜索内容');
        }else{
            searchTipsDom.text('');
        }
    })
    $('#jq-search-btn').on('click', function() {
        const val: string = searchInputDom.val() as string;
        if(trim(val) === '') {
            searchTipsDom.text('请输入搜索内容');
            return false;
        }
        
        return;
    });
});