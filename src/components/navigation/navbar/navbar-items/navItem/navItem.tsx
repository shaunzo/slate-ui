import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sui-nav-item',
  styleUrl: 'navItem.scss',
  shadow: true
})

export class NavItem {

  @Prop() alignRight: boolean;

  render() {
    return (
      <div class="navItem"><slot/></div>
    )
  }
}
