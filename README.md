# CPF-CLI [![npm](http://img.shields.io/npm/v/node-cpf-cli.svg)](https://www.npmjs.com/package/node-cpf-cli) ![Downloads](https://img.shields.io/npm/dm/node-cpf-cli.svg) [![Build Status](https://secure.travis-ci.org/leonardothibes/node-cpf-cli.png)](http://travis-ci.org/leonardothibes/node-cpf-cli) [![Package Quality](http://npm.packagequality.com/shield/node-cpf-cli.svg)](http://packagequality.com/#?package=node-cpf-cli) [![License](https://img.shields.io/npm/l/node-cpf-cli.svg)](LICENSE)

Gerador e validador de CPF via linha de comando.

Installation
------------

```bash
npm install node-cpf-cli -g
```

Examples
--------

* [Validate](#validate)
* [Generate](#generate)

Validate
--------

```bash
cpf validate 77714774614
```

or 

```bash
cpf validate 777.147.746-14
```

Generate
--------

```bash
cpf generate # returns '77714774614'
```

or 

```bash
cpf generate -m # returns '777.147.746-14'
```

Test and development
--------------------

* Install external dependencies: **``npm install``**
* Run the test suite without coverage: **``npm test``**
* Run the test suite with coverage: **``npm run testdox``**

How to Contribute
-----------------

* Open a pull request or an issue about what you want to implement / change. We're glad for any help!
* Please be aware that we'll only accept fully tested code.

Contributors
------------

 * **Leonardo Thibes <leonardothibes@gmail.com>**

LICENSE
=======

Copyright (c) 2017 Leonardo Thibes

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
