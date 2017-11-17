'use strict';

const version  = require('../../../lib/command/version'),
      packInfo = require('../../../package.json'),
      assert   = require('unit.js');

describe('Command Version', function()
{
    it('Show Version', function(done)
    {
        console.info = function(output)
        {
            assert.string(output).isEqualTo(packInfo.version);
        };

        version.execute();
        done();
    });
});
