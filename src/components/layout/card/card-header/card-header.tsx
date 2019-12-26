import { Component, h } from '@stencil/core';

@Component({
  tag: 'sui-card-header',
  styleUrl: './card-header.scss',
  shadow: true
})

export class CardHeader {

  componentContent = null;

  render() {
    this.componentContent = (
      <div class="sui-card-header">
        <slot/>
      </div>
    );
    return this.componentContent
  }
}
