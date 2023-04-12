---
title: apply
description: Apply fleek configuration
---

# ... apply
`fleek apply`

## Usage
> Apply fleek configuration

```shell
fleek apply
```

## Description


Apply fleek configuration by reading the ~/.fleek.yml file, updating the flake templates, and applying the changes.

Use the `--dry-run` flag to test your changes without applying them.
Use the `--push` flag to push your local changes to your git remote if one is configured.


## Examples

```bash
fleek apply
fleek apply --dry-run

```

## Flags
|Flag|Usage|
|----|-----|
|`-d, --dry-run`|dry run - don't apply configuration|


---
**Generated on 12 April 2023**
