import { Env } from './env';

class NodeBinaryPath extends Env<string> { id = () => 'node' }

describe(Env.name, () => {
    it('captures the value of the referenced parameter', () => {
        expect(new NodeBinaryPath().value()).toEqual(expect.stringContaining('node'));
    })
});