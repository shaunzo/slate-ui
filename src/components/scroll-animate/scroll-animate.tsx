import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'sui-scroll-anim',
  styleUrl: 'sui-scroll-anim.scss',
  shadow: false
})

export class ScrollAnimate {
  @Element() el: HTMLElement;

  io: IntersectionObserver;
  // Info on this: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

  /**
   * It should be noted that the Intersection Observer is not supported by all browsers.
   * You can add support to them by using a polyfill.
   * W3C has one available with an easy script to add support:
   * <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
   */

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  addIntersectionObserver() {
    this.io = new IntersectionObserver((data: any) => {
      if(data[0].isIntersecting) {
        this.el.querySelector('.sui-scroll-anim').classList.add('sui-anim');
        this.removeIntersectionObserver();
      }
    });
    this.io.observe(this.el.querySelector('.sui-scroll-anim'));
  }

  removeIntersectionObserver() {
    if(this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <div class="sui-scroll-anim">
        <slot/>
      </div>
    );
  }
}
