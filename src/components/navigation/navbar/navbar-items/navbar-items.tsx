import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sui-navbar-items',
  styleUrl: 'navbar-items.scss',
  shadow: true
})

export class NavbarItems {
  @Prop() position: string = 'left';

  render() {
    if(this.position === 'left') {
      return (
        <div class="navbar-items left"><slot/></div>
      )
    } else if(this.position === 'right') {
      return (
        <div class="navbar-items right"><slot/></div>
      )
    }
  }
}
