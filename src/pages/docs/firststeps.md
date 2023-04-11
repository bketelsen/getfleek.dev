---
title: First Steps
description: Your first steps getting started with fleek.
---

## The Red Pill and the Blue Pill

You have two choices with Fleek. You can use Fleek with a simple CLI tool and YAML file to manage your installed packages, aliases and path, or you can use Fleek as a one-time generator to create a lightly-opinionated Nix Home Manager flake for you.

If you're just getting started with Nix, or if you don't care who the Man Behind the Mirror is, we suggest the Red Pill option.

### The Red Pill - The Fleek CLI

After you've installed `fleek`, open a terminal window and run `fleek init`.

```shell
fleek init
```

This will create your configuration file and symlink it to `$HOME/.fleek.yml`. Open it with your favorite editor and take a look.

![fleek-init.gif](/fleek-init.gif)

From here you'll use the `fleek` CLI and `$HOME/.fleek.yml` to change your configurations.

### The Blue Pill - The Fleek Generator

If you're looking for a lightly opinionated Nix Home Manager flake starter, Fleek has you covered. You can either install Fleek according to the [installation instructions](/docs/installation) or you can use the power of Nix to run Fleek *without installing it*.

```bash
nix run github:ublue-os/fleek -- generate --help
```

This installs and runs Fleek right over the Internet. Check the options of the `generate` command for more details.

## Next Steps

We recommend you read through the [Core Concepts](/docs/bling) before you continue.
