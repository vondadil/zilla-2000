# Zilla2000

A Mozilla/Netscape Classic theme for modern Firefox

![Dev-Screenshot of Zilla2000](https://github.com/javos/zilla-2000/blob/zilla-rewrite/screenshot.png?raw=true)

Special Thanks to [grassmunk](https://github.com/grassmunk) (Chicago95), [matthewmx86](https://github.com/matthewmx86) (RetroThemesFirefox), [MrOtherGuy](https://github.com/MrOtherGuy) (Firefox CSS Hacks) and [jdan](https://github.com/jdan) (98.css) for inspiration and previous work :) 

(Loosely) based on the Netscape4 theme from [matthewmx86/RetroThemesFirefox](https://github.com/matthewmx86/RetroThemesFirefox)

# Installation

1. Enable the Title Bar (Right-Click on the empty space in the Main Toolbar, click `Customize` and enable the `Title Bar` checkbox on the bottom)
2. (Optional) Enable the Menu Bar (Right-Click on the empty space in the Main Toolbar and select the `Menu Bar` checkbox)
3. Go to `about:support`, find the entry for your profile directory  and click `Open Directory`
4. Download this repository and copy the folder `Netscape4/chrome` into your profile directory
5. Go to `about:config`, search for `toolkit.legacyUserProfileCustomizations.stylesheets` and set it to true by double-clicking the list entry
5. Restart Firefox

*Notice:* Not enabling the Title Bar may result in visual bugs

# Support
Currently only tested with Firefox 147 on Fedora 43 (Xfce, Chicago95 / KDE, Reactionary Plus). Should mostly work on other platforms, too.

# Changes
- Main UI (Toolbar and Tabs) look like Netscape 6 Classic Theme / Mozilla 1.7
- Icons for the buttons `Back`/`Forward`/`Reload`, `Toggle Sidebar` and `Print` are taken from Mozilla 1.7
- Icons for `Account` and `Extensions` are taken from Netscape 4
- URL bar does not pop out anymore and matches the Mozilla/Netscape Classic style
- Sidebar matches the Mozilla/Netscape Classic style (icons remain unchanged)
- All other elements of the browser remain the same for now

# Known Issues
- `Zoom Control` buttons are visually broken (but remain functional)

# Development State
The theme is mostly finished. I'll fix bugs when I have time. If this theme breaks on newer versions of Firefox feel free to create a bug report in the issue tracker, make a pull request or message me :)

-- vondadil (E-Mail: vondadil@vonvon.space)
