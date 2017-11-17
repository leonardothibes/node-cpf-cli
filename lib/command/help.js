/* jshint -W109 */

'use strict';

const info = require('../../package.json');

/**
 * Exibe o help do comando.
 */
exports.execute = function()
{
    let output = info.description + ' (' + info.name + ' - ' + info.version + ')';

    output += "\n";
    output += "Uso: cpf [CPF para validar]|<command> [options]\n";
    output += "\n";
    output += "  -m               Inclui máscara na geração de CPFs\n";
    output += "  -q               Define a quantidade de CPFs a serem gerados\n";
    output += "\n";
    output += "Para maiores informações: https://www.npmjs.com/package/node-cpf-cli";

    console.info(output);
};
