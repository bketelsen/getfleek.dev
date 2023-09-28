---
title: error during batCache step
description: "error during batCache step"
---

## Description

Running `fleek apply` shows:

```
❯ fleek apply
  Activating batCache
  error: unexpected argument '--build' found
  
    note: to pass '--build' as a value, use '-- --build'
  
  Usage: bat <FILE>...
  
  For more information, try '--help'.
    ERROR
    ERROR   Error: exit status 2
    ERROR
```

## Fix

Make sure there is not a directory or file named `cache` in your home directory. This is a [known issue](https://github.com/sharkdp/bat/issues/1726) in `bat`.
