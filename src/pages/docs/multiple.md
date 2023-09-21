---
title: Sharing Configurations
description: Use Fleek to share your configurations across multiple computers.
---

You can use Fleek to share your configurations across multiple computers. This is useful if you use multiple computers and want to keep your configurations in sync.

---

## Getting Started

After installing and configuring Fleek on your first computer you need to create a new git repository in order to share it with other computers.

### Initialize a Git Repository

{% callout type="warning" title="Configure Git Before Trying This" %}
These steps assume you've configured git with your name and email address. If you haven't, you'll need to do that before continuing. See [Configuring Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) for more information.

{% /callout %}

The default configuration of Fleek adds a shell alias to change directories into your configuration directory. This is useful for initializing a git repository. Use this alias to cd into your configuration directory:

```shell
fleeks
```

Or you can change directories manually:

```shell
cd ~/.local/share/fleek
```

Then initialize a git repository:

```shell
git init
git add .
git commit -m "Initial commit"
```

### Create a Repository on GitHub

Create a new repository on GitHub. You can name it whatever you want. For example, `fleek`.

Here's a shortcut to create a new repository: [New Repository](https://github.com/new)

Make a note of the repository URL. You'll need it later.

### Add a Remote

{% callout type="warning" title="Configure Your SSH Keys on Github" %}
In order for Fleek to make changes to your repository you need to configure your SSH keys on GitHub. See [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) for more information.

{% /callout %}

Add the GitHub repository as a remote:

```shell
git remote add origin git@github.com:$GITHUB_USERNAME/$REPOSITORY.git
git branch -M main
git push -u origin main
```

Replace `$GITHUB_USERNAME` with your GitHub username and `$REPOSITORY` with the name of the repository you created.

If you added a README or License file when you created the repository you'll need to pull those changes before you can push your configuration.

```shell
git pull --autostash --rebase origin main
git push -u origin main
```

## Add a New Computer

Now that you've created a shared repository you can add a new computer.

{% callout type="note" title="Tip: Use the Same Repository" %}
You should use the same repository for multiple computers. Fleek stores the configuration for each computer in a separate directory. This makes it easy to share configurations across multiple computers.

{% /callout %}

### Install Nix 

See [Installation](/docs/installation) for instructions on how to install Nix.

It is not necessary to install Fleek directly on the new computer. We'll use Nix to run Fleek without installing it, so it can be self-managed.

### Run `fleek join`

{% callout type="warning" title="Tip: Test Git First" %}
Make sure your new computer is configured for Git before trying this. See [Configuring Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) for more information.

At a minimum, you should configure your name and email address.

You should also test that you can connect to GitHub using SSH. See [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) for more information. A simple test is to run `ssh git@github.com` and see if you get a response.

{% /callout %}

Use `nix` to run `fleek join` to initialize Fleek on your new computer. Pass the URL of the repository you created earlier as an argument. This ensures that you're using the same version of fleek on all computers.

```shell
nix run "https://flakehub.com/f/ublue-os/fleek/*.tar.gz" -- join git@github.com:$GITHUB_USERNAME/$REPOSITORY.git
```

Replace `$GITHUB_USERNAME` with your GitHub username and `$REPOSITORY` with the name of the repository you created earlier.

### Run `fleek apply`

Use `nix` to run `fleek apply` to apply the configuration to your new computer.

```shell
nix run "https://flakehub.com/f/ublue-os/fleek/*.tar.gz" -- apply
```

## Set Your Configuration For Easier Sharing

You can set your configuration to make it easier to share your configuration across multiple computers.

In `$HOME/.fleek.yml` set the `git` options to do some automatic synchronizing for you.

```yaml
git:
  autocommit: true
  autopull: true
  autopush: true
```

Because Nix will ignore unstaged changes in a git repository, Fleek will automatically run `git add` when it makes changes locally.

Use the `autocommit` option to automatically stage your local changes. This will make it easier to push your changes to the remote repository.

Use the `autopull` option to automatically pull changes from the remote repository. This will make it easier to keep your local configuration up to date.

Use the `autopush` option to automatically push changes to the remote repository. This will make it easier to share your configuration with other computers.

## How it Works

Fleek creates an array of `systems` and an array of `users` in your `.fleek.yml` file that represents the computers and user login accounts that you use. The `system` is identified by the hostname of the computer, and the `user` is identified by the login username.


## Ephemeral Systems

**_New in version 0.9.25_**

If you have systems that are short-lived but share the same OS/Architecture, you can create a generic system configuration for all of them to use. Do this if you have systems where you want to use Fleek, but these systems are transient and will go away at some point. This allows you to have a shared configuration for these ephemeral systems without littering your `.fleek.yml` with system configurations that aren't permanent.

To use this feature set the environment variable `FLEEK_HOST_OVERRIDE` to the generic name you want to use for this class of systems.

If you use Github Codespaces, GitPod, or Coder, or have a similar system that generates development environments for you, you can create a generic host definition for each unique configuration you want to use.

From my real-world usage that inspired this feature, I use [Coder](https://coder.com) to create development environments for my projects using LXD. I have templates based on Ubuntu and Debian, so I can create one generic host for each of those two environments.

```
export FLEEK_HOST_OVERRIDE=ubuntudev
fleek init 
# or
fleek join git@github.com:YOU/fleek 
```

Even if the actual host name is `coder-ubuntu-bjk`, this will set the `system` in Fleek's configuration file to `ubuntudev`, which could be used by any number of ephemeral systems that come and go as I work on different projects.

I set the `FLEEK_HOST_OVERRIDE` to a different value in the Terraform template in Coder, so there's a unique one for my Debian based templates and a unique one for my Ubuntu based templates.

You can make host-specific customizations in `~/.local/share/fleek/ubuntudev/custom.nix` and they'll be applied to every system that uses the `ubuntudev` hostname override.

Additionally you can set the following variables:

- `FLEEK_USER_NAME` -> Your actual name
- `FLEEK_USER_EMAIL` -> Your email address (used for configuring git)
- `FLEEK_USER_PUBKEY` -> Public Key (used for configuring git)
- `FLEEK_USER_PRIVKEY` -> Private Key (used for configuring git)

And here's the actual block in the Terraform template that creates my Debian development environment:

```
  env = {
    GIT_AUTHOR_NAME     = "${data.coder_workspace.me.owner}"
    GIT_COMMITTER_NAME  = "${data.coder_workspace.me.owner}"
    GIT_AUTHOR_EMAIL    = "${data.coder_workspace.me.owner_email}"
    GIT_COMMITTER_EMAIL = "${data.coder_workspace.me.owner_email}"
    FLEEK_USER_NAME     = "${data.coder_workspace.me.owner}"
    FLEEK_USER_EMAIL    = "${data.coder_workspace.me.owner_email}"
    FLEEK_USER_PUBKEY   = "~/.ssh/id_rsa.pub" 
    FLEEK_USER_PRIVKEY  = "~/.ssh/id_rsa"
    FLEEK_HOST_OVERRIDE = "debiandev"
  }
```