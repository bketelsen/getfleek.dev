---
title: "fleek remove"
description: "fleek remove"
---
## fleek remove

Remove a package or program from your configuration

### Synopsis

Remove a package or program from your configuration.
Use the `--program` flag to specify a program which can also be configured by nix.

```
fleek remove [package] [package] ... [flags]
```

### Examples

```
fleek remove emacs htop
fleek remove --apply neovim

```

### Options

```
  -a, --apply   apply configuration after removing
  -h, --help    help for remove
```

### Options inherited from parent commands

```
  -q, --quiet     suppress logs
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek](/docs/cli/fleek/)	 - Fleek makes nix friendly
