import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sui-card-footer',
  styleUrl: './card-footer.css',
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
