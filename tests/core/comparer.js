const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const matchobj = require('./comparer.js');

describe("Comparer", () => {
    describe("comparison()", () => {
        context("plain comparison", () => {
            it.skip("actual=string, expected=same string", () => {

            });

            it.skip("actual=string, expected=different string", () => {

            });

            it.skip("actual=string, expected=0", () => {

            });

            it.skip("actual=string, expected=number", () => {

            });

            it.skip("actual=string, expected=null", () => {

            });

            it.skip("actual=string, expected=undefined", () => {

            });

            it.skip("actual=string, expected=object", () => {

            });

            it.skip("actual=string, expected=array", () => {

            });

            it.skip("actual=number, expected=same number", () => {

            });

            it.skip("actual=number, expected=different number", () => {

            });

            it.skip("actual=boolean, expected=same boolean", () => {

            });

            it.skip("actual=boolean, expected=different boolean", () => {

            });

            it.skip("actual=null, expected=null", () => {

            });

            it.skip("actual=undefined, expected=undefined", () => {

            });

            it.skip("actual=0, expected=null", () => {

            });

            it.skip("actual=null, expected=undefined", () => {

            });

            it.skip("actual={}, expected=undefined", () => {

            });

            it.skip("actual={}, expected=null", () => {

            });

            it.skip("actual=[], expected=undefined", () => {

            });

            it.skip("actual=[], expected=null", () => {

            });

            it.skip("actual=simple object, expected=same simple object", () => {

            });

            it.skip("actual=simple object, expected=same simple object but with a subset of keys", () => {

            });

            it.skip("actual=simple object, expected={}", () => {

            });

            it.skip("actual=simple object, expected=different simple object", () => {

            });

            it.skip("actual=simple array, expected=same simple array", () => {

            });

            it.skip("actual=simple array, expected=different simple array", () => {

            });

            it.skip("actual=object containing objects/arrays/primitives, expected=same object", () => {

            });

            it.skip("actual=object containing objects/arrays/primitives, expected=same object but with a subset of keys", () => {

            });

            it.skip("actual=object containing objects/arrays/primitives, expected={}", () => {

            });

            it.skip("actual=object containing objects/arrays/primitives, expected=different object", () => {

            });
        });

        context("comparison with special expected objects", () => {
            context("$typeof", () => {
                it.skip("expected=correct $typeof", () => {

                });

                it.skip("expected=incorrect $typeof", () => {

                });

                it.skip("actual=array, expected=$typeof array", () => {

                });

                it.skip("actual=non-array, expected=$typeof array", () => {

                });
            });

            context("$regex", () => {
                it.skip("actual=non-string, expected=$regex", () => {

                });

                it.skip("expected=correct $regex in /regex/ form", () => {

                });

                it.skip("expected=incorrect $regex in /regex/ form", () => {

                });

                it.skip("expected=correct $regex in string form", () => {

                });

                it.skip("expected=incorrect $regex in string form", () => {

                });
            });

            context("$contains", () => {
                it.skip("actual=non-string, expected=$contains", () => {

                });

                it.skip("expected=correct $contains", () => {

                });

                it.skip("expected=incorrect $contains", () => {

                });
            });

            context("$max", () => {
                it.skip("actual=non-number, expected=$max", () => {

                });

                it.skip("expected=correct $max", () => {

                });

                it.skip("expected=incorrect $max", () => {

                });
            });

            context("$min", () => {
                it.skip("actual=non-number, expected=$min", () => {

                });

                it.skip("expected=correct $min", () => {

                });

                it.skip("expected=incorrect $min", () => {

                });
            });

            context("$code", () => {
                it.skip("actual=non-function or string, expected=$code", () => {

                });

                it.skip("expected=$code function that returns true", () => {
                    // use actual var passed in
                });

                it.skip("expected=$code function that returns false", () => {
                    // use actual var passed in
                });

                it.skip("expected=$code function that throws an exception", () => {
                    // use actual var passed in
                });

                it.skip("expected=$code string that returns true", () => {
                    // use actual var passed in
                });

                it.skip("expected=$code string that returns false", () => {
                    // use actual var passed in
                });

                it.skip("expected=$code string that throws an exception", () => {
                    // use actual var passed in
                });

                it.skip("expected=$code string that evaluates true", () => {
                    // use actual var passed in
                });

                it.skip("expected=$code string that evaluates false", () => {
                    // use actual var passed in
                });
            });

            context("$length", () => {
                it.skip("actual=non-object, expected=$length", () => {

                });

                it.skip("actual=object with no length property, expected=$length", () => {

                });

                it.skip("expected=correct $length", () => {

                });

                it.skip("expected=incorrect $length", () => {

                });
            });

            context("$maxLength", () => {
                it.skip("actual=non-object, expected=$maxLength", () => {

                });

                it.skip("actual=object with no length property, expected=$maxLength", () => {

                });

                it.skip("expected=correct $maxLength", () => {

                });

                it.skip("expected=incorrect $maxLength", () => {

                });
            });

            context("$minLength", () => {
                it.skip("actual=non-object, expected=$minLength", () => {

                });

                it.skip("actual=object with no length property, expected=$minLength", () => {

                });

                it.skip("expected=correct $minLength", () => {

                });

                it.skip("expected=incorrect $minLength", () => {

                });
            });

            context("$subset", () => {
                it.skip("actual=non-array, expected=$subset", () => {

                });

                it.skip("actual=array of primitives, expected=correct $subset", () => {

                });

                it.skip("actual=array of primitives, expected=incorrect $subset", () => {

                });

                it.skip("actual=array of objects/arrays/primitives, expected=correct $subset", () => {

                });

                it.skip("actual=array of objects/arrays/primitives, expected=incorrect $subset", () => {

                });
            });

            context("$anyOrder", () => {
                it.skip("actual=non-array, expected=$anyOrder", () => {

                });

                it.skip("actual=array of primitives, expected=correct $anyOrder", () => {

                });

                it.skip("actual=array of primitives, expected=incorrect $anyOrder", () => {

                });

                it.skip("actual=array of objects/arrays/primitives, expected=correct $anyOrder", () => {

                });

                it.skip("actual=array of objects/arrays/primitives, expected=incorrect $anyOrder", () => {

                });
            });

            context("$exact", () => {
                it.skip("actual=non-object, expected=$exact", () => {

                });

                it.skip("actual=simple object, expected=$exact with same simple object", () => {

                });

                it.skip("actual=simple object, expected=$exact with same simple object but with subset of keys", () => {
                    // should fail
                });

                it.skip("actual=simple object, expected=$exact with different simple object", () => {

                });

                it.skip("actual=object containing objects/arrays/primitives, expected=$exact with same object", () => {

                });

                it.skip("actual=object containing objects/arrays/primitives, expected=$exact with same object but with subset of keys", () => {
                    // should fail
                });

                it.skip("actual=object containing objects/arrays/primitives, expected=$exact with different object", () => {

                });
            });

            context("$every", () => {
                it.skip("actual=non-array, expected=$every", () => {

                });

                it.skip("actual=array of primitives, expected=correct $every", () => {

                });

                it.skip("actual=array of primitives, expected=incorrect $every", () => {

                });

                it.skip("actual=array of objects/arrays/primitives, expected=correct $every", () => {

                });

                it.skip("actual=array of objects/arrays/primitives, expected=incorrect $every", () => {

                });
            });

            context("multiple constraints in one special expected object", () => {
                it.skip("expected=multiple contrains that are correct", () => {

                });

                it.skip("expected=multiple contrains where one is incorrect", () => {

                });
            });
        });
    });

    describe("compareObj()", () => {
        it.skip("takes in an object and doesn't edit it", () => {

        });
    });

    describe("compareJson()", () => {
        it.skip("takes in json and doesn't edit it", () => {

        });

        it.skip("handles malformed json", () => {

        });
    });

    describe("hasErrors()", () => {
        it.skip("returns false on a primitive", () => {

        });

        it.skip("returns false on a simple object", () => {

        });

        it.skip("returns false on a simple array", () => {

        });

        it.skip("returns true when there are errors in a complex object", () => {
            // sometimes have $comparerNode in place of a value, sometimes don't
        });

        it.skip("returns false when there are no errors in a complex object", () => {
            // sometimes have $comparerNode in place of a value, sometimes don't
        });
    });

    describe("print()", () => {
        it.skip("prints a null", () => {

        });

        it.skip("prints an undefined", () => {

        });

        it.skip("prints a string", () => {

        });

        it.skip("prints a number", () => {

        });

        it.skip("prints a boolean", () => {

        });

        it.skip("prints an empty object", () => {

        });

        it.skip("prints an empty array", () => {

        });

        it.skip("prints a simple object", () => {

        });

        it.skip("prints a simple array", () => {

        });

        it.skip("prints a complex object containing objects/arrays/primitives and that contains errors", () => {
            // sometimes have $comparerNode in place of a value, sometimes don't
        });

        it.skip("prints a complex object containing objects/arrays/primitives and that doesn't contain errors", () => {
            // sometimes have $comparerNode in place of a value, sometimes don't
        });
    });
});