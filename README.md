extendscript.prototypes
=======================


A collection of usefull prototype polyfills for extendscript (mostly taken from other sources and in some cases adapted to the extendscript environment)

Concat all individual polyfills by running:  

    npm install && grunt build

You can use it as an npm module. Run:

    npm install (--save-dev) extendscript.prototypes
    
And integrate wether one polyfill from `src/<polyfill>.jsx` or the all concatenated ones `dist/extendscript.prototypes.<version>.jsx`

There are actually polyfills for:
- Array.filter
- Array.forEach
- Array.indexOf
- Array.reduce
- Array.where
- Object.defineProperty
- String.localeCompare

The list will be improved while the demand increases.


--

Copyright (c) 2014 Fabian Moron Zirfas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
