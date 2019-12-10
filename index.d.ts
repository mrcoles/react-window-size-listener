declare module "react-window-size-listener" {
  import React from "react";

  interface WindowSize {
    windowWidth: number;
    windowHeight: number;
  }
  interface Props {
    onResize: (windowSize: WindowSize) => any;
    children?: any;
  }

  export default class WindowSizeListener extends React.Component<Props> {
    private _listeners: any[];
    public displayName: string;
  }

  export type WithWindowSizeListenerProps {
    windowSize: WindowSize;
  }

  export function withWindowSizeListener<P extends WSLProps>(
    Component: ComponentType<P>
  ): React.ComponentClass<Omit<P, keyof WithWindowSizeListenerProps>>;
}
