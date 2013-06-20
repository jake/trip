var points = [];

var openpaths = require('./results/openpaths_jacob.json');

var start_time = new Date('May 14, 2013') / 1000;
var end_time = new Date('May 21, 2013') / 1000;

for (var i=0; i < openpaths.length; i++) {
    if (openpaths[i].t < start_time) continue;
    if (openpaths[i].t > end_time) continue;

    delete openpaths[i].os;
    delete openpaths[i].version;
    delete openpaths[i].device;

    points.push(openpaths[i]);
}

console.log("%j", points);
