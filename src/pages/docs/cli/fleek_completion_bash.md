---
title: bash
description: Generate the autocompletion script for bash
---

# ... completion bash
`fleek completion bash`

## Usage
> Generate the autocompletion script for bash

```shell
fleek completion bash
```

## Description


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



## Flags
|Flag|Usage|
|----|-----|
|`--no-descriptions`|disable completion descriptions|


---
**Generated on 10 April 2023**
