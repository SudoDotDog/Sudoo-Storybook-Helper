/**
 * @author WMXPY
 * @namespace StorybookHelper
 * @description Declare
 */

export type ComponentPropertyArray<Element = any> = {

    readonly type: 'array';
    readonly defaultValue?: Element[];
};

export type ComponentPropertyBoolean = {

    readonly type: 'boolean';
    readonly defaultValue?: boolean;
};

export type ComponentPropertyColor = {

    readonly type: 'color';
    readonly presetColors?: string[];
    readonly defaultValue?: string;
};

export type ComponentPropertyDate = {

    readonly type: 'date';
    readonly defaultValue?: Date;
};

export type ComponentPropertyEnum<Option extends string = any> = {

    readonly type: 'enum';
    readonly control?: 'radio' | 'inline-radio' | 'select';
    readonly options: Option[];
    readonly defaultValue?: Option;
};

export type ComponentPropertyEnumList<Option extends string = any> = {

    readonly type: 'enum-list';
    readonly control?: 'check' | 'inline-check' | 'multi-select';
    readonly options: Option[];
    readonly defaultValue?: Option[];
};

export type ComponentPropertyFile = {

    readonly type: 'file';
    readonly accept?: string[];
};

export type ComponentPropertyFunction = {

    readonly type: 'function';
    readonly action: string;
    readonly defaultBehavior?: string;
};

export type ComponentPropertyNumber = {

    readonly type: 'number';
    readonly control?: 'number' | 'range';
    readonly defaultValue?: number;
    readonly min?: number;
    readonly max?: number;
    readonly step?: number;
};

export type ComponentPropertyObject<T extends Record<any, any> = Record<any, any>> = {

    readonly type: 'object';
    readonly defaultValue?: T;
};

export type ComponentPropertyString = {

    readonly type: 'string';
    readonly defaultValue?: string;
};

export type ComponentPropertyTypes =
    | ComponentPropertyArray
    | ComponentPropertyBoolean
    | ComponentPropertyColor
    | ComponentPropertyDate
    | ComponentPropertyEnum
    | ComponentPropertyEnumList
    | ComponentPropertyFile
    | ComponentPropertyFunction
    | ComponentPropertyNumber
    | ComponentPropertyObject
    | ComponentPropertyString;

export type ComponentProperty = {

    readonly description: string;
    readonly required?: boolean;
    readonly typeDetail?: string;
    readonly autoType?: boolean;
} & ComponentPropertyTypes;
