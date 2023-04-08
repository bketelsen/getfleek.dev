---
title: "fleek search"
description: "fleek search"
---
## fleek search

Search the package repository

### Synopsis

Search the package repository.
On first run, `search` will download a local copy of the nix packages index in JSON format.

Update the local package cache by using the `--update` flag.

```shell
fleek search <package> [flags]
```

### Examples

```shell
fleek search neovim
fleek search --update emacs

```

### Options

```shell
  -f, --fuzzy    search name and description
  -h, --help     help for search
  -u, --update   update the package cache
```

### Options inherited from parent commands

```shell
  -q, --quiet     suppress logs
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek](/docs/cli/fleek/)  - Fleek makes nix friendly
