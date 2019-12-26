import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sui-separator',
  styleUrl: 'sui-separator.scss',
  shadow: true
})
export class Separator {
  /**
   * Separator style option
   */
  @Prop({reflectToAttr: true}) option: string;

  render() {
    let content = null;

    if(this.option === 'arrow') {
      content = (
        <div class='wrapper'>
          <div class='divider div-transparent div-arrow-down'></div>
        </div>
      );
    } else {
      content = (
        <div class='wrapper'>
          <div class='divider div-transparent'></div>
        </div>
      );
    }

    return content;
  }
}
