'use strict';

const cpf = require('node-cpf');

/**
 * Gera um CPF válido.
 *
 * @param {Array}  params
 * @param {Object} options
 */
exports.execute = function(params, options)
{
    const masked = (options.m || options.mask);
    const count  = options.q || 1;

    for (var i = 0; i < count; i++) {
        console.info(cpf.generate(masked));
    }
};
