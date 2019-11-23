import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sui-card-content',
  styleUrl: './card-content.css',
  shadow: true
})

export class Card {
  render() {
    return (
      <div class="sui-card-content">
        <slot/>
      </div>
    );
  }
}
