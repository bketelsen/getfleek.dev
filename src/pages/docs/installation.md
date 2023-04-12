---
title: Installation
description: How to install fleek.
---

Fleek has only one dependency: [Nix](https://nixos.org/).

---

## Prerequisites

### Install Nix

We love the [Determinate Systems Installer](https://zero-to-nix.com/), but any `nix` installer is good. If you're on Fedora Silverblue [this script](https://github.com/dnkmmr69420/nix-with-selinux/blob/main/silverblue-installer.sh) is the good stuff.

### Enable Flakes

After Nix is installed you need to enable [flakes and the nix command](https://nixos.wiki/wiki/Flakes). It can be as simple as this:

```shell
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
```

## Install Fleek

## Nix Profile

You can install Fleek to your default nix profile with this command:

```bash
nix profile install github:ublue-os/fleek/main
```

This will add Fleek to your default nix profile (don't worry if you don't know what this means yet), which will be available in your $PATH.

### GitHub Releases

Next you'll need `fleek`. Download it from the [GitHub releases](https://github.com/ublue-os/fleek/releases) link and move it somewhere in your $PATH.

The gzip'd tarball contains a binary, `fleek`, a `man` directory, and a `completions` directory. You can skip the `man` and `completions` directories if you don't need them.

Be sure to move `fleek` to somewhere in your $PATH. If you're not sure where that is, try `echo $PATH` to see what directories are in your path.

### Homebrew

If you have Homebrew installed, you can use the Fleek tap:

```shell
brew tap ublue-os/homebrew-tap
brew install fleek
 ```