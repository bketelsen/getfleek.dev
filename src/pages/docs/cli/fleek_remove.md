---
title: remove
description: Remove a package or program from your configuration
---

# ... remove
`fleek remove`

## Usage
> Remove a package or program from your configuration

```shell
fleek remove [package] [package] ...
```

## Description


Remove a package or program from your configuration.
Use the `--program` flag to specify a program which can also be configured by nix.

## Examples

```bash
fleek remove emacs htop
fleek remove --apply neovim

```

## Flags
|Flag|Usage|
|----|-----|
|`-a, --apply`|apply configuration after removing|


---
**Generated on 10 April 2023**
