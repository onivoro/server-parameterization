# server-parameterization

```
import { Parameter } from '../core/parameter.class';
import { Arg } from '../core/arg.decorator';
@Arg(Number)
export class CatCount extends Parameter<number> {
}
```

```
import { Parameter } from '../core/parameter.class';
import { Arg } from '../core/arg.decorator';
@Arg(String)
export class CatColor extends Parameter<string> {
}
```

```
import { Parameter } from '../core/parameter.class';
import { Env } from '../core/env.decorator';
@Env(Date)
export class CatDob extends Parameter<Date> {
}
```

```
import { CatCount } from './cat-count.parameter';
import { CatColor } from './cat-color.parameter';
import { CatDob } from './cat-dob.parameter';

export class CatService {
  constructor(
    private readonly count: CatCount,
    private readonly color: CatColor,
    private readonly dob: CatDob
  ) {}

  meow() {
    return `i have ${this.count} ${this.color} stripes and i was born on ${this.dob}`;
  }
}

```

```
console.log(new CatService(
    new CatCount(),
    new CatColor(),
    new CatDob()
).meow())
```
