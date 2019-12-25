'use strict';

(function (document, CKEDITOR) {
    document.addEventListener('DOMContentLoaded', () => {
        const editor = CKEDITOR.replace(document.getElementById('rte'), {
            blockApi: id => isNaN(id) ? null : '/demo-browser/api/' + id,
            blockBrowser: '/demo-browser/block.html',
            contentsCss: [
                '/cms/gui/base.css',
                '/demo-browser/page.css'
            ],
            customConfig: '',
            disableNativeSpellChecker: true,
            fillEmptyBlocks: false,
            format_tags: 'p;h2;h3',
            height: '30rem',
            language: 'de',
            mediaBrowser: '/demo-browser/media.html',
            mediabrowserUrl: '/demo-browser/media.html',
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
