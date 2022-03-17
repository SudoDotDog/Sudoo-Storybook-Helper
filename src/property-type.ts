/**
 * @author WMXPY
 * @namespace StorybookHelper
 * @description Property Type
 */

import { ComponentProperty } from "./declare";
import { fixParseType } from "./util";

export const createComponentArgTypeType = (property: ComponentProperty): any => {

    switch (property.type) {

        case 'array': return {
            name: fixParseType('array', property),
            required: property.required ? true : false,
        };
        case 'boolean': return {
            name: fixParseType('boolean', property),
            required: property.required ? true : false,
        };
        case 'color': return {
            name: fixParseType('string (Color)', property),
            required: property.required ? true : false,
        };
        case 'date': return {
            name: fixParseType('Date', property),
            required: property.required ? true : false,
        };
        case 'enum': return {
            name: fixParseType('enum', property),
            required: property.required ? true : false,
        };
        case 'enum-list': return {
            name: fixParseType('enum list', property),
            required: property.required ? true : false,
        };
        case 'file': return {
            name: fixParseType('File', property),
            required: property.required ? true : false,
        };
        case 'function': return {
            name: fixParseType('function', property),
            required: property.required ? true : false,
        };
        case 'number': return {
            name: fixParseType('number', property),
            required: property.required ? true : false,
        };
        case 'object': return {
            name: fixParseType('object', property),
            required: property.required ? true : false,
        };
        case 'string': return {
            name: fixParseType('string', property),
            required: property.required ? true : false,
        };
    }
};
