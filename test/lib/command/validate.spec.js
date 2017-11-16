'use strict';

const command = require('../../../lib/command/validate'),
      assert  = require('unit.js'),
      cpf     = require('node-cpf');

const cpfs = [
    '68457103920',
    '39086251730',
    '04319286731',
];

describe('Command Validate', function()
{
    it('Empty Params', function(done)
    {
        console.info = function(output)
        {
            assert.string(output).isEqualTo('');
        };

        command.execute([], {});
        done();
    });

    cpfs.forEach(function(input)
    {
        it('Validate UnMasked Single: ' + input, function(done)
        {
            console.info = function(output)
            {
                assert.string(output).isEqualTo(input + ': VALID');
            };

            command.execute([input], {});
            done();
        });
    });

    it('Validate Unmasked Multiple: ' + cpfs, function(done)
    {
        console.info = function(output)
        {
            assert.bool(RegExp(/^[0-9]{11}:\s{1}VALID$/).test(output)).isTrue();
        };

        command.execute(cpfs, {});
        done();
    });

    cpfs.forEach(function(input)
    {
        input = cpf.mask(input);
        it('Validate Masked Single: ' + input, function(done)
        {
            console.info = function(output)
            {
                assert.string(output).isEqualTo(input + ': VALID');
            };

            command.execute([input], {});
            done();
        });
    });

    it('Validate Masked Multiple: ' + cpfs, function(done)
    {
        var input = [];

        cpfs.forEach(function(item) {
            input.push(cpf.mask(item));
        });

        console.info = function(output)
        {
            assert.bool(RegExp(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}:\s{1}VALID$/).test(output)).isTrue();
        };

        command.execute(input, {});
        done();
    });

    it('Invalid CPF', function(done)
    {
        var input = 123;
        console.info = function(output)
        {
            assert.string(output).isEqualTo(input + ': INVALID');
        };

        command.execute([input], {});
        done();
    });
});
