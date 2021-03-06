const StepNode = require('./stepnode.js');

/**
 * Represents a plain step block (non-multi-level) within a Tree
 * NOTE: Multi-level step blocks are implemented as function declaration/call pairs under the hood
 */
class StepBlockNode extends StepNode {
    constructor() {
        super();

        this.steps = [];         // array of StepNode that are part of this StepBlockNode

        /*
        OPTIONAL

        this.isSequential = false;     // true if this StepBlockNode is preceded with a ..
        */
    }
}
module.exports = StepBlockNode;
