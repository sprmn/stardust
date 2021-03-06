import React, { Component } from 'react'
import { Segment, Icon } from 'stardust'

export default class IconInvertedColoredExample extends Component {
  render() {
    return (
      <Segment inverted>
        <Icon inverted color='red' name='users' />
        <Icon inverted color='orange' name='users' />
        <Icon inverted color='yellow' name='users' />
        <Icon inverted color='olive' name='users' />
        <Icon inverted color='green' name='users' />
        <Icon inverted color='teal' name='users' />
        <Icon inverted color='blue' name='users' />
        <Icon inverted color='violet' name='users' />
        <Icon inverted color='purple' name='users' />
        <Icon inverted color='pink' name='users' />
        <Icon inverted color='brown' name='users' />
        <Icon inverted color='grey' name='users' />
        <Icon inverted color='black' name='users' />
      </Segment>
    )
  }
}
