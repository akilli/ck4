'use strict';

(function (document, CKEDITOR) {
    document.addEventListener('DOMContentLoaded', () => {
        const plugins = ['api', 'block', 'browser', 'detail', 'gallery', 'grid', 'media', 'mediabrowser', 'quote', 'section'];
        plugins.forEach(item => CKEDITOR.plugins.addExternal(item, `../../plugin/${item}/`));

        const editor = CKEDITOR.replace(document.getElementById('rte'), {
            blockApi: id => isNaN(id) ? null : 'api/' + id,
            blockBrowser: 'browser/block.html',
            contentsCss: ['css/base.css', 'css/app.css'],
            customConfig: '',
            disableNativeSpellChecker: true,
            extraPlugins: plugins.join(','),
            fillEmptyBlocks: false,
            format_tags: 'p;h2;h3',
            height: '30rem',
            language: 'de',
            mediaBrowser: 'browser/media.html',
            mediabrowserUrl: 'browser/media.html',
            removeDialogTabs: 'link:advanced;link:target',
            section: {
                'block-content': 'Inhaltsblock',
                'block-info': 'Infoblock'
            },
            stylesSet: false,
            toolbar: [
                {
                    name: 'all',
                    items: [
                        'Undo',
                        'Redo',
                        'Maximize',
                        'Bold',
                        'Italic',
                        'Link',
                        'Unlink',
                        'Format',
                        'BulletedList',
                        'NumberedList',
                        'Quote',
                        'Media',
                        'Table',
                        'Detail',
                        'Section',
                        'Block',
                        'Grid',
                        'Gallery'
                    ]
                }
            ]
        });
        document.getElementById('save').addEventListener('click', () => console.log(editor.getData()));
    });
})(document, CKEDITOR);
