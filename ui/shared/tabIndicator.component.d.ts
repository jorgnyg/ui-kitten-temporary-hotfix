/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ViewProps } from 'react-native';
export interface TabIndicatorProps extends ViewProps {
    positions: number;
    selectedPosition?: number;
}
export declare type TabIndicatorElement = React.ReactElement<TabIndicatorProps>;
export declare class TabIndicator extends React.Component<TabIndicatorProps> {
    static defaultProps: Partial<TabIndicatorProps>;
    private indicatorWidth;
    private contentOffset;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: TabIndicatorProps): boolean;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    /**
     * scrolls indicator to passed index
     *
     * @param params (object) - {
     *  index: number,
     *  animated: boolean | undefined
     * }
     */
    scrollToIndex(params: {
        index: number;
        animated?: boolean;
    }): void;
    /**
     * scrolls indicator to passed offset
     *
     * @param params (object) - {
     *  offset: number,
     *  animated: boolean | undefined
     * }
     */
    scrollToOffset(params: {
        offset: number;
        animated?: boolean;
    }): void;
    private onContentOffsetAnimationStateChanged;
    private onContentOffsetAnimationStateEnd;
    private createOffsetAnimation;
    private onLayout;
    private getComponentStyle;
    render(): React.ReactElement<ViewProps>;
}
