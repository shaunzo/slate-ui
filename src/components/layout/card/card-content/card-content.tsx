import { Component, h } from '@stencil/core';

@Component({
  tag: 'sui-card-content',
  styleUrl: './card-content.scss',
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
