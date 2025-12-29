# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.10.1] - 2025-12-29

### Changed
- Document `--adminbar-height` CSS custom property in README.

## [2.10.0] - 2025-12-29

### Added
- Added `--adminbar-height` CSS custom property on the `<html>` element, updated on resize. This allows site styles to account for AdminBar height, e.g., for `scroll-margin-top`.

### Changed
- AdminBar CSS and JavaScript now use `--adminbar-height` variable for modal positioning and element adjustments.

## [2.9.6] - 2025-12-02

### Fixed
- Fixed JavaScript issue occurring when browse button is not present in the AdminBar.

## [2.9.5] - 2025-05-03

### Fixed
- Detect DOM has already loaded when AdminBar JavaScript runs, in which case we don't want to wait any longer but rather execute our JavaScript right away.

## [2.9.4] - 2025-05-03

### Added
- Add support for optionally displaying save e.g. buttons in the head of the modal screen, just like they would be displayed when editing page directly, without the "modal" param. This feature is considered experimental.

## [2.9.3] - 2024-05-26

### Fixed
- Fixed another JavaScript issue related to null objects, occurring when resizing window.

## [2.9.2] - 2024-03-07

### Fixed
- Fixed a JavaScript issue where AdminBar attempted to access properties of null.

## [2.9.1] - 2024-01-09

### Fixed
- Fixed a JavaScript issue where AdminBar content container was sometimes undefined.

## [2.9.0] - 2024-01-03

### Added
- Added support for specifying the root content element with `data-adminbar-content` attribute. More details in README.md.

## [2.8.4] - 2023-08-11

### Fixed
- Fixed an issue where multiple AdminBars were being erroneously added to page content. This would happen e.g. in case one page rendered another page. This behaviour can be disabled via module config settings if, for some reason, duplicate bars are actually preferable.

## [2.8.3] - 2023-06-07

### Changed
- Removed JavaScript related to Tracy Debugger z-index adjustment.

## [2.8.2] - 2023-06-06

### Added
- Adjusts z-index when Tracy Debugger is enabled to avoid AdminBar overlapping Tracy panels.

## [2.8.1] - 2023-05-04

### Fixed
- Fixed the path of ProcessWire logo image; default to new path (3.0.178+) with a fallback for earlier one.

## [2.8.0] - 2023-03-30

### Added
- Added new static flag AdminBar::$showBar for disabling AdminBar programmatically without the use of hooks.

## [2.7.2] - 2022-09-20

### Changed
- New SVG loading animation for AdminBar iframe, README updates, and some loosely related CSS updates.

## [2.7.1] - 2022-06-16

### Fixed
- Fixed an issue where AdminBar modal was unintentionally not closing after saving an unpublished page.

## [2.7.0] - 2021-05-19

### Added
- Added new hookable method AdminBar::isEnabledFor() for programmatically enabling/disabling Admin Bar for specific page.

### Changed
- Moved form-builder Page / template check to AdminBar::isEnabledFor().

## [2.6.2] - 2020-08-05

### Fixed
- Fixed a redirect issue occurring when a page with Repeater items was saved.

## [2.6.1] - 2020-07-28

### Fixed
- Fixed an issue where old value stuck in Template object childTemplates property could cause fatal error.

## [2.6.0] - 2020-05-17

### Added
- New module config setting for disabling Admin Bar when the site is in debug mode.
- New hookable method AdminBar::isEnabled() for programmatically enabling/disabling Admin Bar.

## [2.5.0] - 2020-05-17

### Added
- New module config setting for keeping the modal window open after page has been saved.

## [2.4.2] - 2019-11-18

### Fixed
- Fixed potential issues with site styles interfering with AdminBar elements.

## [2.4.1] - 2019-10-13

### Fixed
- Fixed an issue where ProcessWire Admin (modal.js) required jQuery when opening nested modals.

## [2.4.0] - 2019-09-18

### Added
- Support for `data-adminbar-adjust` property for any frontend element. More details in README.md.

## [2.3.2] - 2019-08-29

### Fixed
- Fixed an issue related to array handling in case of non-editable page item labels.

### Changed
- Made uikit theme CSS styles more resilient in regards for different site styles.

## [2.3.1] - 2019-08-29

### Fixed
- Fixed a syntax issue caused by incorrect heredoc usage.

## [2.3.0] - 2019-08-29

### Added
- Gravatar image support for the "user" item in Admin Bar.
- Support for sorting Admin Bar items manually with the AsmSelect field in module config.
- A changelog file.

### Changed
- Protect logout link from accidental clicks (script or otherwise) by converting simple link to a logout form.
- When modal window is opened, hide children and view tabs with CSS first in order to prevent flashing content.
