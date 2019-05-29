import React from 'react';
import {
  Section,
  Title,
  Field,
  Label,
  Radio,
  Column,
  Icon,
  Help,
  Control,
  Textarea,
  Input,
  Checkbox,
  Button,
  File,
  Select,
} from 'rbx';

export const FormDemo = () => (
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
          <Control iconLeft iconRight>
            <Input
              color="success"
              placeholder="Text input"
              defaultValue="bulma"
            />
            <Icon size="small" align="left">
              <i className="fa fa-user" />
            </Icon>
            <Icon size="small" align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
          <Help color="success">This username is available</Help>
        </Field>
        <Field>
          <Label>Email</Label>
          <Control iconLeft iconRight>
            <Input
              color="danger"
              type="text"
              placeholder="Email input"
              defaultValue="hello@"
            />
            <Icon size="small" align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon size="small" align="right">
              <i className="fa fa-warning" />
            </Icon>
          </Control>
          <Help color="danger">This email is invalid</Help>
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
              <Checkbox /> I agree to the{' '}
              <a href="/terms-and-conditions">terms and conditions</a>
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
        <Field className="is-grouped">
          <Control>
            <Button color="primary">Submit</Button>
          </Control>
          <Control>
            <Button color="link">Cancel</Button>
          </Control>
        </Field>
        <br />
        <Title subtitle size={4}>
          Disabled
        </Title>
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
        <Field className="is-grouped">
          <Control>
            <Button color="primary" disabled>
              Submit
            </Button>
          </Control>
          <Control>
            <Button disabled>Cancel</Button>
          </Control>
        </Field>
        <br />
        <Title size={3}>Horizontal Form</Title>

        <hr />
        <Field className="is-horizontal">
          <Field.Label className="field-label is-normal">
            <Label>From</Label>
          </Field.Label>
          <Field.Body className="field-body">
            <Field className="is-grouped">
              <Control iconLeft expanded>
                <Input type="text" placeholder="Name" />
                <Icon align="left" size="small">
                  <i className="fa fa-user" />
                </Icon>
              </Control>
            </Field>
            <Field>
              <Control expanded iconLeft iconRight>
                <Input
                  color="success"
                  type="email"
                  placeholder="Email"
                  defaultValue="alex@smith.com"
                />
                <Icon align="left" size="small">
                  <i className="fa fa-user" />
                </Icon>
                <Icon align="right" size="small">
                  <i className="fa fa-user" />
                </Icon>
              </Control>
              <Help color="success">This email is correct</Help>
            </Field>
          </Field.Body>
        </Field>
        <Field className="is-horizontal">
          <Field.Label className="is-normal">
            <Label>Department</Label>
          </Field.Label>
          <Field.Body>
            <Field narrow>
              <Control>
                <Select.Container fullwidth>
                  <Select>
                    {['Business development', 'Marketing', 'Sales'].map(
                      option => (
                        <Select.Option key={option}>{option}</Select.Option>
                      ),
                    )}
                  </Select>
                </Select.Container>
              </Control>
            </Field>
          </Field.Body>
        </Field>
        <Field className="is-horizontal">
          <Field.Label>
            <Label>Already a member?</Label>
          </Field.Label>
          <Field.Body>
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
          </Field.Body>
        </Field>
        <Field className="is-horizontal">
          <Field.Label>
            <Label>Subject</Label>
          </Field.Label>
          <Field.Body>
            <Field>
              <Control>
                <Input
                  color="danger"
                  placeholder="e.g. Partnership opportunity"
                />
              </Control>
              <Help color="danger">This field is required</Help>
            </Field>
          </Field.Body>
        </Field>
        <Field className="is-horizontal">
          <Field.Label>
            <Label>Question</Label>
          </Field.Label>
          <Field.Body>
            <Field>
              <Control>
                <Textarea placeholder="Explain how we can help you" />
              </Control>
            </Field>
          </Field.Body>
        </Field>
        <File className="is-horizontal">
          <File.Label />
          <Field.Body>
            <Field>
              <Control>
                <Button color="primary">Send message</Button>
              </Control>
            </Field>
          </Field.Body>
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
            <Select.Container size="small">
              <Select>
                {['Select dropdown', 'With options'].map(option => (
                  <Select.Option key={option}>{option}</Select.Option>
                ))}
              </Select>
            </Select.Container>
          </Control>
        </Field>
        <Field>
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
          <Control>
            <Select.Container size="medium">
              <Select>
                {['Select dropdown', 'With options'].map(option => (
                  <Select.Option key={option}>{option}</Select.Option>
                ))}
              </Select>
            </Select.Container>
          </Control>
        </Field>
        <Field>
          <Control>
            <Select.Container size="large">
              <Select>
                {['Select dropdown', 'With options'].map(option => (
                  <Select.Option key={option}>{option}</Select.Option>
                ))}
              </Select>
            </Select.Container>
          </Control>
        </Field>
        <Field>
          <Label size="small">Small input</Label>
          <Control className="has-icons-left has-icons-right">
            <Input size="small" type="email" placeholder="Email" />
            <Icon size="small" align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon size="small" align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Label>Normal input</Label>
          <Control className="has-icons-left has-icons-right">
            <Input type="email" placeholder="Email" />
            <Icon size="small" align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon size="small" align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control className="has-icons-left has-icons-right">
            <Input type="email" placeholder="Email" />
            <Icon align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Label size="medium">Medium input</Label>
          <Control className="has-icons-left has-icons-right">
            <Input size="medium" type="email" placeholder="Email" />
            <Icon size="small" align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon size="small" align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control className="has-icons-left has-icons-right">
            <Input size="medium" type="email" placeholder="Email" />
            <Icon align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control className="has-icons-left has-icons-right">
            <Input size="medium" type="email" placeholder="Email" />
            <Icon size="medium" align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon size="medium" align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Label size="large">Large input</Label>
          <Control className="has-icons-left has-icons-right">
            <Input size="large" type="email" placeholder="Email" />
            <Icon size="small" align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon size="small" align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control className="has-icons-left has-icons-right">
            <Input size="large" type="email" placeholder="Email" />
            <Icon align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control className="has-icons-left has-icons-right">
            <Input size="large" type="email" placeholder="Email" />
            <Icon size="medium" align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon size="medium" align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control className="has-icons-left has-icons-right">
            <Input size="large" type="email" placeholder="Email" />
            <Icon size="large" align="left">
              <i className="fa fa-envelope" />
            </Icon>
            <Icon size="large" align="right">
              <i className="fa fa-check" />
            </Icon>
          </Control>
        </Field>
        <br />
        <h4 className="subtitle"> With Font Awesome icons </h4>
        <hr />
        <Field>
          <Control className="has-icons-left">
            <Input type="email" placeholder="Email" />
            <Icon align="left" size="small">
              <i className="fa fa-lock" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control className="has-icons-left">
            <Input type="password" placeholder="Password" />
            <Icon align="left" size="small">
              <i className="fa fa-lock" />
            </Icon>
          </Control>
        </Field>
        <Field>
          <Control>
            <Button color="success">Login</Button>
          </Control>
        </Field>
        <br />
        <Title size={3}>Form addons</Title>
        <hr />
        <Field kind="addons">
          <Control>
            <Input type="text" placeholder="Find a repository" />
          </Control>
          <Control>
            <Button color="info">Search</Button>
          </Control>
        </Field>
        <Field kind="addons">
          <Control>
            <Input size="large" type="text" placeholder="Find a repository" />
          </Control>
          <Control>
            <Button color="info" size="large">
              Search
            </Button>
          </Control>
        </Field>
        <Field kind="addons">
          <Control>
            <Select.Container>
              <Select>
                {['$', '£', '€'].map(currency => (
                  <Select.Option key={currency}>{currency}</Select.Option>
                ))}
              </Select>
            </Select.Container>
          </Control>
          <Control>
            <Input type="text" placeholder="Amount of money" />
          </Control>
          <Control>
            <Button>Transfer</Button>
          </Control>
        </Field>
        <Field kind="addons">
          <Control>
            <Select.Container>
              <Select>
                {['$', '£', '€'].map(currency => (
                  <Select.Option key={currency}>{currency}</Select.Option>
                ))}
              </Select>
            </Select.Container>
          </Control>
          <Control expanded>
            <Input type="text" placeholder="Amount of money" />
          </Control>
          <Control>
            <Button>Transfer</Button>
          </Control>
        </Field>
        <Field kind="addons">
          <Control expanded>
            <Select.Container fullwidth>
              <Select name="country">
                {[
                  'Argentinia',
                  'Bolivia',
                  'Brazil',
                  'Chile',
                  'Colombia',
                  'Ecuador',
                  'Guyana',
                  'Paraguay',
                  'Peru',
                  'Suriname',
                  'Uruguay',
                  'Venezuela',
                ].map(country => (
                  <Select.Option key={country}>{country}</Select.Option>
                ))}
              </Select>
            </Select.Container>
          </Control>
          <Control>
            <Button color="primary" type="submit">
              Choose
            </Button>
          </Control>
        </Field>
        <Field className="is-grouped">
          <Control expanded>
            <Input type="text" placeholder="Find a repository" />
          </Control>
          <Control>
            <Button color="info">Search</Button>
          </Control>
        </Field>
      </Column>
    </Column.Group>
  </Section>
);
