import { Component, h } from '@stencil/core';

@Component({
  tag: 'sui-card',
  styleUrl: './card.scss',
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
