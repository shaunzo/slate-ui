import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sui-navbar',
  styleUrl: 'sui-navbar.scss',
  shadow: true
})

export class Navbar {

  @Prop() navItemsRight: any[];
  @Prop() navItemsLeft: any[];

  render() {
    return (
      <nav class='sui-navbar'>
        <div class="nav-bar__wrapper">
          <slot/>
        </div>
      </nav>
    );
  }
}
