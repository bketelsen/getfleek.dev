---
title: Homebrew
description: Tune up your Homebrew installation.
---

The [Homebrew](https://brew.sh) version of Fleek is a collection of Homebrew packages and corresponding configs that we've found useful. You can install it by running the following command:

```shell
curl --proto '=https' --tlsv1.2 -sSf -L https://brew.getfleek.dev/s/fleek | bash -s -- high
```

Replace `high` with your desired bling level. See the [Bling](/docs/bling) section for more information.

## Behind the Scenes

The [installation script](https://github.com/bketelsen/fleekgenbrew/blob/main/static/fleek) does the following:

- Checks for Homebrew installation
- Downloads a tarball of configuration files and a Brewfile
- Extracts the tarball to `~/.fleek`
- Installs Homebrew packages from the Brewfile
- Uses `rsync` to copy configuration files from `~/.fleek/configs` to `$HOME`, skipping files that already exist
- Adds a line to your `.zshrc` or `.bashrc` to source Fleek's `init.sh` file