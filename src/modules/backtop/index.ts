import * as $ from 'jquery';

$(function(): void {
    const backtopDom: JQuery<HTMLElement> = $("#lqsblog-top");
    backtopDom.on('click',function() {
        $(document).scrollTop(0);
    });
    window.onscroll = function() {
        const scroH: number = $(document).scrollTop() || 0;
        if (scroH > 20) { 
            backtopDom.css('display', 'block');
        } else {
            backtopDom.css('display', 'none');
        }
    };
})