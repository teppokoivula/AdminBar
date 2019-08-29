# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
