---
title: add
description: Add a new package or program to your configuration
---

# ... add
`fleek add`

## Usage
> Add a new package or program to your configuration

```shell
fleek add [package] [package] ...
```

## Description


Add a new package or program to your configuration.
Use the `--program` flag to specify a program which can also be configured by nix.

## Examples

```bash
fleek add --apply neovim
fleek add emacs

```

## Flags
|Flag|Usage|
|----|-----|
|`-a, --apply`|apply configuration after adding|


---
**Generated on 10 April 2023**
