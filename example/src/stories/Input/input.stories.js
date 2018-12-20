import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme';

import MyREADME from './README.md';

import { Input, Button, Flex, Box, Card, Field } from 'rimble-ui'

storiesOf('Form', module)
  .addDecorator(withDocs(MyREADME))
  .add('Input', () => (
    <div>
      <Input type='text' placeholder='Lorem ipsum dolor sit.'/>
      <Input type='text' placeholder='Lorem ipsum dolor sit.' disabled/>
    </div>
  )).add('email', () => (
    <div>
      <Input type='email' name='email' id='email' placeholder='you@example.com'/>
      <Input type='email' name='email' id='email' placeholder='you@example.com' disabled/>
    </div>
  )).add('number', () => (
    <Input type='number'/>
  )).add('password', () => (
    <Input type='password'/>
  )).add('search', () => (
    <Input type='search'/>
  )).add('tel', () => (
    <Input type='tel'/>
  )).add('url', () => (
    <Input type='url'/>
  )).add('Form', () => (
    <div>
      <Card>
        <form action="">
          <Flex flexDirection="column" alignItems="stretch">
            <Field label="email" mb='3'>
              <Input type='email' name='email' id='email' placeholder='email'/>
            </Field>
            <Field label="password" mb='3'>
              <Input type='password' placeholder='password'/>
            </Field>
            <Button type='submit' icon='ArrowForward' iconpos='right' iconsize='20px'>Sign In</Button>
          </Flex>
        </form>
      </Card>
    </div>
  ))
