---
title: "fleek completion bash"
description: fleek completion bash

---
## fleek completion bash

Generate the autocompletion script for bash

### Synopsis

Generate the autocompletion script for the bash shell.

This script depends on the 'bash-completion' package.
If it is not installed already, you can install it via your OS's package manager.

To load completions in your current shell session:

	source <(fleek completion bash)

To load completions for every new session, execute once:

#### Linux:

	fleek completion bash > /etc/bash_completion.d/fleek

#### macOS:

	fleek completion bash > $(brew --prefix)/etc/bash_completion.d/fleek

You will need to start a new shell for this setup to take effect.


```
fleek completion bash
```

### Options

```
  -h, --help              help for bash
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek completion](fleek_completion/)	 - Generate the autocompletion script for the specified shell

