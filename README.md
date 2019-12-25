# Grid Widget

This widgets just serves as a container for multiple instances of other widgets in order to apply certain styles on them, p.e. through flexbox or grid layout.

The resulting HTML will be

    <div class="grid">
        ...
    </div>

## Technical

This widget will only allow other widgets as child elements. The filtering now takes place on `downcast`.

## Demo

- [Classic Editor](https://akilli.github.io/ckeditor4-build-classic/demo)
- [Inline Editor](https://akilli.github.io/ckeditor4-build-inline/demo)
