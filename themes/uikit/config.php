<?php namespace ProcessWire;

// show ProcessWire logo image?
$field = $this->modules->get('InputfieldCheckbox');
$field->name = 'theme_uikit_img';
$field->label = 'Show ProcessWire logo image';
$field->value = 1;
$field->checked = $data[$field->name] ?? true;
$fieldset->add($field);

// use icons?
$field = $this->modules->get('InputfieldSelect');
$field->name = 'theme_uikit_icons';
$field->label = 'Use icons';
$field->required = true;
$field->addOptions([
    0 => 'No icons',
    10 => 'Left side only',
    20 => 'Right side only',
    30 => 'All (default)',
]);
$field->value = $data[$field->name] ?? 30;
$fieldset->add($field);

// user icon style
$field = $this->modules->get('InputfieldSelect');
$field->name = 'theme_uikit_user_icon';
$field->label = 'User icon';
$field->addOptions([
    'default' => 'Default icon',
    'gravatar' => 'Gravatar',
]);
$field->value = $data[$field->name] ?? 'default';
$fieldset->add($field);
