## fleek completion fish

Generate the autocompletion script for fish

### Synopsis

Generate the autocompletion script for the fish shell.

To load completions in your current shell session:

	fleek completion fish | source

To load completions for every new session, execute once:

	fleek completion fish > ~/.config/fish/completions/fleek.fish

You will need to start a new shell for this setup to take effect.


```
fleek completion fish [flags]
```

### Options

```
  -h, --help              help for fish
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
  -q, --quiet     suppress logs
  -v, --verbose   show more detailed output
```

### SEE ALSO

* [fleek completion](fleek_completion.md)	 - Generate the autocompletion script for the specified shell

