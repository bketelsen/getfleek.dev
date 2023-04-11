---
title: init
description: Initialize fleek
---

# ... init
`fleek init`

## Usage
> Initialize fleek

```shell
fleek init
```

## Description


Initialize fleek with standard configuration options.
Configuration is stored in $HOME/.local/share/fleek by default. You can change this option with the -l/--location flag.
For information on sharing configurations with multiple computers, see https://getfleek.dev/docs/multiple


## Examples

```bash
fleek init
fleek init git@github.com:your/repo
fleek init -l .local/share/fleek
fleek init -a

```

## Flags
|Flag|Usage|
|----|-----|
|`-a, --apply`|apply configuration immediately after cloning|
|`-f, --force`|overwrite existing configuration files|
|`--level none`|bling level: none,`low`,`default`,`high` (default "default")|
|`-l, --location string`|location of fleek repository, relative to home (default ".local/share/fleek")|


---
**Generated on 11 April 2023**
