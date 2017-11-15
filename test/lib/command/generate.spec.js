'use strict';

const command = require('../../../lib/command/generate'),
      assert  = require('unit.js'),
      cpf     = require('node-cpf');

describe('Command Generate', function()
{
    it('Generate UnMasked 1x', function(done)
    {
        console.info = function(output)
        {
            assert.bool(cpf.validate(output)).isTrue();
        };

        command.execute([], {});
        done();
    });

    it('Generate UnMasked 3x', function(done)
    {
        var count = 1;
        console.info = function(output)
        {
            assert.bool(cpf.validate(output)).isTrue();
        };

        command.execute([], {c: 3});
        done();
    });
});
