/**
 * @author WMXPY
 * @namespace StorybookHelper
 * @description Util
 */

import { ComponentProperty } from "./declare";

export const fixParseType = (type: string, property: ComponentProperty): string | undefined => {

    if (property.autoType) {
        return undefined;
    }

    return type;
};
