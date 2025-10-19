import { LitElement } from 'lit';
type HTMLOrSVG = Element & (HTMLElement | SVGElement);
type DSSSEEvent = {
    id: string;
    type: string;
    argsRaw: Record<string, string>;
    el: HTMLOrSVG;
};
export declare class DataSPAInspector extends LitElement {
    signals: {};
    show: boolean;
    panel: string;
    highlightClassName: string;
    elementPatchEvents: DSSSEEvent[];
    signalPatchEvents: DSSSEEvent[];
    maxPatchEvents: number;
    maxSignalEvents: number;
    signalTableNotObject: boolean;
    connectedCallback(): void;
    static styles: import("lit").CSSResult;
    datastarFetchHandler: (evt: CustomEvent) => void;
    replayEvent(sseEvent: DSSSEEvent): (_: Event) => void;
    sendToConsole(signal: any): (evt: Event) => void;
    sendToClipboard(signal: any): (evt: Event) => void;
    highlightSignal(signal: any): () => void;
    unhighlightSignal(): void;
    signalDetails(signal: DSSSEEvent): string;
    documentFragmentFromEvent(event: DSSSEEvent): DocumentFragment | null;
    getSelectors(evt: DSSSEEvent): string[];
    summaryForSignalEvent(event: DSSSEEvent): string;
    summaryForElementEvent(event: DSSSEEvent): string;
    htmlFromEvent(event: DSSSEEvent): string;
    renderSSE(): import("lit-html").TemplateResult<1>;
    renderServerSignals(): import("lit-html").TemplateResult<1>;
    renderSignals(): import("lit-html").TemplateResult<1>;
    setMaxSignalEvents(event: Event): void;
    setMaxSSEEvents(event: Event): void;
    clearSSEEvents(): void;
    clearSignalEvents(): void;
    renderSSEFooter(): import("lit-html").TemplateResult<1>;
    renderSignalsFooter(): import("lit-html").TemplateResult<1>;
    renderServerSignalsFooter(): import("lit-html").TemplateResult<1>;
    protected render(): import("lit-html").TemplateResult<1>;
}
export {};
//# sourceMappingURL=dataspa-inspector.d.ts.map