<?php namespace ProcessWire;

// Show ProcessWire logo image?
$field = $this->modules->get('InputfieldCheckbox');
$field->name = 'theme_uikit_img';
$field->label = 'Show ProcessWire logo image?';
$field->label2 = 'Show ProcessWire logo image';
$field->description = 'Logo is displayed on the left side of the Admin Bar, and doubles as an additional "Admin" link.';
$field->value = 1;
$field->checked = $data[$field->name] ?? true;
$fieldset->add($field);

// Use icons?
$field = $this->modules->get('InputfieldSelect');
$field->name = 'theme_uikit_icons';
$field->label = 'Use icons';
$field->icon = 'file-o';
$field->columnWidth = 50;
$field->required = true;
$field->addOptions([
    0 => 'No icons',
    10 => 'Left side only',
    20 => 'Right side only',
    30 => 'All (default)',
]);
$field->value = $data[$field->name] ?? 30;
$fieldset->add($field);

// Choose the user icon style.
$field = $this->modules->get('InputfieldSelect');
$field->name = 'theme_uikit_user_icon';
$field->label = 'User icon';
$field->icon = 'user-circle-o';
$field->columnWidth = 50;
$field->addOptions([
    'default' => 'Default icon',
    'gravatar' => 'Gravatar',
]);
$field->value = $data[$field->name] ?? 'default';
$field->showIf = "theme_uikit_icons>0";
$fieldset->add($field);
