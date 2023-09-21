---
title: flake does not provide attribute
description: "flake does not provide attribute"
---

## Description

Running `nix run "https://getfleek.dev/latest.tar.gz" -- update` shows:

```
nix run "https://getfleek.dev/latest.tar.gz" -- update
...
 [i]  Updating flake sources
Everything up-to-date
error: flake '...' does not provide attribute 'apps.aarch64-darwin.fleek', 
```

## Fix

Update your flake templates with the latest version.

```
nix run "https://getfleek.dev/latest.tar.gz" -- write
```

Then run the update again:

```
nix run "https://getfleek.dev/latest.tar.gz" -- update
```

Now you can apply the changes:

```
nix run "https://getfleek.dev/latest.tar.gz" -- apply
```