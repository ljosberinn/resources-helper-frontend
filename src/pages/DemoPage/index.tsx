import React from 'react';
import { Column } from 'rbx';

import { NotificationDemo } from './NotificationDemo';
import { ProgressBarDemo } from './ProgressBarDemo';
import { IconDemo } from './IconDemo';
import { ImageDemo } from './ImageDemo';
import { TableDemo } from './TableDemo';
import { TypographyDemo } from './TypographyDemo';
import { ButtonDemo } from './ButtonDemo';
import { MenuDemo } from './MenuDemo';
import { FormDemo } from './FormDemo';
import { DeleteDemo } from './DeleteDemo';
import { TagsDemo } from './TagsDemo';
import { HeroDemo } from './HeroDemo';
import { BreadcrumbsDemo } from './BreadcrumbsDemo';
import { CardDemo } from './CardDemo';
import { MediaDemo } from '././MediaDemo';
import { ContentDemo } from './ContentDemo';
import { BoxDemo } from './BoxDemo';
import { DropdownDemo } from './DropdownDemo';
import { NavbarDemo } from './NavbarDemo';
import { LevelDemo } from './LevelDemo';
import { MessageDemo } from './MessageDemo';
import { PaginationDemo } from './PaginationDemo';
import { TabsDemo } from './TabsDemo';
import { PanelDemo } from './PanelDemo';
import { ModalDemo } from './ModalDemo';

const DemoPage = () => (
  <Column.Group>
    <Column size={2}>
      <MenuDemo />
    </Column>
    <Column>
      <TypographyDemo />

      <BoxDemo />

      <ButtonDemo />

      <ContentDemo />

      <DeleteDemo />

      <FormDemo />

      <IconDemo />

      <ImageDemo />

      <NotificationDemo />

      <ProgressBarDemo />

      <TableDemo />

      <TagsDemo />

      <BreadcrumbsDemo />

      <HeroDemo />

      <CardDemo />

      <DropdownDemo />

      <LevelDemo />

      <MediaDemo />

      <MessageDemo />

      <ModalDemo />

      <NavbarDemo />

      <PaginationDemo />

      <PanelDemo />

      <TabsDemo />
    </Column>
  </Column.Group>
);

export default DemoPage;
