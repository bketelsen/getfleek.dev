---
title: system not found
description: "system not found"
---

## Description

Running `fleek apply` shows:

```
❯ fleek apply
 [*]  Apply fleek configuration
  ERROR
  ERROR   Error: system not found
  ERROR
```

## Fix

Double check the hostname of the system as well as the hostname for the system in the `~/.fleek.yaml` file.

```
hostname

grep hostname ~/.fleek.yaml
```