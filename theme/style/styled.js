"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const hoist_non_react_statics_1 = __importDefault(require("hoist-non-react-statics"));
const styleConsumer_service_1 = require("./styleConsumer.service");
const mappingContext_1 = require("../mapping/mappingContext");
const themeContext_1 = require("../theme/themeContext");
/**
 * High Order Function to apply style mapping on a component.
 * Used by all UI Kitten components and can be used when building custom components with Eva.
 *
 * Requires component to have a static `styledComponentName` property which defines
 * corresponding component name in mapping.
 *
 * Injects `eva` property into component props, which is `{ theme, style, dispatch }`.
 * Current theme, styles provided by Eva and dispatch function to request styles for a particular state.
 *
 * @property {string} appearance - Appearance of component. Default is provided by mapping.
 *
 * @property {EvaProp} eva - Additional property injected to all `styled` components. Includes following properties:
 * `theme` - current theme,
 * `style` - style provided by Eva,
 * `dispatch` - Function for requesting styles from Eva for current component state.
 *
 * @param Component - Type: {ComponentType}. Component to be styled.
 *
 * @overview-example StyledComponentSimpleUsage
 *
 * @overview-example StyledComponentStates
 *
 * @overview-example StyledComponentVariants
 */
exports.styled = (Component) => {
    // @ts-ignore
    if (!Component.styledComponentName) {
        console.warn('Styled components should specify corresponding style name.');
        return null;
    }
    class Wrapper extends react_1.default.Component {
        constructor() {
            super(...arguments);
            this.state = {
                interaction: [],
            };
            this.init = false;
            this.onInit = (style, theme) => {
                // @ts-ignore
                this.service = new styleConsumer_service_1.StyleConsumerService(Component.styledComponentName, style, theme);
                this.defaultProps = this.service.createDefaultProps();
                this.init = true;
            };
            this.onDispatch = (interaction) => {
                this.setState({ interaction });
            };
            this.withEvaProp = (sourceProps, sourceStyle, theme) => {
                const props = { ...this.defaultProps, ...sourceProps };
                const style = this.service.createStyleProp(props, sourceStyle, theme, this.state.interaction);
                return {
                    ...props,
                    eva: {
                        theme,
                        style,
                        dispatch: this.onDispatch,
                    },
                };
            };
            this.renderWrappedElement = (style, theme) => {
                if (!this.init) {
                    this.onInit(style, theme);
                }
                const { forwardedRef, ...restProps } = this.props;
                return (react_1.default.createElement(Component, Object.assign({}, this.withEvaProp(restProps, style, theme), { ref: forwardedRef })));
            };
        }
        render() {
            return (react_1.default.createElement(mappingContext_1.MappingContext.Consumer, null, (style) => (react_1.default.createElement(themeContext_1.ThemeContext.Consumer, null, (theme) => {
                return this.renderWrappedElement(style, theme);
            }))));
        }
    }
    const WrappingElement = (props, ref) => {
        return (
        // @ts-ignore
        react_1.default.createElement(Wrapper, Object.assign({}, props, { forwardedRef: ref })));
    };
    const ResultComponent = react_1.default.forwardRef(WrappingElement);
    ResultComponent.displayName = Component.displayName || Component.name;
    hoist_non_react_statics_1.default(ResultComponent, Component);
    // @ts-ignore
    return ResultComponent;
};
//# sourceMappingURL=styled.js.map