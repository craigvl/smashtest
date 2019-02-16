'use strict';

const webdriverio = require('webdriverio');
const glob = require('glob');
const readFiles = require('read-files-promise');
const util = require('util');
const Tree = require('./tree.js');

var tree = new Tree();

if(process.argv.length < 3) {
    throw "No files inputted";
}

process.argv.forEach(function(val, index, array) { // when index is 2, val is the filename glob that's passed in from command line
    if(index == 2) {
        glob(val, function(err, filenames) { // generates array of filenames covered by globs (directories/wildcards) in val
            if(err) {
                throw err;
            }

            if(!filenames) {
                throw "Bad filename(s)";
            }

            readFiles(filenames, {encoding: 'utf8'})
                .then(function(fileBuffers) {
                    if(fileBuffers.length == 0) {
                        throw "No files found";
                    }

                    for(var i = 0; i < fileBuffers.length; i++) {
                        tree.parseIn(fileBuffers[i], filenames[i]);
                    }

                    // TODO: after parsing in all files into the tree...
                    // - Hook up function calls to their implementations, throwing errors if need be.
                    //    Create a new function under Tree for this purpose.
                    // - In a line that's {var1}=Step1, {var2}=Step2, do not accept functions in Step1/2/etc.
                    // - Hook up Must test and corresponding functions too
                    // - Hook up hooks, like After every X


                    // TODO: run the tests here





                    // TODO: get rid of this
                    print(tree.root);
                })
                .catch(function(err) {
                    console.error(err);
                });
        });
    }
});

/**
 * Outputs obj to console.log
 */
function print(obj) {
    console.log(util.inspect(obj, false, null, true));
}
