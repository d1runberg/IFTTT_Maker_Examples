var IFTTT = require('node-ifttt-maker'),
    ifttt = new IFTTT('<YOUR MAKER KEY>');

var reqInfo= {
event: 'test',
method: 'GET',
params: {
    'value1': 'test',
    'value2': 2,
    'value3': {
        x: 1,
        y: 2
    }
}
};

ifttt.request(reqInfo, function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('---OK---');
    }
});
