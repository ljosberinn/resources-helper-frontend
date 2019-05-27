import React from 'react';
import {
  Section,
  Title,
  Field,
  Label,
  Radio,
  Column,
  Control,
  Textarea,
  Input,
  Checkbox,
  Button,
  File,
  Select,
} from 'rbx';

export const Forms = () => (
  <Section>
    <Title>Form</Title>
    <hr />
    <Column.Group>
      <Column>
        <Field>
          <Label>Name</Label>
          <Control>
            <Input type="text" placeholder="Text input" />
          </Control>
        </Field>
        <Field>
          <Label>Username</Label>
          <p className="control has-icons-left has-icons-right">
            <Input
              color="success"
              placeholder="Text input"
              defaultValue="bulma"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-user" />
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check" />
            </span>
          </p>
          <p className="help is-success">This username is available</p>
        </Field>
        <Field>
          <Label>Email</Label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="text"
              placeholder="Email input"
              defaultValue="hello@"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-warning" />
            </span>
          </p>
          <p className="help is-danger">This email is invalid</p>
        </Field>
        <Field>
          <Label>Subject</Label>
          <Control>
            <Select.Container>
              <Select>
                {['Select dropdown', 'With options'].map(option => (
                  <Select.Option key={option}>{option}</Select.Option>
                ))}
              </Select>
            </Select.Container>
          </Control>
        </Field>
        <Field>
          <Label>Message</Label>
          <Control>
            <Textarea placeholder="Textarea" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label>
              <Checkbox /> I agree to the
              <a href="#">terms and conditions</a>
            </Label>
          </Control>
        </Field>
        <Field>
          <Control>
            <Label>
              <Radio name="question" /> Yes
            </Label>
            <Label>
              <Radio name="question" /> No
            </Label>
          </Control>
        </Field>
        <div className="field is-grouped">
          <Control>
            <Button color="primary">Submit</Button>
          </Control>
          <Control>
            <Button color="link">Cancel</Button>
          </Control>
        </div>
        <br />
        <h4 className="subtitle"> Disabled </h4>
        <hr />
        <Field>
          <Control>
            <Input disabled placeholder="Disabled input" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Textarea disabled placeholder="Disabled textarea" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Label disabled>
              <Checkbox disabled /> Remember me
            </Label>
          </Control>
        </Field>
        <Field>
          <Control>
            <Label disabled>
              <Radio disabled name="question" /> Yes
            </Label>
            <Label disabled>
              <Radio disabled name="question" /> No
            </Label>
          </Control>
        </Field>
        <div className="field is-grouped">
          <Control>
            <Button primary disabled>
              Submit
            </Button>
          </Control>
          <Control>
            <Button disabled>Cancel</Button>
          </Control>
        </div>
        <br />
        <Title size={3}>Horizontal Form</Title>

        <hr />
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <Label>From</Label>
          </div>
          <div className="field-body">
            <div className="field is-grouped">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Name" />
                <span className="icon is-small is-left">
                  <i className="fa fa-user" />
                </span>
              </p>
            </div>
            <Field>
              <p className="control is-expanded has-icons-left has-icons-right">
                <input
                  className="input is-success"
                  type="email"
                  placeholder="Email"
                  defaultValue="alex@smith.com"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fa fa-check" />
                </span>
              </p>
              <p className="help is-success">This email is correct</p>
            </Field>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <Label>Department</Label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <Control>
                <Select.Container>
                  <Select fullwidth>
                    {['Business development', 'Marketing', 'Sales'].map(
                      option => (
                        <Select.Option>{option}</Select.Option>
                      ),
                    )}
                  </Select>
                </Select.Container>
              </Control>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label">
            <Label className="label">Already a member?</Label>
          </div>
          <div className="field-body">
            <Field narrow>
              <Control className="control">
                <Label>
                  <Radio name="member" /> Yes
                </Label>
                <Label>
                  <Radio name="member" /> No
                </Label>
              </Control>
            </Field>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <Label>Subject</Label>
          </div>
          <div className="field-body">
            <Field>
              <Control>
                <Input
                  color="danger"
                  placeholder="e.g. Partnership opportunity"
                />
              </Control>
              <p className="help is-danger">This field is required</p>
            </Field>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <Label>Question</Label>
          </div>
          <div className="field-body">
            <Field>
              <div className="control">
                <Textarea placeholder="Explain how we can help you" />
              </div>
            </Field>
          </div>
        </div>
        <File horizontal>
          <File.Label />
          <div className="field-body">
            <Field>
              <Control>
                <Button color="primary">Send message</Button>
              </Control>
            </Field>
          </div>
        </File>
        <br />
        <Title size={3}>File</Title>

        <hr />
        <Field>
          <File>
            <File.Label>
              <File.Input name="resume" />
              <File.CTA>
                <File.Icon>
                  <i className="fa fa-upload" />
                </File.Icon>
                <File.Label>Choose a file…</File.Label>
              </File.CTA>
            </File.Label>
          </File>
        </Field>
        <Field>
          <File hasName>
            <File.Label>
              <File.Input name="resume" />
              <File.CTA>
                <File.Icon>
                  <i className="fa fa-upload" />
                </File.Icon>
                <File.Label>Choose a file…</File.Label>
              </File.CTA>
              <File.Name>Screen Shot 2017-07-29 at 15.54.25.png</File.Name>
            </File.Label>
          </File>
        </Field>
        <Field>
          <File color="primary">
            <File.Label>
              <File.Input name="resume" />
              <File.CTA>
                <File.Icon>
                  <i className="fa fa-upload" />
                </File.Icon>
                <File.Label>Primary file…</File.Label>
              </File.CTA>
            </File.Label>
          </File>
        </Field>

        <Field>
          <File hasName color="info">
            <File.Label>
              <File.Input name="resume" />
              <File.CTA>
                <File.Icon>
                  <i className="fa fa-upload" />
                </File.Icon>
                <File.Label>Info file…</File.Label>
              </File.CTA>
              <File.Name>Screen Shot 2017-07-29 at 15.54.25.png</File.Name>
            </File.Label>
          </File>
        </Field>

        <Field>
          <File color="warning" boxed>
            <File.Label>
              <File.Input name="resume" />
              <File.CTA>
                <File.Icon>
                  <i className="fa fa-cloud-upload" />
                </File.Icon>
                <File.Label>Warning file…</File.Label>
              </File.CTA>
            </File.Label>
          </File>
        </Field>

        <Field>
          <File color="danger" hasName boxed>
            <File.Label className="file-label">
              <File.Input name="resume" />
              <File.CTA>
                <File.Icon>
                  <i className="fa fa-cloud-upload" />
                </File.Icon>
                <File.Label>Danger file…</File.Label>
              </File.CTA>
              <File.Name>Screen Shot 2017-07-29 at 15.54.25.png</File.Name>
            </File.Label>
          </File>
        </Field>
      </Column>
      <Column>
        <br />
        <Title subtitle size={3}>
          Styles
        </Title>
        <hr />
        <Field>
          <Control>
            <Input rounded placeholder="Rounded input" />
          </Control>
        </Field>
        <br />
        <Title subtitle size={3}>
          Colors
        </Title>
        <hr />
        <Field>
          <Control>
            <Input color="primary" placeholder="Primary input" type="text" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Input color="info" placeholder="Info input" type="text" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Input color="success" placeholder="Success input" type="text" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Input color="warning" placeholder="Warning input" type="text" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Input color="danger" placeholder="Danger input" type="text" />
          </Control>
        </Field>
        <br />
        <Title subtitle size={3}>
          Sizes
        </Title>
        <hr />
        <Field>
          <Control>
            <Input size="small" placeholder="Small input" type="text" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Input type="text" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Input size="medium" placeholder="Medium input" type="text" />
          </Control>
        </Field>
        <Field>
          <Control>
            <Input size="large" placeholder="Large input" type="text" />
          </Control>
        </Field>
        <Field>
          <Control>
            <span className="select is-small">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </Control>
        </Field>
        <Field>
          <Control>
            <span className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </Control>
        </Field>
        <Field>
          <Control>
            <span className="select is-medium">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </Control>
        </Field>
        <Field>
          <Control>
            <span className="select is-large">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </span>
          </Control>
        </Field>
        <Field>
          <Label size="small">Small input</Label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-small"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </Field>
        <Field>
          <Label>Normal input</Label>
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </Field>
        <Field>
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </Field>
        <Field>
          <Label size="medium">Medium input</Label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </Field>
        <Field>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </Field>
        <Field>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-medium"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-medium is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-medium is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </Field>
        <Field>
          <Label size="large">Large input</Label>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </Field>
        <Field>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </Field>
        <Field>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-medium is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-medium is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </Field>
        <Field>
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              placeholder="Email"
            />
            <span className="icon is-large is-left">
              <i className="fa fa-envelope" />
            </span>
            <span className="icon is-large is-right">
              <i className="fa fa-check" />
            </span>
          </p>
        </Field>
        <br />
        <h4 className="subtitle"> With Font Awesome icons </h4>
        <hr />
        <Field>
          <p className="control has-icons-left">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope" />
            </span>
          </p>
        </Field>
        <Field>
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fa fa-lock" />
            </span>
          </p>
        </Field>
        <Field>
          <Control>
            <button className="button is-success">Login</button>
          </Control>
        </Field>
        <br />
        <Title size={3}>Form addons</Title>
        <hr />
        <div className="field has-addons">
          <Control>
            <input
              className="input"
              type="text"
              placeholder="Find a repository"
            />
          </Control>
          <Control>
            <Button color="info">Search</Button>
          </Control>
        </div>
        <div className="field has-addons">
          <Control>
            <input
              className="input is-large"
              type="text"
              placeholder="Find a repository"
            />
          </Control>
          <Control>
            <Button color="info" size="large">
              Search
            </Button>
          </Control>
        </div>
        <div className="field has-addons">
          <Control>
            <span className="select">
              <select>
                <option>$</option>
                <option>£</option>
                <option>€</option>
              </select>
            </span>
          </Control>
          <Control>
            <input
              className="input"
              type="text"
              placeholder="Amount of money"
            />
          </Control>
          <Control>
            <Button>Transfer</Button>
          </Control>
        </div>
        <div className="field has-addons">
          <Control>
            <span className="select">
              <select>
                <option>$</option>
                <option>£</option>
                <option>€</option>
              </select>
            </span>
          </Control>
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Amount of money"
            />
          </p>
          <Control>
            <Button>Transfer</Button>
          </Control>
        </div>
        <div className="field has-addons">
          <p className="control is-expanded">
            <span className="select is-fullwidth">
              <select name="country">
                <option defaultValue="Argentina">Argentina</option>
                <option defaultValue="Bolivia">Bolivia</option>
                <option defaultValue="Brazil">Brazil</option>
                <option defaultValue="Chile">Chile</option>
                <option defaultValue="Colombia">Colombia</option>
                <option defaultValue="Ecuador">Ecuador</option>
                <option defaultValue="Guyana">Guyana</option>
                <option defaultValue="Paraguay">Paraguay</option>
                <option defaultValue="Peru">Peru</option>
                <option defaultValue="Suriname">Suriname</option>
                <option defaultValue="Uruguay">Uruguay</option>
                <option defaultValue="Venezuela">Venezuela</option>
              </select>
            </span>
          </p>
          <Control>
            <button type="submit" className="button is-primary">
              Choose
            </button>
          </Control>
        </div>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Find a repository"
            />
          </p>
          <Control>
            <Button color="info">Search</Button>
          </Control>
        </div>
      </Column>
    </Column.Group>
  </Section>
);
