import { Options } from "./Options";
export default class AttributeValues {
    readonly options: Options;
    readonly listId: string;
    readonly listClassName: string;
    readonly listAdditionalClassNames?: string[];
    readonly listShowAllClassName: string;
    readonly listShowAllAdditionalClassNames?: string[];
    readonly containerId: string;
    readonly containerClassName: string;
    readonly containerAdditionalClassNames?: string[];
    readonly containerFocusedClassName: string;
    readonly containerFocusedAdditionalClassNames?: string[];
    readonly suggestionClassName: string;
    readonly suggestionAdditionalClassNames?: string[];
    readonly suggestionFocusedClassName: string;
    readonly suggestionFocusedAdditionalClassNames?: string[];
    readonly id_prefix?: string;
    readonly inputClassName: string;
    readonly inputAdditionalClassNames?: string[];
    readonly inputShowClassName: string;
    readonly inputShowAdditionalClassNames?: string[];
    constructor(options: Options, index: number);
    getSuggestionId(index: number): string;
}
