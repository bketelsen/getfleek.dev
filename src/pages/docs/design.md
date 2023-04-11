---
title: Design Philosophy and Use Cases
description: The reasoning behind Fleek.
---

## Why Does Fleek Exist
Fleek is designed for people who are unfamiliar with Nix and are overwhelmed by its initial learning curve. 

> Fleek intentionally hides many of Nix’s aspects to provide one streamlined workflow: usage of Nix as a standard "package manager". 

It searches, adds, removes, and updates packages and uses `home-manager` behind the scenes to manage that. And that’s it.

Users who want to continue on their Nix journey can later run `fleek eject`. Fleek will uncouple itself and leaves a pure Nix home-manager flake in it’s place that can be administered via the usual nix workflows.

## Nix Philosophy

Nix is really awesome. Once you get the hang of it, you'll have a hard time going back to anything else. But, let's face it, the learning curve is steeper than other languages.

Fleek goes against the core declarative philosophy of Nix in a way, since it abstracts all that Nix power behind a CLI tool and some YAML. We think that's a good trade-off to help people get started with the best package manager we've found yet.

## The Choice Is Not Binary

### The Red Pill 

You can use Fleek with the CLI and YAML configuration alone to manage most of the things you need in your environment:

- Installed Packages
- Paths
- Aliases

You can go beyond those options by making custom configuration changes in the `user.nix` file in your configuration directory. These changes will apply to all computers. And you can make changes specific to an individual computer in that computer's subdirectory, where there's another `user.nix` file just for that host. Those files will never be modified by Fleek, so they're a great place to add customization beyond what Fleek's simple YAML and CLI provide.

When you've grown beyond the simplicity of Fleek and you're ready for some serious customization, you can `eject` from Fleek. Once you run the `fleek eject` command, you're left with a Nix Home Manager flake that you can modify any way you'd like. Fleek removes itself from the equation leaving you with all the power of Nix.

### The Blue Pill 

Finally, you can use Fleek as a one-time generator to create a ready-to-use Nix Home Manager flake. This option generates a home-manager flake and gives you instructions on how to modify and activate it.

## Get Fleek, and Get Productive

No matter which path you choose, we built Fleek to help you along your journey. If you have ideas or suggestions, open an issue on [GitHub](https://github.com/ublue-os/fleek/issues), we love all feedback.