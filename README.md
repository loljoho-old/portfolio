Portfolio
=========

Résumé & Curriculum Vitae Web Application by Jonathan Ho


Overview
--------

 - Single-page web application
 - Responsive, mobile-friendly, cross-platform/browser design
 - Flexbox-based layout




Solution Stack
--------------

__Front-End Development__

 - __AngularJS__ MVC/MVW __JavaScript__ framework
 - __HTML5__ markup alongside __SVG__ icons
 - __CSS3__ stylesheets compiled from __Sass/Scss__
 - __Twitter Bootstrap `v4.0.0-alpha`__ layout foundation


__Design & Graphics__

 - __Adobe Photoshop__ and __Illustrator__
 - __Straight Edge__ and __5" x 8" Quad-Ruled Pad__
 - __


__Development Environment__

 - __Node.js__ runtime environment
 - __Bower__ front-end dependency manager
 - __npm__ development tool management
 - __Gulp.js__ task automation and build system
 - __Git__ and __GitHub__ version control
 - __ZenHub__ agile project management inside GitHub


__Server & Infrastructure__

 - __Amazon Web Services (AWS) EC2__ instance running __Amazon Linux AMI__
 - __Apache HTTP__ web server with server-side caching


__Tools & Software__

 - __Sublime Text 3__ and __Atom__ text editors
 - __Ubuntu__, __OS X__, and __Windows__ operating systems
 - __Shell Scripting__ and __CLI__
 - __Terminal/Bash__ CLIs with __Shell scripting__, and __SSH/SFTP__


 - Single-page web application built with __AngularJS__ MVC/MVW framework
 - __HTML5__ markup and design based on __Twitter Bootstrap__ v4.0.0-alpha with __Flexbox__
 - Responsive, mobile-friendly, and platform-agnostic __CSS3__ styles compiled from __Sass/Scss__

__Build__

 - __Bower__ front-end dependency manager
 - __npm__


__Development__

 - Task automation __Gulp.js__ streaming build system
 - __Node.js__ runtime environment
 - __npm__ package manager
 - __Ubuntu__, __OS X__, and __Windows__





Application Structure
---------------------

__Proposed Modular Structure__

```
src/
├── app/
│   ├── components/                   --> Component Directives
│   │   ├──
│   │   │   ├──
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   ├── collapse/                 --> Collapsible Elements
│   │   │   ├──
│   │   │   └──
│   │   ├── featurette/               --> Featurette Element
│   │   │   ├──
│   │   │   └──
│   │   ├── masthead/                 --> Masthead Element
│   │   │   ├──
│   │   │   └──
│   │   ├── navbar/                   --> Navigation Bar
│   │   │   ├──
│   │   │   └──
│   │   ├── progress/                 --> Progress Spinner/Bar
│   │   │   ├──
│   │   │   └──
│   │   ├── tiles/                    --> Card-Style Tiles
│   │   │   ├──
│   │   │   └──
│   │   └── components.module.js
│   ├── core/                         --> Core/Common Module
│   │   ├── style/
│   │   │   ├── _animations.scss
│   │   │   ├── _layout.scss
│   │   │   ├── _structure.scss
│   │   │   ├── _typography.scss
│   │   │   ├── _utilities.scss
│   │   │   └── _variables.scss
│   │   ├── util/
│   │   │   ├── dataservice.js
│   │   │   ├── errorhandler.js
│   │   │   ├── logger.js
│   │   │   └── routehelper.js
│   │   ├── core.config.js
│   │   ├── core.constants.js
│   │   ├── core.routes.js
│   │   ├── core.run.js
│   │   └── core.module.js
│   ├── sections/                       --> Site Sections
│   │   ├── home/
│   │   │   ├──
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   ├── skills/
│   │   │   ├──
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   ├── work/
│   │   │   ├──
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   ├── about/
│   │   │   ├──
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   └── sections.module.js
│   ├── view/                           --> View Layout Elements
│   │   ├── header/
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   ├── content/
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   ├── footer/
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   ├── view.controller.js
│   │   └── view.module.js
│   ├── index.scss
│   └── index.module.js
├── assets/
│   ├── data/
│   │   ├── site/
│   │   │   ├── sections.json
│   │   │   ├──
│   │   │   ├──
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   ├──
│   │   ├──
│   │   ├──
│   │   └──
│   ├── icons/
│   │   ├──
│   │   ├──
│   │   └──
│   ├── images/
│   │   ├──
│   │   ├──
│   │   └──
│   └──
├── index.html
├──
├──
└──
```




Blarg
-----

```
html,
body {
  background: transparent;
  border: 0;
  font-size: 100%;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}


// viewport-md
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  body {
    height: 75%
  }
}

// viewport-lg
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  html,
  body {
    height: 100%
  }
  body {
    background-color: rgba(255, 255, 255, 1)
  }
}

// tablet landscape
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .content-wrapper {
    background-color: rgba(242, 242, 242, 1);
    margin: 0 auto;
    width: 96%
  }
}

// mobile portrait
@media only screen and (min-width: 320px) and (max-width: 480px) and (orientation: portrait) {
  html {
    -webkit-text-size-adjust: none;
  }
  body {
    font-size: 70%;
    overflow-x: hidden
  }
}

// mobile landscape
@media only screen and (min-width: 320px) and (max-width: 568px) and (orientation: landscape) {
  html {
    -webkit-text-size-adjust: none
  }
  body {
    background-color: rgba(255, 255, 255, 1);
    font-size: 70%;
    overflow-x: hidden
  }
  .content-wrapper {
    background-color: rgba(242, 242, 242, 1);
    margin: 0 auto;
    width: 96%
  }
}

// print
@media only print {
}
```
