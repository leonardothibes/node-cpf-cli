'use strict';

const cpf = require('node-cpf');

/**
 * Verifica se um CPF é válido.
 *
 * @param {Array}  params
 * @param {Object} options
 */
exports.execute = function(params, options)
{
    if (params.length === 0) {
        return;
    }

    let status;

    params.forEach(function(input)
    {
        status = cpf.validate(input) ? 'VALID' : 'INVALID';
        console.info(input + ': ' + status);
    });
};
