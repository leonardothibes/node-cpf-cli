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
    try {
        const command = require('./command/' + args.commands[0]);
        command.execute(args.commands.slice(1), args.options);
    } catch (e) {
        throw {
            code   : 'NOT_FOUND',
            message: 'Comando não encontrado: ' + args.commands[0],
        };
    }
};
