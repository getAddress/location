import AttributeValues from "./AttributeValues";
import Client, { LocationSuggestion } from 'getaddress-api';
import { OutputFields } from "./OutputFields";
export default class Location {
    readonly input: HTMLInputElement;
    readonly client: Client;
    readonly output_fields: OutputFields;
    readonly attributeValues: AttributeValues;
    private filterTimer?;
    private blurTimer?;
    private container?;
    private list?;
    private selectedIndex;
    private showAllClicked?;
    private documentClick?;
    constructor(input: HTMLInputElement, client: Client, output_fields: OutputFields, attributeValues: AttributeValues);
    destroy(): void;
    private destroyList;
    private destroyContainer;
    private destroyInput;
    private onInputFocus;
    private onInputPaste;
    private onContainerKeyUp;
    private onContainerKeyDown;
    private onContainerFocusOut;
    build(): void;
    private debug;
    keyDownHandler: (event: KeyboardEvent) => void;
    handlePageUpKey: (event: KeyboardEvent) => void;
    handlePageDownKey: (event: KeyboardEvent) => void;
    handleHomeKey: (event: KeyboardEvent) => void;
    handleComponentBlur: (event: Event, force?: boolean) => void;
    handleEndKey: (event: KeyboardEvent) => void;
    handleEnterKey: (event: KeyboardEvent) => void;
    handleSuggestionSelected: (event: Event, indexNumber: number) => Promise<void>;
    private bind;
    private setOutputfield;
    handleKeyDownDefault: (event: KeyboardEvent) => void;
    handleKeyUp: (event: KeyboardEvent) => void;
    handleUpKey(event: KeyboardEvent): void;
    handleDownKey: (event: KeyboardEvent) => void;
    setSuggestionFocus: (event: Event, index: number) => void;
    addSuggestionFocusedClassName: (suggestion: HTMLElement) => void;
    removeSuggestionFocusedClassName: (suggestions: HTMLCollection) => void;
    populateList: () => Promise<void>;
    private addContainerFocusedClassNames;
    private removeContainerFocusedClassNames;
    private addInputShowClassNames;
    private removeInputShowClassNames;
    private removeListShowAllClassNames;
    clearList: () => void;
    getListItem: (index: number, suggestion: LocationSuggestion, length: number) => HTMLElement;
    private isPostcode;
}
