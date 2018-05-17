import { Application, Component, StyleSheet, StyleMixins } from 'wtk';

class MyCard extends Component {
  constructor(private text) {
    super();

    this.addClass('my-card');

    this.elem.innerHTML = text;

    this.on('click', () => {
      if (this.hasClass('selected')) {
        this.removeClass('selected');
      } else {
        this.addClass('selected');
      }
    });
  }
}

let myStyles = {
  '.my-card': {
    'display': 'inline-block',

    'padding': '8px',
    
    'background-color': '#366d8a',
    'color': 'white',

    'border-radius': '8px',
    
    'transition': 'background-color 0.5s',

    ...StyleMixins.noselect
  },
  '.my-card.selected': {
    'background-color': '#3749af'
  }
}

class MyApp extends Application {
  run() {
    this.includeStyles(myStyles);

    this.add(new MyCard('Hello, World!'));
  }
}

new MyApp();