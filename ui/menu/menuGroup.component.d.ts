import React from 'react';
import { ChildrenWithProps } from '../../devsupport';
import { MenuItemProps } from './menuItem.component';
export interface MenuGroupProps extends MenuItemProps {
    children?: ChildrenWithProps<MenuItemProps>;
}
export declare type MenuGroupElement = React.ReactElement<MenuGroupProps>;
interface State {
    submenuHeight: number;
}
/**
 * A group of items displayed in Menu.
 * Groups should be rendered within Menu and contain MenuItem components to provide a useful navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[]} children -
 * Items to be rendered within group.
 *
 * @property {ReactText | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the group.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the *title*.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the *title*.
 * Expected to return an Image.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example MenuGroups
 */
export declare class MenuGroup extends React.Component<MenuGroupProps, State> {
    state: State;
    private expandAnimation;
    private get hasSubmenu();
    private get shouldMeasureSubmenu();
    private get expandAnimationValue();
    private get expandToRotateInterpolation();
    private get submenuStyle();
    private get defaultItemProps();
    private onPress;
    private onSubmenuMeasure;
    private createExpandAnimation;
    private renderAccessoryIfNeeded;
    private renderItemsWithDefaultProps;
    private renderGroupedItems;
    private renderMeasuringGroupedItems;
    private renderGroupedItemsIfNeeded;
    render(): React.ReactNode;
}
export {};
