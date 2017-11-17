'use strict';

const info = require('../../package.json');

/**
 * Exibe a versão do pacote.
 */
exports.execute = function()
{
    console.info(info.version);
};
