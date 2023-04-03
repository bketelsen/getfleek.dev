---
title: "fleek init"
description: "fleek init"
---
## fleek init

Initialize fleek

### Synopsis

Initialize fleek with standard configuration options.
If `--clone` is set, an existing Fleek configuration will be cloned from that repository.


```
fleek init [flags]
```

### Examples

```
fleek init
fleek init -c git@github.com:you/fleeks
fleek init -a -c git@github.com:you/fleeks

```

### Options

```
  -a, --apply             apply configuration immediately after cloning
  -c, --clone string      address of existing fleek repository
  -f, --force             overwrite existing configuration files
  -h, --help              help for init
  -l, --location string   location of fleek repository, relative to home (default ".config/home-manager")
```

### Options inherited from parent commands

```
  -q, --quiet     suppress logs
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek](/docs/cli/fleek/)	 - Fleek makes nix friendly

