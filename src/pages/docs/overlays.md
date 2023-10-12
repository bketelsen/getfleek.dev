---
title: Overlays
description: Overlays allow you to get packages from outside of nixpkgs
---

For some programs, like [emacs](https://github.com/nix-community/emacs-overlay) and [firefox](https://github.com/mozilla/nixpkgs-mozilla), the Nix community maintains a variety of builds outside of the main nixpkgs collection. To access these in your fleek flake, you need an to add an [overlay](https://nixos.wiki/wiki/Overlays) and then apply a package override in your `user.nix`.

While there's no CLI for adding overlays, you can add a list of them to your `.fleek.yml` by adding an `overlays` key, like the below:

```yaml
overlays:
    emacs:
        url: github:nix-community/emacs-overlay
        follow: true
    nur:
        url: github:nix-community/NUR
        follow: false
```

In the above, `url` is the URL of the overlay (as used in a flake), and `follow` will configure the overlay to follow nixpkgs (if set to true). With those lines in place, you can add sections like the following to your `user.nix` and configure programs to use alternative packages and other features the overlay provides:

```nix
programs.emacs = {
    package = pkgs.emacsPgtk;
    extraPackages = epkgs:
    with epkgs; [
        base16-theme
    ];
};
```
