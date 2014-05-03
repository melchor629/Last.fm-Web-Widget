var fs = require('fs');
var js = 'æ';

if(fs.existsSync('lastSongs.comp.js'))
    fs.unlinkSync('lastSongs.comp.js');

var files = fs.readdirSync('.');
for(var i = 0; i < files.length; i++) {
    var file = files[i];
    if(file.substr(-2) !== 'js')
        continue;
    js += '//' + file + '\n';
    js += fs.readFileSync(file, { encoding: 'UTF-8' });
    js += '\n\n';
}

fs.writeFile('lastSongs.comp.js', js, {
    encoding: 'UTF-8'
}, function(err) {
    if(err) throw err;
    console.log("Files concatenated correctly");
});