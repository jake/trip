var points = [];

points = points.concat(require('./results/sorted_openpaths_jacob.json'));

points = points.concat(require('./results/sorted_photos_bravo.json'));
points = points.concat(require('./results/sorted_photos_jacob.json'));
points = points.concat(require('./results/sorted_photos_jason.json'));
points = points.concat(require('./results/sorted_photos_tida.json'));

function sort_points(points) {
    return points.sort(function(a, b) {
        return (a.t - b.t);
    });
}

console.log("%j", sort_points(points));
