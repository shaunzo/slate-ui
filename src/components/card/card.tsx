import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sui-card',
  styleUrl: './card.css',
  shadow: true
})

export class Card {
  render() {
    return (
      <div class="sui-card">
          <slot/>
      </div>
    );
  }
}
