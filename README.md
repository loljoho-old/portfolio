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
