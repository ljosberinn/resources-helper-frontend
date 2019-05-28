import React from 'react';
import { Column, Button, Section, Title, Control, Image } from 'rbx';

import { Notifications } from './Notifications';
import { ProgressBars } from './ProgressBars';
import { Icons } from './Icons';
import { Images } from './Images';
import { Tables } from './Tables';
import { Typography } from './Typography';
import { Buttons } from './Buttons';
import { Menus } from './Menus';
import { Forms } from './Forms';
import { Deleters } from './Deleters';
import { Tags } from './Tags';
import { Heros } from './Heros';
import { Breadcrumbs } from './Breadcrumbs';
import { Cards } from './Cards';
import { MediaObject } from './MediaObject';
import { ContentDemo } from './ContentDemo';
import { BoxDemo } from './BoxDemo';
import { DropdownDemo } from './DropdownDemo';
import { NavbarDemo } from './NavbarDemo';

const DemoPage = () => (
  <Column.Group>
    <Column size={2}>
      <Menus />
    </Column>
    <Column>
      <Typography />

      <BoxDemo />

      <Buttons />

      <ContentDemo />

      <Deleters />

      <Forms />

      <Icons />

      <Images />

      <Notifications />

      <ProgressBars />

      <Tables />

      <Tags />

      <Breadcrumbs />

      <Heros />

      <Cards />

      <DropdownDemo />

      <Section>
        <Title>Level</Title>

        <hr />
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="subtitle is-5">
                <strong>123</strong> posts
              </p>
            </div>
            <div className="level-item">
              <div className="field has-addons">
                <Control>
                  <input
                    className="input"
                    type="text"
                    placeholder="Find a post"
                  />
                </Control>
                <Control>
                  <button className="button">Search</button>
                </Control>
              </div>
            </div>
          </div>
          <div className="level-right">
            <p className="level-item">
              <strong>All</strong>
            </p>
            <p className="level-item">
              <a>Published</a>
            </p>
            <p className="level-item">
              <a>Drafts</a>
            </p>
            <p className="level-item">
              <a>Deleted</a>
            </p>
            <p className="level-item">
              <a className="button is-success">New</a>
            </p>
          </div>
        </nav>
        <hr />
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Tweets</p>
              <p className="title">3,456</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Following</p>
              <p className="title">123</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Followers</p>
              <p className="title">456K</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="title">789</p>
            </div>
          </div>
        </nav>
        <hr />
        <nav className="level">
          <p className="level-item has-text-centered">
            <a className="link is-info">Home</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Menu</a>
          </p>
          <p className="level-item has-text-centered">
            <Image src="http://bulma.io/images/bulma-type.png" alt="" />
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Reservations</a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info">Contact</a>
          </p>
        </nav>
        <hr />
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Tweets</p>
              <p className="title">3,456</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Following</p>
              <p className="title">123</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Followers</p>
              <p className="title">456K</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="title">789</p>
            </div>
          </div>
        </nav>
        <hr />
      </Section>

      <MediaObject />

      <Section>
        <Title>Message</Title>
        <hr />
        <div className="columns is-multiline">
          <div className="column is-half">
            <article className="message ">
              <div className="message-header">
                <p>Message</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>

          <div className="column is-half">
            <article className="message is-primary">
              <div className="message-header">
                <p>Primary</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>

          <div className="column is-half">
            <article className="message is-link">
              <div className="message-header">
                <p>Link</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>

          <div className="column is-half">
            <article className="message is-info">
              <div className="message-header">
                <p>Info</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>

          <div className="column is-half">
            <article className="message is-success">
              <div className="message-header">
                <p>Success</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>

          <div className="column is-half">
            <article className="message is-warning">
              <div className="message-header">
                <p>Warning</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>

          <div className="column is-half">
            <article className="message is-danger">
              <div className="message-header">
                <p>Danger</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>

          <div className="column is-half">
            <article className="message is-white">
              <div className="message-header">
                <p>White</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>

          <div className="column is-half">
            <article className="message is-black">
              <div className="message-header">
                <p>Black</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>

          <div className="column is-half">
            <article className="message is-light">
              <div className="message-header">
                <p>Light</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>

          <div className="column is-half">
            <article className="message is-dark">
              <div className="message-header">
                <p>Dark</p>
                <button className="delete" />
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
                porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
                Nullam gravida purus diam, et dictum
                <a>felis venenatis</a> efficitur. Aenean ac
                <em>eleifend lacus</em>.
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section>
        <Title>Modal</Title>
        <hr />
        <a className="button is-primary is-large" data-target="#myModal">
          Launch example modal
        </a>
        <div className="modal" id="myModal">
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" />
            </header>
            <Section className="modal-card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Section>
            <footer className="modal-card-foot">
              <a className="button is-primary">Save changes</a>
              <a className="button">Cancel</a>
            </footer>
          </div>
        </div>
      </Section>

      <NavbarDemo />

      <Section>
        <Title>Pagination</Title>

        <hr />
        <nav className="pagination">
          <a className="pagination-previous is-disabled">Previous</a>
          <a className="pagination-next">Next page</a>
          <ul className="pagination-list">
            <li>
              <a className="pagination-link">1</a>
            </li>
            <li>
              <span className="pagination-ellipsis">…</span>
            </li>
            <li>
              <a className="pagination-link">45</a>
            </li>
            <li>
              <a className="pagination-link is-current">46</a>
            </li>
            <li>
              <a className="pagination-link">47</a>
            </li>
            <li>
              <span className="pagination-ellipsis">…</span>
            </li>
            <li>
              <a className="pagination-link">86</a>
            </li>
          </ul>
        </nav>
        <br />
        <nav
          className="pagination is-rounded"
          role="navigation"
          aria-label="pagination"
        >
          <a className="pagination-previous">Previous</a>
          <a className="pagination-next">Next page</a>
          <ul className="pagination-list">
            <li>
              <a className="pagination-link" aria-label="Goto page 1">
                1
              </a>
            </li>
            <li>
              <span className="pagination-ellipsis">…</span>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 45">
                45
              </a>
            </li>
            <li>
              <a
                className="pagination-link is-current"
                aria-label="Page 46"
                aria-current="page"
              >
                46
              </a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 47">
                47
              </a>
            </li>
            <li>
              <span className="pagination-ellipsis">…</span>
            </li>
            <li>
              <a className="pagination-link" aria-label="Goto page 86">
                86
              </a>
            </li>
          </ul>
        </nav>
      </Section>

      <Section>
        <Title>Panel</Title>

        <hr />
        <div className="column is-4">
          <nav className="panel">
            <p className="panel-heading"> Repositories </p>
            <div className="panel-block">
              <p className="control has-icons-left">
                <input
                  className="input is-small"
                  type="text"
                  placeholder="Search"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-search" />
                </span>
              </p>
            </div>
            <p className="panel-tabs">
              <a className="is-active">All</a>
              <a>Public</a>
              <a>Private</a>
              <a>Sources</a>
              <a>Forks</a>
            </p>
            <a className="panel-block is-active">
              <span className="panel-icon">
                <i className="fa fa-book" />
              </span>
              bulma
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fa fa-book" />
              </span>
              marksheet
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fa fa-book" />
              </span>
              minireset.css
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fa fa-book" />
              </span>
              jgthms.github.io
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fa fa-code-fork" />
              </span>
              daniellowtw/infBoard
            </a>
            <a className="panel-block">
              <span className="panel-icon">
                <i className="fa fa-code-fork" />
              </span>
              mojs
            </a>
            <label className="panel-block">
              <input type="checkbox" /> Remember me
            </label>
            <div className="panel-block">
              <Button color="primary" outlined fullwidth>
                Reset all filters
              </Button>
            </div>
          </nav>
        </div>
      </Section>

      <Section>
        <Title>Tabs</Title>
        <hr />
        <div className="tabs">
          <ul>
            <li className="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-centered">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fa fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-small">
          <ul>
            <li className="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-medium">
          <ul>
            <li className="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-large">
          <ul>
            <li className="is-active">
              <a>Pictures</a>
            </li>
            <li>
              <a>Music</a>
            </li>
            <li>
              <a>Videos</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-boxed">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fa fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-toggle">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fa fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-toggle is-toggle-rounded">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fa fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-fullwidth">
          <ul>
            <li>
              <a>
                <span className="icon">
                  <i className="fa fa-angle-left" />
                </span>
                <span>Left</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <i className="fa fa-angle-up" />
                </span>
                <span>Up</span>
              </a>
            </li>
            <li>
              <a>
                <span>Right</span>
                <span className="icon">
                  <i className="fa fa-angle-right" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-centered is-boxed">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fa fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fa fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tabs is-toggle is-fullwidth is-large">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon">
                  <i className="fa fa-image" />
                </span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <i className="fa fa-music" />
                </span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <i className="fa fa-film" />
                </span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <i className="fa fa-file-text-o" />
                </span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </Column>
  </Column.Group>
);

export default DemoPage;
