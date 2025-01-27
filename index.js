'use strict';

const 
    abData = require('ab-data'),
    js0 = require('js0'),
    
    f = abData.fields,
    s = abData.scheme,
    v = abData.validators
;

module.exports.init = function (ds) {
    js0.args(arguments, s.DataScheme);

    ds.defT(tSession_Sessions);
};


/* Tables */
let tSession_Sessions = new abData.Table(101, 'Session_Sessions', 's_s', [
    [ 'Id',     f.String(32, { notNull: true, }) ],
    [ 'Access', f.Int({notNull: false }) ],
    [ 'Data',   f.Text('regular', { notNull: false }) ],
        ])
    .setPKs([ 'Id' ]);