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
    * [Um sem mascara](#um-sem-mascara)
    * [Um com mascara](#um-com-mascara)
    * [Multiplos sem mascara](#multiplos-sem-mascara)
    * [Multiplos com mascara](#multiplos-com-mascara)
* [Generate](#generate)
    * [Gerando um sem mascara](#gerando-um-sem-mascara)
    * [Gerando um com mascara](#gerando-um-com-mascara)
    * [Gerando multiplos sem mascara](#gerando-multiplos-sem-mascara)
    * [Gerando multiplos com mascara](#gerando-multiplos-com-mascara)
* [Help](#help)
* [Version](#version)

Validate
--------

Valida um ou mais CPFs na entrada do comando.

### Um sem mascara

```bash
cpf 77714774614
```

A saída do comando será

```bash
77714774614: VALID
```

### Um com mascara

```bash
cpf 777.147.746-14
```

A saída do comando será:

```bash
777.147.746-14: VALID
```

### Multiplos sem mascara

```bash
cpf 77714774614 72453169882 91760423831 123
```

A saída do comando será:

```bash
77714774614: VALID
72453169882: VALID
91760423831: VALID
123: INVALID
```

### Multiplos com mascara

```bash
cpf 777.147.746.14 724.531.698-82 917.604.238-31
```

A saída do comando será:

```bash
777.147.746.14: VALID
724.531.698-82: VALID
917.604.238-31: VALID
```

Generate
--------

Gera um ou mais CPFs válidos.

### Gerando um sem mascara

```bash
cpf
```

A saída do comando será:

```bash
77714774614
```

### Gerando um com mascara

```bash
cpf -m
```

A saída do comando será:

```bash
777.147.746-14
```

### Gerando multiplos sem mascara

```bash
cpf -q 3
```

A saída do comando será:

```bash
72039541616
19726053480
16482357008
```

### Gerando multiplos com mascara

```bash
cpf -q 3 -m
```

A saída do comando será:

```bash
720.395.416-16
197.260.534-80
164.823.570-08
```

Help
----

Exibe a mensagem de help.

```bash
cpf -h
```
```bash
cpf --help
```

```bash
cpf help
```

A saída do comando será:

```bash
Gerador e validador de CPF via linha de comando (node-cpf-cli - 1.0.0)
Uso: cpf [CPF para validar]|<command> [options]

  -m               Inclui máscara na geração de CPFs
  -q               Define a quantidade de CPFs a serem gerados
  -v|--version     Exibe o número da versão
  -h|--help        Exibe esta mensagem de help

Para maiores informações: https://www.npmjs.com/package/node-cpf-cli
```

Version
-------

Exibe a versão do utilitário.

```bash
cpf -v
```
```bash
cpf --version
```

```bash
cpf version
```

A saída do comando será:

```bash
1.0.0
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
