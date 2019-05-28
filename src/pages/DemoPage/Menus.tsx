import React, { Fragment } from 'react';
import { Menu } from 'rbx';

const MenuLists = [
  {
    label: 'Elements',
    listItems: [
      'Typography',
      'Box',
      'Button',
      'Content',
      'Delete',
      'Form',
      'Icon',
      'Images',
      'Notifications',
      'Progress bars',
      'Table',
      'Tag',
    ],
  },
  {
    label: 'Components',
    listItems: [
      'Breadcrumb',
      'Dropdown',
      'Card',
      'Hero',
      'Level',
      'Media object',
      'Menu',
      'Message',
      'Modal',
      'Navbar',
      'Pagination',
      'Panel',
      'Tabs',
    ],
  },
];

export const Menus = () => (
  <Menu className="section">
    {MenuLists.map(({ label, listItems }) => (
      <Fragment key={label}>
        <Menu.Label>{label}</Menu.Label>
        <Menu.List>
          {listItems.map(listItem => (
            <Menu.List.Item key={listItem}>{listItem}</Menu.List.Item>
          ))}
        </Menu.List>
      </Fragment>
    ))}
  </Menu>
);
