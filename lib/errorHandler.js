'use strict';

/**
 * Imprime erros de forma amigável.
 *
 * @param {Object} error
 * @param {String} error.code    Código do erro.
 * @param {String} error.message Mensagem de erro.
 */
exports.print = function(error)
{
    console.log(error);
};
