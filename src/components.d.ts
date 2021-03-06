/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface SuiCard {}
  interface SuiCardContent {}
  interface SuiCardFooter {}
  interface SuiCardGroup {
    'cardContent': any;
  }
  interface SuiCardHeader {}
  interface SuiNavItem {
    'alignRight': boolean;
  }
  interface SuiNavbar {
    'navItemsLeft': any[];
    'navItemsRight': any[];
  }
  interface SuiNavbarItems {
    'position': string;
  }
  interface SuiScrollAnim {}
  interface SuiSeparator {
    /**
    * Separator style option
    */
    'option': string;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLSuiCardElement extends Components.SuiCard, HTMLStencilElement {}
  var HTMLSuiCardElement: {
    prototype: HTMLSuiCardElement;
    new (): HTMLSuiCardElement;
  };

  interface HTMLSuiCardContentElement extends Components.SuiCardContent, HTMLStencilElement {}
  var HTMLSuiCardContentElement: {
    prototype: HTMLSuiCardContentElement;
    new (): HTMLSuiCardContentElement;
  };

  interface HTMLSuiCardFooterElement extends Components.SuiCardFooter, HTMLStencilElement {}
  var HTMLSuiCardFooterElement: {
    prototype: HTMLSuiCardFooterElement;
    new (): HTMLSuiCardFooterElement;
  };

  interface HTMLSuiCardGroupElement extends Components.SuiCardGroup, HTMLStencilElement {}
  var HTMLSuiCardGroupElement: {
    prototype: HTMLSuiCardGroupElement;
    new (): HTMLSuiCardGroupElement;
  };

  interface HTMLSuiCardHeaderElement extends Components.SuiCardHeader, HTMLStencilElement {}
  var HTMLSuiCardHeaderElement: {
    prototype: HTMLSuiCardHeaderElement;
    new (): HTMLSuiCardHeaderElement;
  };

  interface HTMLSuiNavItemElement extends Components.SuiNavItem, HTMLStencilElement {}
  var HTMLSuiNavItemElement: {
    prototype: HTMLSuiNavItemElement;
    new (): HTMLSuiNavItemElement;
  };

  interface HTMLSuiNavbarElement extends Components.SuiNavbar, HTMLStencilElement {}
  var HTMLSuiNavbarElement: {
    prototype: HTMLSuiNavbarElement;
    new (): HTMLSuiNavbarElement;
  };

  interface HTMLSuiNavbarItemsElement extends Components.SuiNavbarItems, HTMLStencilElement {}
  var HTMLSuiNavbarItemsElement: {
    prototype: HTMLSuiNavbarItemsElement;
    new (): HTMLSuiNavbarItemsElement;
  };

  interface HTMLSuiScrollAnimElement extends Components.SuiScrollAnim, HTMLStencilElement {}
  var HTMLSuiScrollAnimElement: {
    prototype: HTMLSuiScrollAnimElement;
    new (): HTMLSuiScrollAnimElement;
  };

  interface HTMLSuiSeparatorElement extends Components.SuiSeparator, HTMLStencilElement {}
  var HTMLSuiSeparatorElement: {
    prototype: HTMLSuiSeparatorElement;
    new (): HTMLSuiSeparatorElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'sui-card': HTMLSuiCardElement;
    'sui-card-content': HTMLSuiCardContentElement;
    'sui-card-footer': HTMLSuiCardFooterElement;
    'sui-card-group': HTMLSuiCardGroupElement;
    'sui-card-header': HTMLSuiCardHeaderElement;
    'sui-nav-item': HTMLSuiNavItemElement;
    'sui-navbar': HTMLSuiNavbarElement;
    'sui-navbar-items': HTMLSuiNavbarItemsElement;
    'sui-scroll-anim': HTMLSuiScrollAnimElement;
    'sui-separator': HTMLSuiSeparatorElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface SuiCard {}
  interface SuiCardContent {}
  interface SuiCardFooter {}
  interface SuiCardGroup {
    'cardContent'?: any;
  }
  interface SuiCardHeader {}
  interface SuiNavItem {
    'alignRight'?: boolean;
  }
  interface SuiNavbar {
    'navItemsLeft'?: any[];
    'navItemsRight'?: any[];
  }
  interface SuiNavbarItems {
    'position'?: string;
  }
  interface SuiScrollAnim {}
  interface SuiSeparator {
    /**
    * Separator style option
    */
    'option'?: string;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'sui-card': SuiCard;
    'sui-card-content': SuiCardContent;
    'sui-card-footer': SuiCardFooter;
    'sui-card-group': SuiCardGroup;
    'sui-card-header': SuiCardHeader;
    'sui-nav-item': SuiNavItem;
    'sui-navbar': SuiNavbar;
    'sui-navbar-items': SuiNavbarItems;
    'sui-scroll-anim': SuiScrollAnim;
    'sui-separator': SuiSeparator;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'sui-card': LocalJSX.SuiCard & JSXBase.HTMLAttributes<HTMLSuiCardElement>;
      'sui-card-content': LocalJSX.SuiCardContent & JSXBase.HTMLAttributes<HTMLSuiCardContentElement>;
      'sui-card-footer': LocalJSX.SuiCardFooter & JSXBase.HTMLAttributes<HTMLSuiCardFooterElement>;
      'sui-card-group': LocalJSX.SuiCardGroup & JSXBase.HTMLAttributes<HTMLSuiCardGroupElement>;
      'sui-card-header': LocalJSX.SuiCardHeader & JSXBase.HTMLAttributes<HTMLSuiCardHeaderElement>;
      'sui-nav-item': LocalJSX.SuiNavItem & JSXBase.HTMLAttributes<HTMLSuiNavItemElement>;
      'sui-navbar': LocalJSX.SuiNavbar & JSXBase.HTMLAttributes<HTMLSuiNavbarElement>;
      'sui-navbar-items': LocalJSX.SuiNavbarItems & JSXBase.HTMLAttributes<HTMLSuiNavbarItemsElement>;
      'sui-scroll-anim': LocalJSX.SuiScrollAnim & JSXBase.HTMLAttributes<HTMLSuiScrollAnimElement>;
      'sui-separator': LocalJSX.SuiSeparator & JSXBase.HTMLAttributes<HTMLSuiSeparatorElement>;
    }
  }
}


