---
title: search
description: Search the package repository
---

# ... search
`fleek search`

## Usage
> Search the package repository

```shell
fleek search <package>
```

## Description


Search the package repository.
On first run, `search` will download a local copy of the nix packages index in JSON format.

Update the local package cache by using the `--update` flag.


## Examples

```bash
fleek search neovim
fleek search --update emacs

```

## Flags
|Flag|Usage|
|----|-----|
|`-f, --fuzzy`|search name and description|
|`-u, --update`|update the package cache|


---
**Generated on 10 April 2023**
