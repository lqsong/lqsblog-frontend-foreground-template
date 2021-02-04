// 引入样式
import '../../assets/css/global.scss'; // 全局
// import './main.scss'; // 当前页面

// 引入第三方
import * as $ from 'jquery';
import 'bootstrap';

// 引入头部js
import '../../modules/header/index';
// 引入底部js
import '../../modules/footer/index';
// 引入返回顶部js
import '../../modules/backtop/index';

// 引入编辑器
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/jquery-editor/dist/toastui-jquery-editor-viewer';

$(function(): void {   
    // console.log('works_detail')

    const val: string = $('#viewerText').text();
    $('#viewer').toastuiEditor({
        initialValue: val
    });


});
