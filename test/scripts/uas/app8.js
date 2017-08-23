var Srf = require('../../..') ;
var srf = new Srf() ;
var fs = require('fs') ;
var debug = require('debug')('srf-test') ;

module.exports = function(config) {

  srf.set('api logger', fs.createWriteStream(config.apiLog)) ;
  config.connect_opts.label = config.label;
  srf.connect(config.connect_opts) ;

  srf.invite((req, res) => {

    // give time for CANCE
    req.on('cancel', () => {
      debug('got cancel at UAS side');
    });
  }) ;


  return srf ;
} ;
