import React from 'react'
import { Image, List } from 'stardust'

const ListExampleCelled = () => (
  <List celled>
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/avatar/small/helen.jpg' />
      <List.Content>
        <List.Header>Snickerdoodle</List.Header>
        An excellent companion
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header>Poodle</List.Header>
        A poodle, its pretty basic
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/avatar/small/daniel.jpg' />
      <List.Content>
        <List.Header>Paulo</List.Header>
        He's also a dog
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleCelled
