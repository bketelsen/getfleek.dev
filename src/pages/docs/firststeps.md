---
title: First Steps
description: Your first steps getting started with fleek.
---

## The Red Pill and the Blue Pill

You have two choices with Fleek. You can use Fleek with a simple CLI tool and YAML file to manage your installed packages, aliases and path, or you can use Fleek as a one-time generator to create a lightly-opinionated Nix Home Manager flake for you.

If you're just getting started with Nix, or if you don't care who the Man Behind the Mirror is, we suggest the Red Pill option.

### The Red Pill - The Fleek CLI

After you've [bootstrapped Fleek](/docs/installation) you can use the `fleek` CLI to manage your system. You can use the `fleek` CLI to install packages, manage your aliases and path, and more.


### The Blue Pill - The Fleek Generator

If you're looking for a lightly opinionated Nix Home Manager flake starter, Fleek has you covered. You can either install Fleek according to the [installation instructions](/docs/installation) or you can use the power of Nix to run Fleek *without installing it*.

```bash
nix run "https://flakehub.com/f/ublue-os/fleek/*.tar.gz" -- generate --help
```

This installs and runs Fleek right over the Internet. Check the options of the `generate` command for more details.

## Next Steps

We recommend you read through the [Core Concepts](/docs/bling) before you continue.
