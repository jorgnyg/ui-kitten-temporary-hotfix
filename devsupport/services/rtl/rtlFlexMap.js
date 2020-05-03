"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FLEX_PREFIX = 'flex';
const FLEX_ROW_PREFIX = 'row';
const FLEX_WRAP_PREFIX = 'wrap';
const FLEX_START_PREFIX = 'start';
const FLEX_END_PREFIX = 'end';
const FLEX_REVERSE_PREFIX = 'reverse';
/**
 * Works with FlexBox style properties that starts with `flex` and ends with `-start` or `-end`
 *
 * E.g justifyContent: flex-start
 */
const FlexStartEndMapper = {
    toRTL(value, rtl) {
        if (!rtl || !value.startsWith(FLEX_PREFIX)) {
            return value;
        }
        const isReverse = value.endsWith(FLEX_END_PREFIX);
        if (isReverse) {
            return `${FLEX_PREFIX}-${FLEX_START_PREFIX}`;
        }
        return `${FLEX_PREFIX}-${FLEX_END_PREFIX}`;
    },
};
/**
 * Works with FlexBox style properties that starts with `row` and optionally ends with `-reverse`
 *
 * E.g flexDirection: row-reverse
 */
const FlexRowMapper = {
    toRTL(value, rtl) {
        if (!rtl || !value.startsWith(FLEX_ROW_PREFIX)) {
            return value;
        }
        const isReverse = value.endsWith(FLEX_REVERSE_PREFIX);
        if (isReverse) {
            return FLEX_ROW_PREFIX;
        }
        return `${FLEX_ROW_PREFIX}-${FLEX_REVERSE_PREFIX}`;
    },
};
/**
 * Works with FlexBox style properties that starts with `wrap` and optionally ends with `-reverse`
 *
 * E.g flexWrap: wrap-reverse
 */
const FlexWrapMapper = {
    toRTL(value, rtl) {
        if (!rtl || !value.startsWith(FLEX_WRAP_PREFIX)) {
            return value;
        }
        const isReverse = value.endsWith(`-${FLEX_REVERSE_PREFIX}`);
        if (isReverse) {
            return FLEX_WRAP_PREFIX;
        }
        return `${FLEX_WRAP_PREFIX}-${FLEX_REVERSE_PREFIX}`;
    },
};
/**
 * Matches FlexBox style properties that can affect on Layout depending on LTR/RTL mode corresponding Mappers
 */
exports.RtlFlexMap = {
    alignContent: FlexStartEndMapper,
    alignItems: FlexStartEndMapper,
    alignSelf: FlexStartEndMapper,
    justifyContent: FlexStartEndMapper,
    flexDirection: FlexRowMapper,
    flexWrap: FlexWrapMapper,
};
//# sourceMappingURL=rtlFlexMap.js.map