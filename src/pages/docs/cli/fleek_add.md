---
title: "fleek add"
description: "fleek add"
---
## fleek add

Add a new package or program to your configuration

### Synopsis

Add a new package or program to your configuration.
Use the `--program` flag to specify a program which can also be configured by nix.

```shell
fleek add [package] [package] ... [flags]
```

### Examples

```shell
fleek add --apply neovim
fleek add emacs

```

### Options

```shell
  -a, --apply   apply configuration after adding
  -h, --help    help for add
```

### Options inherited from parent commands

```shell
  -q, --quiet     suppress logs
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek](/docs/cli/fleek/)  - Fleek makes nix friendly
