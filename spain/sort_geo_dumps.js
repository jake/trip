var start_time = new Date('May 14, 2013') / 1000;
var end_time = new Date('May 21, 2013') / 1000;

if (typeof process.argv[2] == undefined) throw "Pass filename in argv";

var points = require(process.argv[2]);

function sort_points(points) {
    return points.sort(function(a, b) {
        return (a.t - b.t);
    });
}

console.log("%j", sort_points(points));