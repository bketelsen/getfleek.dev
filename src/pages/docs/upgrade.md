---
title: Upgrade 
description: How to upgrade fleek.
---

Fleek is self-managed as of `v0.9.0`. If you have installed fleek using a deprecated method, you will need to upgrade to the new method.

---


## Upgrade Fleek

Rather than downloading and installing Fleek, we're going to use the power of `nix` to run it directly from GitHub. This will let Fleek manage itself, and you'll always have the latest version.

Upgrade your configurations to the latest version:


```shell
nix run github:ublue-os/fleek -- update
```

Now let's apply your configuration:

```shell
nix run github:ublue-os/fleek -- apply
```
It will take a bit to download and install everything, but when it's done you should see something like this:
       
```shell
... more text above this ...
Activating onFilesChange
Activating reloadSystemd
 [✓]  Operation completed successfully
```

## Removing Deprecated Installation Options


### Nix Profile (Deprecated)

If you added Fleek to your default nix profile, you can remove it with these command:

```bash
nix profile list
```

You'll see a list of installed programs. Note the line number of the fleek installation. Then run:

```bash
nix profile remove <line number of fleek>
```


### GitHub Releases (Deprecated)

Remove the `fleek` binary from your system:

```shell
rm /usr/local/bin/fleek
```

Replace the path with the path to your fleek binary if it's not in `/usr/local/bin`.

### Homebrew (Deprecated)

If you used Homebrew to install Fleek, you can remove it with this command:

```shell
brew remove fleek
 ```