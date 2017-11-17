'use strict';

const controller = require('../../lib/controller'),
      assert     = require('unit.js'),
      cpf        = require('node-cpf');

describe('Controller', function()
{
    it('Help Command', function(done)
    {
        console.info = function(output)
        {
            assert.string(output).isNotEmpty();
        };

        controller.handle({
            options : {h: true},
            commands: [],
            input   : [],
        });

        done();
    });

    it('Generate UnMasked', function(done)
    {
        console.info = function(output)
        {
            assert.bool(cpf.validate(output)).isTrue();
            assert.bool(cpf.isMaked(output)).isFalse();
        };

        controller.handle({
            options : {},
            commands: [],
            input   : [],
        });

        done();
    });

    it('Generate Masked', function(done)
    {
        console.info = function(output)
        {
            assert.bool(cpf.validate(output)).isTrue();
            assert.bool(cpf.isMaked(output)).isTrue();
        };

        controller.handle({
            options : {m: true},
            commands: [],
            input   : [],
        });

        done();
    });

    it('Validate UnMasked', function(done)
    {
        var input = '29351086712';
        console.info = function(output) {
            assert.string(output).isEqualTo(input + ': VALID');
        };

        controller.handle({
            options : {},
            commands: [input],
            input   : [],
        });

        done();
    });

    it('Validate Masked', function(done)
    {
        var input = '293.510.867-12';
        console.info = function(output) {
            assert.string(output).isEqualTo(input + ': VALID');
        };

        controller.handle({
            options : {},
            commands: [input],
            input   : [],
        });

        done();
    });
});
