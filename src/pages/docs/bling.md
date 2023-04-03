---
title: Bling
description: Choose your weapons.
---

Fleek's `bling` level lets you choose how much sparkle gets added to your $HOME. Levels are additive, so if you choose `low` you'll get all the `none` and `low` bling, and if you choose `high` you'll get all the `none`, `low`, `default`, and `high` bling.

Fleek installs packages in two different ways.

`Packages` are installed as-is. You ask for `neovim`, you get `neovim`.

`Panaged Packages` also include some configuration. You ask for `exa`, you get `exa` with shell aliases already configured for you.

---

## Levels

There are four levels of `bling`: `none`, `low`, `default`, and `high`. The `none` level is the bare minimum, and the `high` level is the most bling you can get. The applications installed at each level are listed below.

{% bling level="none" icon="plugins" /%}
{% bling level="low" icon="plugins" /%}
{% bling level="default" icon="plugins" /%}
{% bling level="high" icon="plugins" /%}
