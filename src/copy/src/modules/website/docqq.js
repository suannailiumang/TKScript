
const website = {
    regexp: /.*docs\.qq\.com\/.+/,
    init: function($) {
        const hide = () => $("body").append("<style>#_copy{display: none !important;}</style>");
        if(unsafeWindow.pad){
            if(unsafeWindow.pad.editor._docEnv.copyable === true) hide();
            unsafeWindow.pad.editor._docEnv.copyable = true;
        }else{
            hide();
        }
    },
    getSelectedText: function(){
        if(unsafeWindow.pad){
            unsafeWindow.pad.editor.clipboardManager.copy();
            return unsafeWindow.pad.editor.clipboardManager.customClipboard.plain;
        }
        return void 0;
    }
} 

export default website;