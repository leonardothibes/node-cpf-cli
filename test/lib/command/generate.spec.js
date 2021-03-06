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
            assert.bool(cpf.isMasked(output)).isFalse();
        };

        command.execute([], {});
        done();
    });

    it('Generate Masked 1x', function(done)
    {
        console.info = function(output)
        {
            assert.bool(cpf.validate(output)).isTrue();
            assert.bool(cpf.isMasked(output)).isTrue();
        };

        command.execute([], {m: true});
        done();
    });

    it('Generate UnMasked 3x', function(done)
    {
        console.info = function(output)
        {
            assert.bool(cpf.validate(output)).isTrue();
            assert.bool(cpf.isMasked(output)).isFalse();
        };

        command.execute([], {q: 3});
        done();
    });

    it('Generate UnMasked 3x', function(done)
    {
        console.info = function(output)
        {
            assert.bool(cpf.validate(output)).isTrue();
            assert.bool(cpf.isMasked(output)).isTrue();
        };

        command.execute([], {q: 3, m: true});
        done();
    });
});
