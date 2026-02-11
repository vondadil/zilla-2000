# ![Mozilla 1.7 classic throbber](https://github.com/vondadil/zilla-2000/blob/zilla-rewrite/MozillaClassic/chrome/img/throbber/throbber-single.gif?raw=true) Zilla2000

A Mozilla/Netscape Classic theme for modern Firefox

![Dev-Screenshot of Zilla2000](https://github.com/javos/zilla-2000/blob/zilla-rewrite/screenshot.png?raw=true)

Special Thanks to [grassmunk](https://github.com/grassmunk) (Chicago95), [matthewmx86](https://github.com/matthewmx86) (RetroThemesFirefox), [MrOtherGuy](https://github.com/MrOtherGuy) (Firefox CSS Hacks) and [jdan](https://github.com/jdan) (98.css) for inspiration and previous work :) 

(Loosely) based on the Netscape4 theme from [matthewmx86/RetroThemesFirefox](https://github.com/matthewmx86/RetroThemesFirefox)

# Installation

1. Enable the Title Bar (Right-Click on the empty space in the Main Toolbar, click `Customize` and enable the `Title Bar` checkbox on the bottom)
2. (Optional) Enable the Menu Bar (Right-Click on the empty space in the Main Toolbar and select the `Menu Bar` checkbox)
3. Go to `about:support`, find the entry for your profile directory  and click `Open Directory`
4. [Download this repository](https://github.com/vondadil/zilla-2000/archive/refs/heads/zilla-rewrite.zip) and copy the folder `chrome` into your profile directory
   - If you already have another UserCSS Firefox theme installed, delete the existing chrome folder first! This will remove the old theme.
6. Go to `about:config`, search for `toolkit.legacyUserProfileCustomizations.stylesheets` and set it to true by double-clicking the list entry
5. Restart Firefox

*Notice:* Not enabling the Title Bar may result in visual bugs

# Support
Currently only tested with Firefox 147 on Fedora 43 (Xfce, Chicago95 / KDE, Reactionary Plus). Should mostly work on other platforms, too.

# Changes / Features
- Main UI (Toolbar and Tabs) looks like Netscape 6 Classic Theme / Mozilla 1.7
- Icons for the buttons `Back`/`Forward`/`Reload`, `Toggle Sidebar` and `Print` are replaced with icons taken from Mozilla 1.7
- Icons for `Account` and `Extensions` are replaced with icons taken from Netscape 4
- URL bar does not pop out anymore and matches the Mozilla/Netscape Classic style
- Sidebar matches the Mozilla/Netscape Classic style (icons remain unchanged)
- All other elements of the browser remain untouched for now

- **The throbber is actually animated while loading a page!**

# Known Issues
- `Zoom Control` and `Edit Controls` buttons are visually broken (but remain functional)

# Development State
The Mozilla Classic theme is mostly finished. I'll fix bugs when I have time. If this theme breaks on newer versions of Firefox feel free to create a bug report in the issue tracker, make a pull request or message me :)

-- vondadil (E-Mail: vondadil@vonvon.space)
