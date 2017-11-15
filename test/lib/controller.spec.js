'use strict';

const controller = require('../../lib/controller'),
      assert     = require('unit.js');

const commands = [
    ['generate'],
    ['generate', '-m'],
    ['generate', '--mask'],
    ['validate', '15736318768'],
    ['validate', '157.363.187-68'],
];

describe('Controller', function()
{
    commands.forEach(function(command)
    {
        it('Handle Success: [' + command + ']', function(done)
        {
            console.info = function() {};

            controller.handle({
                options : {},
                commands: commands,
                input   : commands,
            });

            done();
        });

        it('Command Not Found', function(done)
        {
            try {
                const commands = ['invalid'];
                controller.handle({
                    options : {},
                    commands: commands,
                    input   : commands,
                });
            } catch (e) {
                assert
                    .object(e)
                    .hasProperty('code', 'NOT_FOUND')
                    .hasProperty('message', 'Comando não encontrado')
                ;
                done();
            }
        });
    });
});
