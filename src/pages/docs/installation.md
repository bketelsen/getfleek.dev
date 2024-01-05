---
title: Installation
description: How to install fleek.
---

Fleek has only one dependency: [Nix](https://nixos.org/).

---

## Prerequisites

### Install Nix

We highly recommend the [Determinate Systems Installer](https://zero-to-nix.com/start/install), but any `nix` installer is good.

```shell
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
```

### Enable Flakes

After Nix is installed you need to enable [flakes and the nix command](https://nixos.wiki/wiki/Flakes). This is already done if you use the Determinate Systems Installer. Otherwise, it can be as simple as this:

```shell
mkdir -p ~/.config/nix
echo "experimental-features = nix-command flakes" >> ~/.config/nix/nix.conf
```

## Create Your Initial Fleek Configuration

We're going to use the power of Nix flakes and the convenience of [FlakeHub](https://flakehub.com) to bootstrap the latest version of Fleek without installing it locally.

```shell
nix run "https://getfleek.dev/latest.tar.gz" -- init
```

This will create your configuration file and symlink it to `$HOME/.fleek.yml`. Open it with your favorite editor and take a look.

Make any changes to the `~/.fleek.yml` file you want... we recommend Bling Level `high` for the best experience.  

Now let's apply your configuration:

```shell
nix run "https://getfleek.dev/latest.tar.gz" -- apply
```

It will take a bit to download and install everything, but when it's done you should see something like this:
       
```shell
... more text above this ...
Activating onFilesChange
Activating reloadSystemd
 [✓]  Operation completed successfully
```

After running your first `init` and `apply`, you can use the `fleek` command to manage your fleek configuration.

```shell
fleek --help
```

{% callout type="warning" title="Possible Errors: Existing Files" %}
You might see an error telling you that the installation failed because a file already exists. Fleek will create new shell configuration files for you, but it won't overwrite existing ones. You'll need to move or delete the existing files before Fleek can install the new ones. Try `mv ~/.bashrc ~/.bashrc.bak` (substituting the appropriate file names) and then run the apply command again.

{% /callout %}

*What happened here?* We just installed Nix Home Manager, configured it with your preferences, and applied it to your system. 

You may need to close and re-open your terminal or even log out to see the changes.

## Deprecated Installation Options

These options are deprecated and will be removed in the next release. Fleek is now self-managing and should be installed with the bootstrap instructions above.

{% callout type="warning" title="Unreachable Code Here" %}
If you use any of these deprecated installation options, the version of Fleek you install will be listed after the version of Fleek that gets installed when you apply your configuration. This is by design to ensure that Fleek can update itself.

{% /callout %}

### Nix Profile (Deprecated)

You can install Fleek to your default nix profile with this command:

```bash
nix profile install github:ublue-os/fleek
```

This will add Fleek to your default nix profile (don't worry if you don't know what this means yet), which will be available in your $PATH.

### GitHub Releases (Deprecated)

You can also download fleek from the [GitHub releases](https://github.com/ublue-os/fleek/releases) link and move it somewhere in your $PATH.

The gzip'd tarball contains a binary, `fleek`, a `man` directory, and a `completions` directory. You can skip the `man` and `completions` directories if you don't need them.

Be sure to move `fleek` to somewhere in your $PATH. If you're not sure where that is, try `echo $PATH` to see what directories are in your path.

### Homebrew (Deprecated)

If you have Homebrew installed, you can use the Fleek tap:

```shell
brew tap ublue-os/homebrew-tap
brew install fleek
```
