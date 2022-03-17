/**
 * @author WMXPY
 * @namespace StorybookHelper
 * @description ArgTypes
 */

import { ComponentProperty } from "./declare";
import { createComponentArgType } from "./property";

export const createArgTypes = (properties: Record<string, ComponentProperty>): Record<string, any> => {

    const keys: string[] = Object.keys(properties);

    return keys.reduce((previous: Record<string, any>, current: string) => {

        return {
            ...previous,
            [current]: createComponentArgType(properties[current]),
        };
    }, {} as Record<string, any>);
};
