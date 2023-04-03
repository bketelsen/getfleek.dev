---
title: "fleek remote add"
description: "fleek remote add"
---
## fleek remote add

Configure fleek to use a remote git repository

### Synopsis

Configure fleek to use a remote git repository

```
fleek remote add [flags]
```

### Examples

```
fleek remote add git@github.com:your/fleeks
fleek remote add -n origin git@github.com:your/fleeks

```

### Options

```
  -h, --help          help for add
  -n, --name string   git reference name of the remote (default "origin")
```

### Options inherited from parent commands

```
  -q, --quiet     suppress logs
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek remote](/docs/cli/fleek_remote/)	 - Manage or show the remote git repository

