const crypto = require('crypto');

module.exports = {
    MD5_SUFFIX: 'sgsgte434DFSGSG24255GSG2w$###53^6三个set给我',
    md5: function (str) {
        var obj = crypto.createHash('md5');
        obj.update(str);
        return obj.digest('hex');
    }
}