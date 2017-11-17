'use strict';

/**
 * Gerencia os comandos do usuário e encaminha para a ação adequada.
 *
 * @param {Object} args
 * @param {Array}  args.commands Composição dos comandos e argumentos.
 * @param {Array}  args.options  Opçoes modificadoras.
 * @param {Array}  args.input    Input original.
 */
exports.handle = function(args)
{
    let input = [],
        name  = '';

    try {
        if (args.commands[0]) {
            name  = 'validate';
            input = args.commands;
        } else {
            name = 'generate';
        }

        const command = require('./command/' + name);
        command.execute(input, args.options);
    } catch (e) {
        throw {
            code   : 'NOT_FOUND',
            message: 'Comando não encontrado',
        };
    }
};
