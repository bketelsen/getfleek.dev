---
title: "fleek completion powershell"
description: fleek completion powershell

---
## fleek completion powershell

Generate the autocompletion script for powershell

### Synopsis

Generate the autocompletion script for powershell.

To load completions in your current shell session:

	fleek completion powershell | Out-String | Invoke-Expression

To load completions for every new session, add the output of the above command
to your powershell profile.


```
fleek completion powershell [flags]
```

### Options

```
  -h, --help              help for powershell
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek completion](fleek_completion/)	 - Generate the autocompletion script for the specified shell

