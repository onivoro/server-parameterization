# server-parameterization

```
class DbPassword extends Arg<string> { id = () => 'dbPassword' }
class DbHost extends Env<string> { id = () => 'dbHost' }
const dbConfig = {pw: new DbPassword(), host: new DbHost()};

```