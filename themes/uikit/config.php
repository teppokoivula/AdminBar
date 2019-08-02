<?php namespace ProcessWire;

// use image?
$field = $this->modules->get('InputfieldCheckbox');
$field->name = 'theme_uikit_img';
$field->label = 'Show ProcessWire icon in Admin Bar';
$field->value = 1;
$field->checked = $data[$field->name] ?? true;
$fieldset->add($field);

// use icons?
$field = $this->modules->get('InputfieldSelect');
$field->name = 'theme_uikit_icons';
$field->label = 'Use icons in Admin Bar';
$field->required = true;
$field->addOptions([
    0 => 'No icons',
    10 => 'Left side only',
    20 => 'Right side only',
    30 => 'All (default)',
]);
$field->value = $data[$field->name] ?? 30;
$fieldset->add($field);
