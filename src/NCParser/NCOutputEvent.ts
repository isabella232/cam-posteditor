import { NCEvent, NCStackFrame } from './NCEvent';

export default class NCOutputEvent implements NCEvent {
    readonly type: string = 'output';

    output: string;

    callstack: NCStackFrame[];

    constructor(output: string) {
        this.output = output;
        this.callstack = [];
    }
}
