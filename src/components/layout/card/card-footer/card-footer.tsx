import { Component, h } from '@stencil/core';

@Component({
  tag: 'sui-card-footer',
  styleUrl: './card-footer.scss',
  shadow: true
})

export class CardFooter {

  render() {
    return (
      <div class="sui-card-footer">
        <slot/>
      </div>
    );
  }
}
