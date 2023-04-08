---
title: "fleek completion zsh"
description: "fleek completion zsh"
---
## fleek completion zsh

Generate the autocompletion script for zsh

### Synopsis

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it.  You can execute the following once:

```shell
echo "autoload -U compinit; compinit" >> ~/.zshrc
```

To load completions in your current shell session:

```shell
source <(fleek completion zsh); compdef _fleek fleek
```

To load completions for every new session, execute once:

#### Linux

```shell
fleek completion zsh > "${fpath[1]}/_fleek"
```

#### macOS

```shell
fleek completion zsh > $(brew --prefix)/share/zsh/site-functions/_fleek
```

You will need to start a new shell for this setup to take effect.

```shell
fleek completion zsh [flags]
```

### Options

```shell
  -h, --help              help for zsh
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```shell
  -q, --quiet     suppress logs
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek completion](/docs/cli/fleek_completion/)  - Generate the autocompletion script for the specified shell
