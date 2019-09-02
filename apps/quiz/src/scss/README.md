# Defined SCSS structure follow the 7-1 (7 folders, 1 file) pattern

> I just demo then think about it. You **might not need it**, just consider if you need it

* Abstracts: handles function, mixins, and variables
* Base: animations, base, typography, and utilies.
* Components: have a single scss file for each individual component
* Layout: Header, footer, grid, navigation
* Pages: Have a single scss for each specific page
* Themes: deals with various themes (optional, I haven’t use it yet)
* Vendors: handles 3rd party css

* The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the @import directive.