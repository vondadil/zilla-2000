<h1 align="center"><img src="https://github.com/vondadil/zilla-2000/blob/main/MozillaClassic/chrome/img/throbber/throbber-single.gif?raw=true" alt="Mozilla 1.7 classic throbber"> Zilla2000</h1>

<div align="center"><strong>A Mozilla/Netscape Classic theme for modern Firefox</strong></div>

----

<div align="center">
  <a href="#features">🌟 Features</a> -
  <a href="#installation">🚀 Installation</a> -
  <a href="#features">⚙️ Customization</a>  -
  <a href="#screenshots">🖼️ Screenshots</a> -
  <a href="#more-information">❓ More Info</a>
</div>

----

![Dev-Screenshot of Zilla2000](https://github.com/vondadil/zilla-2000/blob/main/screenshot.png?raw=true)

----

## 🌟 Features
- Main UI in the style of Mozilla 1.7 / Netscape 6 Classic
- Classic toolbar icons (where applicable)
- Loading Throbber in the Main Toolbar (which is actually animated while loading a page! 🥳) - clicking it accesses the Firefox menu
- Dark mode support!
- Native Firefox themes mostly still work
- Toolbar buttons have text labels

## 🚀 Installation

### Automatic Installation
~~On Linux and Windows you can use [Firefox Theme Installer](https://github.com/Hakanbaban53/Firefox-Theme-Installer) to install various Firefox UserCSS themes via an easy-to-use GUI.~~

*Notice:* I have not submitted this theme to the FirefoxCSS Store yet, **so this method does not work with zilla2000 yet**. Once I've done that I'll update this section.


### Manual Installation

#### Pre-Installation
1. Enable the Title Bar
   * Right-Click on the empty space in the Main Toolbar, click `Customize Toolbar` and enable the `Title Bar` checkbox on the bottom
3. *(Optional)* Enable the Menu Bar
   * Right-Click on the empty space in the Main Toolbar and select the `Menu Bar` checkbox
5. Open your Firefox profile folder
   * Go to `about:support`, find the entry for your profile directory  and click `Open Directory`
8. Enable User Chrome Stylesheets
   * Go to `about:config` (read and accept the warning), search for `toolkit.legacyUserProfileCustomizations.stylesheets` and set it to true by double-clicking the list entry
10. Restart Firefox

*Notice:* Not enabling the Title Bar may result in visual bugs

#### Manual Installation
1. Complete the Pre-Installation steps
2. [Download this repository](https://github.com/vondadil/zilla-2000/archive/refs/heads/main.zip) and copy the folder `chrome`* into your profile directory
   - If you already have another UserCSS Firefox theme installed, delete the existing chrome folder first! This will remove the old theme.
3. Restart Firefox

\* *Clarification:* "chrome" refers to the technical term *["user interface chrome"](https://en.wikipedia.org/wiki/Graphical_user_interface#GUI_and_interaction_design)*, not the browser called *Chrome*. This exact folder name is required by Firefox and predates the *Chrome* browser.

## ⚙️ Customization

### Loading Throbber

If you prefer the original Netscape throbber, rename the following files in `chrome/img/throbber`:
* `throbber-single.gif` -> `mozilla-throbber-single.gif`
* `throbber-anim.gif` -> `mozilla-throbber-anim.gif`
* `netscape-throbber-single.gif` -> `throbber-single.gif`
* `netscape-throbber-anim.gif` -> `throbber-anim.gif`


|  | Static | Animated |
| :-- | :--: | :--: |
| Mozilla Throbber | ![Mozilla style throbber static](https://github.com/vondadil/zilla-2000/blob/main/MozillaClassic/chrome/img/throbber/throbber-single.gif) | ![Mozilla style throbber animated](https://github.com/vondadil/zilla-2000/blob/main/MozillaClassic/chrome/img/throbber/throbber-anim.gif) |
| Netscape Throbber | ![Netscape style throbber static](https://github.com/vondadil/zilla-2000/blob/main/MozillaClassic/chrome/img/throbber/netscape-throbber-single.gif) | ![Netscape style throbber animated](https://github.com/vondadil/zilla-2000/blob/main/MozillaClassic/chrome/img/throbber/netscape-throbber-anim.gif) |


## 🖼️ Screenshots

#### zilla2000 - Title Bar enabled, Menu Bar enabled, customized button positions (on KDE, Reactionary Plus theme):
![Dev-Screenshot of Zilla2000](https://github.com/vondadil/zilla-2000/blob/main/screenshot.png?raw=true)

#### Dark mode (on KDE, Reactionary Plus theme):
![Dev-Screenshot of Zilla2000](https://github.com/vondadil/zilla-2000/blob/main/screenshot-darkmode.png?raw=true)

#### Private Browsing mode, Bookmarks Bar hidden (on GNOME):
![Dev-Screenshot of Zilla2000](https://github.com/vondadil/zilla-2000/blob/main/screenshot-private-light.png?raw=true)

#### Private Browsing mode (on GNOME, Dark Style):
![Dev-Screenshot of Zilla2000](https://github.com/vondadil/zilla-2000/blob/main/screenshot-private-dark.png?raw=true)

## ❓ More Information

### OS and Desktop Environment Support
Currently only tested with Firefox 147 on Fedora 43 (Xfce, Chicago95 / KDE, Reactionary Plus).
The theme should be flexible enough to work on most other platforms, though.
macOS could be glitchy but works for now with Menu Bar and Title Bar enabled.

### Full List of Changes
- Main UI (Toolbar and Tabs) looks like Netscape 6 Classic Theme / Mozilla 1.7
- The Firefox menu button is now the throbber from Mozilla 1.7, moonlights  as the menu button
- Icons for the buttons `Back`/`Forward`/`Reload`, `Toggle Sidebar` and `Print` are replaced with icons taken from Mozilla 1.7
- Icons for `Account` and `Extensions` are replaced with icons taken from Netscape 4
- Labels for Toolbar buttons are visible again and placed below the icons
- URL bar does not pop out anymore and matches the Mozilla/Netscape Classic style
- Sidebar matches the Mozilla/Netscape Classic style (icons remain unchanged)
- All other elements of the browser remain untouched for now
- In Private Browsing mode the UI has a purple tint

### Known Issues
- `Zoom Control` and `Edit Controls` buttons are visually broken (but remain functional)

### Development State
The Mozilla Classic theme is mostly finished. I'll fix bugs when I have time. If this theme breaks on newer versions of Firefox feel free to create a bug report in the issue tracker, make a pull request or message me :)

### Credits
Special Thanks to [grassmunk](https://github.com/grassmunk) (Chicago95), [matthewmx86](https://github.com/matthewmx86) (RetroThemesFirefox), [MrOtherGuy](https://github.com/MrOtherGuy) (Firefox CSS Hacks) and [jdan](https://github.com/jdan) (98.css) for inspiration and previous work :) 

Toolbar Icon assets extracted from Mozilla 1.7 Source and Netscape 6

Loosely built upon on the Netscape4 theme from [matthewmx86/RetroThemesFirefox](https://github.com/matthewmx86/RetroThemesFirefox)

-- vondadil (E-Mail: vondadil@vonvon.space)
