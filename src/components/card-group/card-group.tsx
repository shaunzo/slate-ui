import { Component, h, Prop } from '@stencil/core';
import { Card } from './card.interface';

@Component({
  tag: 'sui-card-group',
  styleUrl: './card-group.css',
  shadow: true
})

export class CardGroup {
  // @Prop() cards:Card[] = [
  //   {
  //     title: "Card One",
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum aspernatur nulla quod a harum dolores odio, quam tempore minus voluptate minima, modi tenetur, delectus rem ad cupiditate dignissimos nemo?"
  //   },
  //   {
  //     title: "Card Two",
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum aspernatur nulla quod a harum dolores odio, quam tempore minus voluptate minima, modi tenetur, delectus rem ad cupiditate dignissimos nemo?"
  //   },
  //   {
  //     title: "Card three",
  //     content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum aspernatur nulla qu"
  //   }
  // ];
  @Prop() cardContent: any;

  componentContent = null;

  render() {

    this.componentContent = (
      <div class="sui-card-group">
        <slot/>
      </div>
    );
    return this.componentContent;

  }
}
