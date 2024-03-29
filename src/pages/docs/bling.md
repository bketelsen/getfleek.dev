---
title: Bling
description: Choose your weapons.
---

Fleek's `bling` level provides a stable and lightly opinionated starting point for your shell configuration. This lets you choose how much sparkle gets added to your $HOME. Levels are additive, so if you choose `low` you'll get all the `none` and `low` bling, and if you choose `high` you'll get all the `none`, `low`, `default`, and `high` bling.

{% callout type="note" title="Tip: Bling Levels Are Lightweight" %}
The difference between `none` and `high` is really minimal in terms of changes to your environment and disk space usage. Go with `high` or `default` to get a good set of features.

{% /callout %}

Fleek installs things in two different ways.

`Packages` are installed as-is. You ask for `neovim`, you get `neovim`.

`Managed Packages` also include some configuration. You ask for `eza`, you get `eza` with shell aliases already configured for you.

---

## Levels

There are four levels of `bling`: `none`, `low`, `default`, and `high`. The `none` level is the bare minimum, and the `high` level is the most bling you can get. The applications installed at each level are listed below.

{% bling level="none" icon="plugins" /%}
{% bling level="low" icon="plugins" /%}
{% bling level="default" icon="plugins" /%}
{% bling level="high" icon="plugins" /%}
