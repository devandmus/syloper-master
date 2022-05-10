const path = require('path');
const nconf = require('nconf');
const yaml = require('js-yaml');

const ENV = process.env.NODE_ENV || 'development';

const format = {
  parse: yaml.load,
  stringify: yaml.dump,
};

const getFile = file => path.join(__dirname, file);

const baseFile = {
  file: getFile('./base.yml'),
  format,
};

const envFile = {
  file: getFile(`./${ENV}.yml`),
  format,
};

nconf.argv();
nconf.defaults({ APP: { NODE_ENV: ENV } });

// prioridad por archivo: no acepta sobreescritura
nconf.file(ENV, envFile);
nconf.file('base', baseFile);

module.exports = nconf.get('APP');
