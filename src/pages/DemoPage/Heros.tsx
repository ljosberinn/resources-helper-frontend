import React from 'react';

import { Section, Title, Image } from 'rbx';

import { colors } from './constants';

export const Heros = () => (
  <Section>
    <Title>Hero</Title>
    <hr />

    <Section>
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero1"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero1" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />

    <Section>
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero2"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero2" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />

    <Section className="hero is-link">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero3"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero3" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />

    <Section className="hero is-info">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero4"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero4" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />

    <Section className="hero is-success">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero5"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero5" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />

    <Section className="hero is-warning">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero6"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero6" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />

    <Section className="hero is-danger">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero7"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero7" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />

    <Section className="hero is-white">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero8"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero8" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />

    <Section className="hero is-black">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero9"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero9" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />

    <Section className="hero is-light">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero10"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero10" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />

    <Section className="hero is-dark">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <Image
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHero11"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHero11" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-link">More</div>
                  <div id="moreDropdown" className="navbar-dropdown ">
                    <a className="navbar-item " href="#">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br />
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <Title>Title</Title>
          <Title subtitle>Subtitle</Title>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Section>
    <br />
  </Section>
);
