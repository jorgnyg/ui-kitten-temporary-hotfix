/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import React from 'react';
import { ImageProps } from 'react-native';
import { Overwrite } from 'utility-types';
import { RenderProp } from '../../devsupport';
import { StyledComponentProps } from '../../theme';
import { PopoverElement, PopoverProps } from '../popover/popover.component';
import { TextProps } from '../text/text.component';
declare type TooltipStyledProps = Overwrite<StyledComponentProps, {
    appearance?: 'default' | string;
}>;
declare type TooltipPopoverProps = Overwrite<PopoverProps, {
    children: RenderProp<TextProps> | React.ReactText;
}>;
export interface TooltipProps extends TooltipPopoverProps, TooltipStyledProps {
    accessoryLeft?: RenderProp<Partial<ImageProps>>;
    accessoryRight?: RenderProp<Partial<ImageProps>>;
}
export declare type TooltipElement = React.ReactElement<TooltipProps>;
/**
 * Tooltip displays informative text when users focus on or tap an element.
 *
 * @extends React.Component
 *
 * @method {() => void} show - Sets Tooltip visible.
 *
 * @method {() => void} hide - Sets Tooltip invisible.
 *
 * @property {() => ReactElement} anchor - A component relative to which content component will be shown.
 *
 * @property {ReactText | (TextProps) => ReactElement} children - String, number or a function component
 * to render within the tooltip.
 * If it is a function, expected to return a Text.
 *
 * @property {boolean} visible - Whether content component is visible.
 * Defaults to false.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
 *
 * @property {() => void} onBackdropPress - Called when tooltip is visible and the underlying view was touched.
 * Useful when needed to close the modal on outside touches.
 *
 * @property {boolean} fullWidth - Whether a content component should take the width of `anchor`.
 *
 * @property {string | PopoverPlacement} placement - Position of the content component relative to the `anchor`.
 * Can be `left`, `top`, `right`, `bottom`, `left start`, `left end`, `top start`, `top end`, `right start`,
 * `right end`, `bottom start` or `bottom end`.
 * Defaults to *bottom*.
 *
 * @property {StyleProp<ViewStyle>} backdropStyle - Style of backdrop.
 *
 * @overview-example TooltipSimpleUsage
 * Tooltip accepts it's text as child element and is displayed relative to `anchor` view.
 *
 * @overview-example TooltipAccessories
 * Also, it may contain inner views configured with `accessoryLeft` and `accessoryRight` properties.
 * Within Eva it is expected to be an image or [svg icon](docs/guides/icon-packages).
 *
 * @overview-example TooltipStyledBackdrop
 * To style the underlying view, `backdropStyle` property may be used.
 *
 * @overview-example TooltipPlacement
 * By default, tooltip is displayed to the bottom of `anchor` view, but it is configurable with `placement` property.
 *
 * @overview-example TooltipStyling
 * Tooltip and it's inner views can be styled by passing them as function components.
 * In most cases this is redundant, if [custom theme is configured](docs/guides/branding).
 * ```
 * import { Tooltip, Text } from '@ui-kitten/components';
 *
 * <Tooltip style={...}>
 *   {evaProps => <Text {...evaProps}>TEXT</Text>}
 * </Tooltip>
 * ```
 */
export declare class TooltipComponent extends React.Component<TooltipProps> {
    static styledComponentName: string;
    private popoverRef;
    show: () => void;
    hide: () => void;
    private getComponentStyle;
    private renderPopoverIndicatorElement;
    render(): PopoverElement;
}
export declare const Tooltip: import("../../theme").StyledComponentClass<TooltipProps>;
export {};