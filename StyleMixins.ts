let noselect: {[key:string]:string} = {
  '-webkit-user-select': 'none',
  '-khtml-user-select': 'none',
  '-moz-user-select': 'none',
  '-o-user-select': 'none',
  'user-select': 'none',
  'cursor': 'default'
};

export let StyleMixins = {
  noselect
};