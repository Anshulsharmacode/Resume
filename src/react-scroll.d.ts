declare module 'react-scroll' {
    import * as React from 'react';
  
    interface LinkProps {
      to: string;
      smooth?: boolean;
      duration?: number;
      offset?: number;
      onClick?: () => void;
      className?: string;
      activeClass?: string;
      spy?: boolean;
      hashSpy?: boolean;
      isDynamic?: boolean;
      ignoreCancelEvents?: boolean;
      delay?: number;
      onSetActive?: (to: string) => void;
      onSetInactive?: (to: string) => void;
      containerId?: string;
      href?: string;
    }
  
    export class Link extends React.Component<LinkProps> {}
    export class Element extends React.Component<{ name: string; id?: string }> {}
    export function animateScroll(scrollToOptions: {
      duration?: number;
      delay?: number;
      smooth?: boolean;
      containerId?: string;
    }): void;
  }
  