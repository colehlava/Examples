/*
(function setup() {
  window.setInterval(() => {
  }, 250);
}());
*/

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    const address = '/key_press';
    const request = new XMLHttpRequest();

    request.open("POST", address, true);
    request.send(string.concat("keyVal=", direction));

    switch(direction) {
        case 'Up':
            break;
        case 'Down':
            break;
        case 'Left':
            break;
        case 'Right':
            break;
    }
}));

