---
title: "fleek init"
description: "fleek init"
---
## fleek init

Initialize fleek

### Synopsis

Initialize fleek with standard configuration options.
Configuration is stored in $HOME/.local/share/fleek by default. You can change this option with the -l/--location flag.

```shell
fleek init [flags]
```

### Examples

```shell
fleek init
fleek init git@github.com:your/repo
fleek init -l .local/share/fleek
fleek init -a

```

### Options

```shell
  -a, --apply             apply configuration immediately after cloning
  -f, --force             overwrite existing configuration files
  -h, --help              help for init
      --level none        bling level: none,`low`,`default`,`high` (default "default")
  -l, --location string   location of fleek repository, relative to home (default ".local/share/fleek")
```

### Options inherited from parent commands

```shell
  -q, --quiet     suppress logs
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek](/docs/cli/fleek/)  - Fleek makes nix friendly
