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
const react_native_1 = require("react-native");
const devsupport_1 = require("../../devsupport");
const theme_1 = require("../../theme");
/**
 * Inputs let users enter and edit text.
 *
 * @extends React.Component
 *
 * @property {string} value - A value displayed in input field.
 *
 * @property {string} onChangeText - Called when the value should be changed.
 *
 * @property {() => void} onFocus - Called when input field becomes focused.
 *
 * @property {() => void} onBlur - Called when input field looses focus.
 *
 * @property {string} placeholder - A string to be displayed when there is no value.
 *
 * @property {boolean} disabled - Whether input field is disabled.
 * This property overrides `editable` property of TextInput.
 *
 * @property {ReactText | (TextProps) => ReactElement} label - String, number or a function component
 * to render above the input field.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | (TextProps) => ReactElement} caption - String, number or a function component
 * to render below the input field.
 * If it is a function, expected to return a Text.
 *
 * @property {(ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
 *
 * @property {(ImageProps) => ReactElement} captionIcon - Function component
 * to render to start of the *caption*.
 * Expected to return an Image.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Useful for giving user a hint on the input validity.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `small`, `medium` or `large`.
 * Defaults to *medium*.
 *
 * @property {StyleProp<TextStyle>} textStyle - Customizes the style of the text field.
 *
 * @property {TextInputProps} ...TextInputProps - Any props applied to TextInput component.
 *
 * @overview-example InputSimpleUsage
 *
 * @overview-example InputStates
 * Input can be disabled with `disabled` property.
 *
 * @overview-example InputStatus
 * Or marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example InputAccessories
 * Input may contain labels, captions and inner views by configuring `accessoryLeft` or `accessoryRight` properties.
 * Within Eva, Input accessories are expected to be images or [svg icons](guides/icon-packages).
 *
 * @overview-example InputSize
 * To resize Input, a `size` property may be used.
 *
 * @overview-example InputStyling
 * Input and it's inner views can be styled by passing them as function components.
 * ```
 * import { Input, Text } from '@ui-kitten/components';
 *
 * <Input
 *   textStyle={{ ... }}
 *   label={evaProps => <Text {...evaProps}>Label</Text>}
 *   caption={evaProps => <Text {...evaProps}>Caption</Text>}
 * />
 * ```
 *
 * @overview-example InputTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
class InputComponent extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.textInputRef = react_1.default.createRef();
        this.webEventResponder = devsupport_1.WebEventResponder.create(this);
        this.focus = () => {
            this.textInputRef.current?.focus();
        };
        this.blur = () => {
            this.textInputRef.current?.blur();
        };
        this.isFocused = () => {
            return this.textInputRef.current?.isFocused();
        };
        this.clear = () => {
            this.textInputRef.current?.clear();
        };
        // WebEventResponderCallbacks
        this.onMouseEnter = () => {
            this.props.eva.dispatch([theme_1.Interaction.HOVER]);
        };
        this.onMouseLeave = () => {
            this.props.eva.dispatch([]);
        };
        this.onTextFieldFocus = (event) => {
            this.props.eva.dispatch([theme_1.Interaction.FOCUSED]);
            this.props.onFocus && this.props.onFocus(event);
        };
        this.onTextFieldBlur = (event) => {
            this.props.eva.dispatch([]);
            this.props.onBlur && this.props.onBlur(event);
        };
        this.getComponentStyle = (source) => {
            const flatStyles = react_native_1.StyleSheet.flatten(this.props.style);
            const { rest: inputContainerStyle, ...containerStyle } = devsupport_1.PropsService.allWithRest(flatStyles, devsupport_1.FlexStyleProps);
            const { textMarginHorizontal, textFontFamily, textFontSize, textFontWeight, textColor, placeholderColor, iconWidth, iconHeight, iconMarginHorizontal, iconTintColor, labelColor, labelFontSize, labelMarginBottom, labelFontWeight, labelFontFamily, captionMarginTop, captionColor, captionFontSize, captionFontWeight, captionFontFamily, captionIconWidth, captionIconHeight, captionIconMarginRight, captionIconTintColor, ...containerParameters } = source;
            return {
                container: containerStyle,
                inputContainer: {
                    ...containerParameters,
                    ...inputContainerStyle,
                },
                captionContainer: {
                    marginTop: captionMarginTop,
                },
                text: {
                    marginHorizontal: textMarginHorizontal,
                    fontFamily: textFontFamily,
                    fontSize: textFontSize,
                    fontWeight: textFontWeight,
                    color: textColor,
                },
                placeholder: {
                    color: placeholderColor,
                },
                icon: {
                    width: iconWidth,
                    height: iconHeight,
                    marginHorizontal: iconMarginHorizontal,
                    tintColor: iconTintColor,
                },
                label: {
                    color: labelColor,
                    fontSize: labelFontSize,
                    marginBottom: labelMarginBottom,
                    fontWeight: labelFontWeight,
                    fontFamily: labelFontFamily,
                },
                captionIcon: {
                    width: captionIconWidth,
                    height: captionIconHeight,
                    tintColor: captionIconTintColor,
                    marginRight: captionIconMarginRight,
                },
                captionLabel: {
                    fontSize: captionFontSize,
                    fontWeight: captionFontWeight,
                    fontFamily: captionFontFamily,
                    color: captionColor,
                },
            };
        };
    }
    render() {
        const { eva, textStyle, label, caption, accessoryLeft, accessoryRight, captionIcon, ...textInputProps } = this.props;
        const evaStyle = this.getComponentStyle(eva.style);
        return (react_1.default.createElement(react_native_1.View, { style: evaStyle.container },
            react_1.default.createElement(devsupport_1.FalsyText, { style: [evaStyle.label, styles.label], component: label }),
            react_1.default.createElement(react_native_1.View, { style: [evaStyle.inputContainer, styles.inputContainer] },
                react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: accessoryLeft }),
                react_1.default.createElement(react_native_1.TextInput, Object.assign({ ref: this.textInputRef, placeholderTextColor: evaStyle.placeholder.color }, textInputProps, this.webEventResponder.eventHandlers, { style: [evaStyle.text, styles.text, platformStyles.text, textStyle], editable: !textInputProps.disabled, onFocus: this.onTextFieldFocus, onBlur: this.onTextFieldBlur })),
                react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.icon, component: accessoryRight })),
            react_1.default.createElement(react_native_1.View, { style: [evaStyle.captionContainer, styles.captionContainer] },
                react_1.default.createElement(devsupport_1.FalsyFC, { style: evaStyle.captionIcon, component: captionIcon }),
                react_1.default.createElement(devsupport_1.FalsyText, { style: [evaStyle.captionLabel, styles.captionLabel], component: caption }))));
    }
}
exports.InputComponent = InputComponent;
InputComponent.styledComponentName = 'Input';
const styles = react_native_1.StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    captionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 'auto',
    },
    label: {
        textAlign: 'left',
    },
    captionLabel: {
        textAlign: 'left',
    },
});
const platformStyles = react_native_1.StyleSheet.create({
    text: react_native_1.Platform.select({
        default: null,
        android: {
            paddingVertical: 0,
            marginVertical: -2
        },
        web: {
            outlineWidth: 0,
        },
    }),
});
exports.Input = theme_1.styled(InputComponent);
//# sourceMappingURL=input.component.js.map