# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
