---
title: Devbox
description: Tune up your Devbox Global Profile.
---

With the latest release of [devbox](https://www.jetpack.io/devbox/), you can now import a remote configuration into your devbox global profile. We partnered with the Devbox team to make it easy to get a nicely-tuned configuration with minimal effort.

## Install Devbox

Follow the instructions in the [devbox installation docs](https://www.jetpack.io/devbox/docs/installing_devbox/) to install devbox.

## Import a Remote Configuration

Once you have devbox installed, you can import a remote configuration into your devbox global profile.

```shell
devbox global pull [URL]
```

We've made fleek configurations available at https://devbox.getfleek.dev/{level} You can import a configuration by running the following command:

```shell
devbox global pull https://devbox.getfleek.dev/high
```

## Start the Devbox Global Shell

Once you've imported a configuration, you can set your shell configuration to automatically load the devbox global shell.

```shell
devbox global run install-hook-zsh
```

or

```shell
devbox global run install-hook-bash
```

There are a few other convenience scripts bundled with the Devbox version of Fleek. You can see them by running `devbox global run` with no arguments.

