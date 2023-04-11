---
title: zsh
description: Generate the autocompletion script for zsh
---

# ... completion zsh
`fleek completion zsh`

## Usage
> Generate the autocompletion script for zsh

```shell
fleek completion zsh
```

## Description


Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it.  You can execute the following once:

	echo "autoload -U compinit; compinit" >> ~/.zshrc

To load completions in your current shell session:

	source <(fleek completion zsh)

To load completions for every new session, execute once:

#### Linux:

	fleek completion zsh > "${fpath[1]}/_fleek"

#### macOS:

	fleek completion zsh > $(brew --prefix)/share/zsh/site-functions/_fleek

You will need to start a new shell for this setup to take effect.



## Flags
|Flag|Usage|
|----|-----|
|`--no-descriptions`|disable completion descriptions|


---
**Generated on 11 April 2023**
