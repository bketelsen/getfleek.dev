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

The default configuration of Fleek adds a shell alias to change directories into your configuration directory. This is useful for initializing a git repository.

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
git remote add origin git@github.com/$GITHUB_USERNAME/$REPOSITORY.git
git branch -M main
git push -u origin main
```

Replace `$GITHUB_USERNAME` with your GitHub username and `$REPOSITORY` with the name of the repository you created.

## Add a New Computer

Now that you've created a shared repository you can add a new computer.

{% callout type="note" title="Tip: Use the Same Repository" %}
You should use the same repository for multiple computers. Fleek stores the configuration for each computer in a separate directory. This makes it easy to share configurations across multiple computers.

{% /callout %}

### Install Nix and Fleek

See [Installation](/docs/installation) for instructions on how to install Nix and Fleek.

### Run `fleek init`

{% callout type="warning" title="Tip: Test Git First" %}
Make sure your new computer is configured for Git before trying this. See [Configuring Git](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) for more information.

At a minimum, you should configure your name and email address.

You should also test that you can connect to GitHub using SSH. See [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) for more information. A simple test is to run `ssh git@github.com` and see if you get a response.

{% /callout %}

Run `fleek init` to initialize Fleek on your new computer. Pass the URL of the repository you created earlier as an argument.

```shell
fleek init git@github.com/$GITHUB_USERNAME/$REPOSITORY.git
```

Replace `$GITHUB_USERNAME` with your GitHub username and `$REPOSITORY` with the name of the repository you created earlier.

### Run `fleek apply`

Run `fleek apply` to apply the configuration to your new computer.

```shell
fleek apply
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
