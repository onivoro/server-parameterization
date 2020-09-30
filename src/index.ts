import { Arg } from './lib/arg';
export { Env } from './lib/env';
export { Parameter } from './lib/parameter';

class All extends Arg<string> { id = () => 'things' }

console.log(new All().value())