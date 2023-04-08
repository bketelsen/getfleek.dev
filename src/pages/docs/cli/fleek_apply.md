---
title: "fleek apply"
description: "fleek apply"
---
## fleek apply

Apply fleek configuration

### Synopsis

Apply fleek configuration by reading the ~/.fleek.yml file, updating the flake templates, and applying the changes.

Use the `--dry-run` flag to test your changes without applying them.
Use the `--push` flag to push your local changes to your git remote if one is configured.

```shell
fleek apply [flags]
```

### Examples

```shell
fleek apply
fleek apply --dry-run

```

### Options

```shell
  -d, --dry-run   dry run - don't apply configuration
  -h, --help      help for apply
```

### Options inherited from parent commands

```shell
  -q, --quiet     suppress logs
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek](/docs/cli/fleek/)  - Fleek makes nix friendly
