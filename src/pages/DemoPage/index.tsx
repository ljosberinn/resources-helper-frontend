import React from 'react';
import {
  Column,
  Button,
  Section,
  Box,
  Title,
  Media,
  Icon,
  Content,
  Control,
  Level,
  Image,
  Tag,
} from 'rbx';

import { Notifications } from './Notifications';
import { ProgressBars } from './ProgressBars';
import { Icons } from './Icons';
import { Images } from './Images';
import { Tables } from './Tables';
import { Typography } from './Typography';
import { Buttons } from './Buttons';
import { Menus } from './Menus';
import { Forms } from './Forms';

const DemoPage = () => (
  <Column.Group>
    <Column size={2}>
      <Menus />
    </Column>
    <Column>
      <Typography />

      <Section>
        <Title>Box</Title>
        <hr />
        <Box>
          <Media>
            <Media.Item as="figure" align="left">
              <figure className="image is-64x64">
                <Image
                  alt=""
                  src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
                />
              </figure>
            </Media.Item>
            <Media.Item align="content">
              <Control>
                <p>
                  <strong> John Smith </strong> <small> @johnsmith </small>
                  <small> 31m </small>
                  <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Aenean efficitur sit amet massa fringilla egestas.
                  Nullam condimentum luctus turpis.
                </p>
              </Control>
              <Level>
                <Level.Item align="left">
                  <Level.Item>
                    <Icon size="small">
                      <i className="fa fa-reply" />
                    </Icon>
                  </Level.Item>
                  <Level.Item>
                    <Icon size="small">
                      <i className="fa fa-retweet" />
                    </Icon>
                  </Level.Item>

                  <Level.Item>
                    <Icon size="small">
                      <i className="fa fa-heart" />
                    </Icon>
                  </Level.Item>
                </Level.Item>
              </Level>
            </Media.Item>
          </Media>
        </Box>
      </Section>

      <Buttons />

      <Section>
        <Title>Content</Title>
        <hr />
        <Content>
          <Title>Hello World</Title>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
            nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
            odio, sollicitudin vel erat vel, interdum mattis neque.
          </p>
          <h2> Second level </h2>
          <p>
            Curabitur accumsan turpis pharetra
            <strong> augue tincidunt </strong> blandit. Quisque condimentum
            maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel
            cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus
            lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
          </p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>
              Aliquam nec felis in sapien venenatis viverra fermentum nec
              lectus.
            </li>
            <li> Ut non enim metus. </li>
          </ul>
          <h3> Third level </h3>
          <p>
            Quisque ante lacus, malesuada ac auctor vitae, congue
            <a href="#"> non ante </a>. Phasellus lacus ex, semper ac tortor
            nec, fringilla condimentum orci. Fusce eu rutrum tellus.
          </p>
          <ol>
            <li> Donec blandit a lorem id convallis. </li>
            <li> Cras gravida arcu at diam gravida gravida. </li>
            <li> Integer in volutpat libero. </li>
            <li> Donec a diam tellus. </li>
            <li> Aenean nec tortor orci. </li>
            <li>
              Quisque aliquam cursus urna, non bibendum massa viverra eget.
            </li>
            <li> Vivamus maximus ultricies pulvinar. </li>
          </ol>
          <blockquote>
            Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero
            hendrerit ipsum, ut blandit est tellus sit amet turpis.
          </blockquote>
          <p>
            Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et
            <em> justo sodales </em> elementum. Maecenas ultrices lacus quis
            neque consectetur, et lobortis nisi molestie.
          </p>
          <p>
            Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec
            mattis vulputate risus in luctus. Maecenas vestibulum interdum
            commodo.
          </p>
          <p>
            Suspendisse egestas sapien non felis placerat elementum. Morbi
            tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla
            facilisi. Nullam ac erat ante.
          </p>
          <h4> Fourth level </h4>
          <p>
            Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla
            ac. Mauris euismod metus a tellus laoreet, at elementum ex
            efficitur.
          </p>
          <p>
            Maecenas eleifend sollicitudin dui faucibus sollicitudin augue
            cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est
            maximus est porta condimentum in eu justo. Nulla id iaculis sapien.
          </p>
          <table>
            <thead>
              <tr>
                <th> One </th>
                <th> Two </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> Three </td>
                <td> Four </td>
              </tr>
              <tr>
                <td> Five </td>
                <td> Six </td>
              </tr>
              <tr>
                <td> Seven </td>
                <td> Eight </td>
              </tr>
              <tr>
                <td> Nine </td>
                <td> Ten </td>
              </tr>
              <tr>
                <td> Eleven </td>
                <td> Twelve </td>
              </tr>
            </tbody>
          </table>
          <p>
            Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc,
            blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac
            nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet
            ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus
            laoreet metus, at cursus leo est vel tellus. Sed ac posuere est.
            Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam
            eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat,
            pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel
            condimentum. Nam pharetra varius metus non pellentesque.
          </p>
          <h5> Fifth level </h5>
          <p>
            Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed
            tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula
            mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi
            sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et
            sollicitudin odio.
          </p>
          <h6> Sixth level </h6>
          <p>
            Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar
            lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non
            tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis
            enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec
            consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum
            tortor maximus dui, sed varius sapien odio vitae est. Etiam at
            cursus metus.
          </p>
        </Content>
      </Section>

      <Section>
        <Title>Delete</Title>
        <hr />
        <div className="block">
          <Tag color="success">
            Hello World
            <button className="delete is-small"> </button>
          </Tag>
          <a className="delete is-small"> </a>
          <a className="delete"> </a>
          <a className="delete is-medium"> </a>
          <a className="delete is-large"> </a>
        </div>
        <div className="notification is-danger">
          <button className="delete"> </button> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur
          adipiscing elit
        </div>
        <article className="message is-info">
          <div className="message-header">
            Info
            <button className="delete"> </button>
          </div>
          <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque risus mi, tempus quis placerat ut, porta nec nulla.
            Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
            diam, et dictum felis venenatis efficitur. Aenean ac eleifend lacus,
            in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
            tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui
            urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </article>
      </Section>

      <Forms />

      <Icons />

      <Images />

      <Notifications />

      <ProgressBars />

      <Tables />

      <Section>
        <Title>Tag</Title>

        <hr />
        <div className="tags">
          <span className="tag is-primary"> Primary </span>

          <span className="tag is-link"> Link </span>

          <span className="tag is-info"> Info </span>

          <span className="tag is-success"> Success </span>

          <span className="tag is-warning"> Warning </span>

          <span className="tag is-danger"> Danger </span>

          <span className="tag is-white"> White </span>

          <span className="tag is-black"> Black </span>

          <span className="tag is-light"> Light </span>

          <span className="tag is-dark"> Dark </span>

          <span className="tag is-primary is-medium"> Medium </span>
          <span className="tag is-info is-large"> Large </span>
          <span className="tag is-success">
            Bar
            <button className="delete is-small"> </button>
          </span>
          <span className="tag is-warning is-medium">
            Hello
            <button className="delete is-small"> </button>
          </span>
          <span className="tag is-danger is-large">
            World
            <button className="delete"> </button>
          </span>
        </div>
        <div className="field is-grouped is-grouped-multiline">
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">npm</span>
              <span className="tag is-info">0.5.0</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">build</span>
              <span className="tag is-success">passing</span>
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">chat</span>
              <span className="tag is-primary">on gitter</span>
            </div>
          </div>
        </div>
        <div className="field is-grouped is-grouped-multiline">
          <div className="control">
            <div className="tags has-addons">
              <a className="tag is-link">Technology</a>
              <a className="tag is-delete" />
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <a className="tag is-link">CSS</a>
              <a className="tag is-delete" />
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <a className="tag is-link">Flexbox</a>
              <a className="tag is-delete" />
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <a className="tag is-link">Web Design</a>
              <a className="tag is-delete" />
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <a className="tag is-link">Open Source</a>
              <a className="tag is-delete" />
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <a className="tag is-link">Community</a>
              <a className="tag is-delete" />
            </div>
          </div>

          <div className="control">
            <div className="tags has-addons">
              <a className="tag is-link">Documentation</a>
              <a className="tag is-delete" />
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <Title>Breadcrumb</Title>
        <hr />
        <nav className="breadcrumb">
          <ul>
            <li>
              <a>Bulma</a>
            </li>
            <li>
              <a>Documentation</a>
            </li>
            <li>
              <a>Components</a>
            </li>
            <li className="is-active">
              <a>Breadcrumb</a>
            </li>
          </ul>
        </nav>
      </Section>

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

      <Section>
        <Title>Cards</Title>
        <hr />
        <Column.Group>
          <Column>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <Image
                    src="https://source.unsplash.com/random/800x600"
                    alt="Image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image">
                      <Image
                        src="https://source.unsplash.com/random/96x96"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>.<a>#css</a>
                  <a>#responsive</a>
                  <br /> <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
            </div>
          </Column>
          <Column>
            <div className="card">
              <header className="card-header">
                <p className="card-header-title"> Component </p>
                <a className="card-header-icon">
                  <span className="icon">
                    <i className="fa fa-angle-down" />
                  </span>
                </a>
              </header>
              <div className="card-content">
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>.<a>#css</a>
                  <a>#responsive</a>
                  <br /> <small>11:09 PM - 1 Jan 2016</small>
                </div>
              </div>
              <footer className="card-footer">
                <a className="card-footer-item">Save</a>
                <a className="card-footer-item">Edit</a>
                <a className="card-footer-item">Delete</a>
              </footer>
            </div>
          </Column>
        </Column.Group>
      </Section>

      <Section>
        <Title>Dropdown</Title>
        <hr />
        <Column.Group>
          <Column>
            <div className="dropdown is-active">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>Dropdown button</span>
                  <span className="icon is-small">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item">
                    Dropdown item
                  </a>
                  <a className="dropdown-item">Other dropdown item</a>
                  <a href="#" className="dropdown-item is-active">
                    Active dropdown item
                  </a>
                  <a href="#" className="dropdown-item">
                    Other dropdown item
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    With a divider
                  </a>
                </div>
              </div>
            </div>
          </Column>
          <Column>
            <div className="dropdown is-active">
              <div className="dropdown-trigger">
                <button
                  className="button is-info"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu2"
                >
                  <span>Content</span>
                  <span className="icon is-small">
                    <i className="fa fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <p>
                      You can insert <strong>any type of content</strong> within
                      the dropdown menu.
                    </p>
                  </div>
                  <hr className="dropdown-divider" />
                  <div className="dropdown-item">
                    <p>
                      You simply need to use a <code>&lt;div&gt;</code> instead.
                    </p>
                  </div>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    This is a link
                  </a>
                </div>
              </div>
            </div>
          </Column>
        </Column.Group>
      </Section>

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

      <Section>
        <Title>Media Object</Title>

        <hr />
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <Image
                alt=""
                src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small>
                <small>31m</small>
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
            <nav className="level">
              <div className="level-left">
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fa fa-reply" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fa fa-retweet" />
                  </span>
                </a>
                <a className="level-item">
                  <span className="icon is-small">
                    <i className="fa fa-heart" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <div className="media-right">
            <button className="delete" />
          </div>
        </article>
        <hr />
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <Image
                alt=""
                src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="field">
              <Control>
                <textarea className="textarea" placeholder="Add a comment..." />
              </Control>
            </div>
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <a className="button is-info">Post comment</a>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <label className="checkbox">
                    <input type="checkbox" /> Press enter to submit
                  </label>
                </div>
              </div>
            </nav>
          </div>
        </article>
        <hr />
        <h4 className="subtitle">Nesting</h4>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <Image
                alt=""
                src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Barbara Middleton</strong>
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis porta eros lacus, nec ultricies elit blandit non.
                Suspendisse pellentesque mauris sit amet dolor blandit rutrum.
                Nunc in tempus turpis.
                <br />
                <small>
                  <a>Like</a> · <a>Reply</a> · 3 hrs
                </small>
              </p>
            </div>
            <article className="media">
              <figure className="media-left">
                <p className="image is-48x48">
                  <Image
                    alt=""
                    src="http://bulma.io/images/placeholders/96x96.png"
                  />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Sean Brown</strong>
                    <br /> Donec sollicitudin urna eget eros malesuada sagittis.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aliquam blandit nisl a
                    nulla sagittis, a lobortis leo feugiat.
                    <br />
                    <small>
                      <a>Like</a> · <a>Reply</a> · 2 hrs
                    </small>
                  </p>
                </div>
                <article className="media">
                  Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi
                  eu lorem cursus ullamcorper sit amet nec massa.
                </article>
                <article className="media">
                  Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                  Praesent malesuada metus sed pharetra euismod. Cras tellus
                  odio, tincidunt iaculis diam non, porta aliquet tortor.
                </article>
              </div>
            </article>
            <article className="media">
              <figure className="media-left">
                <p className="image is-48x48">
                  <Image
                    src="http://bulma.io/images/placeholders/96x96.png"
                    alt=""
                  />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Kayli Eunice </strong>
                    <br /> Sed convallis scelerisque mauris, non pulvinar nunc
                    mattis vel. Maecenas varius felis sit amet magna vestibulum
                    euismod malesuada cursus libero. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Phasellus lacinia non nisl id feugiat.
                    <br />
                    <small>
                      <a>Like</a> · <a>Reply</a> · 2 hrs
                    </small>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <Image
                alt=""
                src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="field">
              <Control>
                <textarea className="textarea" placeholder="Add a comment..." />
              </Control>
            </div>
            <div className="field">
              <Control>
                <button className="button">Post comment</button>
              </Control>
            </div>
          </div>
        </article>
      </Section>

      <Section>
        <Title>Menu</Title>

        <hr />
        <div className="column is-3">
          <aside className="menu">
            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
            </ul>
            <p className="menu-label">Administration</p>
            <ul className="menu-list">
              <li>
                <a>Team Settings</a>
              </li>
              <li>
                <a className="is-active">Manage Your Team</a>
                <ul>
                  <li>
                    <a>Members</a>
                  </li>
                  <li>
                    <a>Plugins</a>
                  </li>
                  <li>
                    <a>Add a member</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Invitations</a>
              </li>
              <li>
                <a>Cloud Storage Environment Settings</a>
              </li>
              <li>
                <a>Authentication</a>
              </li>
            </ul>
            <p className="menu-label">Transactions</p>
            <ul className="menu-list">
              <li>
                <a>Payments</a>
              </li>
              <li>
                <a>Transfers</a>
              </li>
              <li>
                <a>Balance</a>
              </li>
            </ul>
          </aside>
        </div>
      </Section>

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

      <Section>
        <Title>Navbar</Title>

        <hr />

        <nav className="navbar ">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div className="navbar-burger burger" data-target="navMenuExample1">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample1" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <nav className="navbar is-primary">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div className="navbar-burger burger" data-target="navMenuExample2">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample2" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <nav className="navbar is-link">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div className="navbar-burger burger" data-target="navMenuExample3">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample3" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <nav className="navbar is-info">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div className="navbar-burger burger" data-target="navMenuExample4">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample4" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <nav className="navbar is-success">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div className="navbar-burger burger" data-target="navMenuExample5">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample5" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <nav className="navbar is-warning">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div className="navbar-burger burger" data-target="navMenuExample6">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample6" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <nav className="navbar is-danger">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div className="navbar-burger burger" data-target="navMenuExample7">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample7" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <nav className="navbar is-white">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div className="navbar-burger burger" data-target="navMenuExample8">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample8" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <nav className="navbar is-black">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div className="navbar-burger burger" data-target="navMenuExample9">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample9" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <nav className="navbar is-light">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div
              className="navbar-burger burger"
              data-target="navMenuExample10"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample10" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <nav className="navbar is-dark">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div
              className="navbar-burger burger"
              data-target="navMenuExample11"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExample11" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown ">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Modifiers
                  </a>
                  <a className="navbar-item " href="#">
                    Grid
                  </a>
                  <a className="navbar-item " href="#">
                    Form
                  </a>
                  <a className="navbar-item " href="#">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                  </a>
                  <a className="navbar-item " href="#">
                    Layout
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " href="#blog/">
                  Blog
                </a>
                <div id="blogDropdown" className="navbar-dropdown ">
                  <a
                    className="navbar-item"
                    href="/2017/03/10/new-field-element/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">10 Mar 2017</small>
                      </p>
                      <p>New field element (for better controls)</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">11 Apr 2016</small>
                      </p>
                      <p>Metro UI CSS grid with Bulma tiles</p>
                    </div>
                  </a>
                  <a
                    className="navbar-item"
                    href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/"
                  >
                    <div className="navbar-content">
                      <p>
                        <small className="has-text-info">09 Feb 2016</small>
                      </p>
                      <p>Blog launched, new responsive columns, new helpers</p>
                    </div>
                  </a>
                  <a className="navbar-item" href="#blog/">
                    More posts
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div className="navbar-content">
                      <div className="level is-mobile">
                        <div className="level-left">
                          <div className="level-item">
                            <strong>Stay up to date!</strong>
                          </div>
                        </div>
                        <div className="level-right">
                          <div className="level-item">
                            <a
                              className="button is-rss is-small"
                              href="#atom.xml"
                            >
                              <span className="icon is-small">
                                <i className="fa fa-rss" />
                              </span>
                              <span>Subscribe</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">More</div>
                <div id="moreDropdown" className="navbar-dropdown ">
                  <a className="navbar-item " href="#extensions/">
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
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/jgthms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <br />

        <h2 className="subtitle">Transparent</h2>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <Image
                src="http://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://github.com/jgthms/bulma"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-github" />
              </span>
            </a>
            <a
              className="navbar-item is-hidden-desktop"
              href="https://twitter.com/jgthms"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
            </a>
            <div className="navbar-burger burger" data-target="navMenuExamplet">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenuExamplet" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item " href="#">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link  is-active" href="#">
                  Docs
                </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item " href="#">
                    Overview
                  </a>
                  <a className="navbar-item " href="#">
                    Discover
                  </a>
                  <hr className="navbar-divider" />
                  <div className="navbar-item">
                    <div>
                      version
                      <p className="has-text-info is-size-6-desktop">0.4.3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              <div className="navbar-item">
                <div className="field is-grouped">
                  <Control>
                    <Button>
                      <span>Tweet</span>
                    </Button>
                  </Control>
                  <Control>
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/archive/0.4.3.zip"
                    >
                      <span className="icon">
                        <i className="fa fa-download" />
                      </span>
                      <span>Download</span>
                    </a>
                  </Control>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Section>

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
