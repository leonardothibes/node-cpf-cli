'use strict';

const help   = require('../../../lib/command/help'),
      assert = require('unit.js');

describe('Command Help', function()
{
    it('Show Help', function(done)
    {
        console.info = function(output)
        {
            assert.string(output).isNotEmpty();
        };

        help.execute();
        done();
    });
});
