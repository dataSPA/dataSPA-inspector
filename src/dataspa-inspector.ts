import {LitElement, html, css, nothing} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import {miniIcon} from './icon';
import {
  bracketsIcon,
  clipboardIcon,
  consoleIcon,
  htmlIcon,
  minimiseIcon,
  replayIcon,
  serverSignalsIcon,
  signalsIcon,
  tableIcon,
  toggleOffIcon,
  toggleOnIcon,
} from './snippets';

const DATASPA_FETCH_EVENT = 'datastar-fetch';

type HTMLOrSVG = Element & (HTMLElement | SVGElement);

type DSSSEEvent = {
  id: string;
  type: string;
  argsRaw: Record<string, string>;
  el: HTMLOrSVG;
};

@customElement('dataspa-inspector')
export class DataSPAInspector extends LitElement {
  // @query('#sortable-container')
  // sortContainer!: HTMLElement

  @property({type: Object}) signals = {};

  @state()
  show = false;

  @state()
  panel = 'signals';

  highlightClassName = '__dataSPAHighlight';

  @state()
  elementPatchEvents: DSSSEEvent[] = [];

  @state()
  signalPatchEvents: DSSSEEvent[] = [];

  @state()
  maxPatchEvents = 20;

  @state()
  maxSignalEvents = 20;

  @state()
  signalTableNotObject = false;

  override connectedCallback(): void {
    super.connectedCallback();
    if (!document.getElementById('__dataSPAHighlightStyle')) {
      const style = document.createElement('style');
      style.id = '__dataSPAHighlightStyle';
      style.textContent = `
        .${this.highlightClassName} {
          outline: 3px solid magenta !important;
          outline-offset: -3px !important;
        }
      `;
      document.head.appendChild(style);
    }
    document.addEventListener(
      DATASPA_FETCH_EVENT,
      this.datastarFetchHandler as EventListener
    );
    this.setAttribute('data-attr-signals', '$');
  }

  static override styles = css`
    .minified {
      position: fixed;
      bottom: 5px;
      right: 5px;
      opacity: 0.85;
      z-index: 1000;
    }
    .minified img {
      width: 50px;
      border-radius: 50%;
      border: 3px solid rgba(200, 200, 200, 1);
    }
    .signals-footer {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      padding-top: 5px;
    }

    #minimise-icon {
      transform: scaleX(-1);
    }

    .active {
      background-color: #d55634;
      border: none;
    }

    header button {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    hr {
      margin: 1px;
      padding: 0;
      background-color: black;
      border: none;
      height: 1px;
    }

    .container {
      position: fixed;
      display: block;
      bottom: 5px;
      right: 5px;
      background: grey;
      opacity: 0.9;
      border-radius: 0.5rem;
      max-width: 50vw;
      z-index: 1000;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 3px 3px 3px;
    }
    footer {
      padding: 0 5px 0.5rem 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }

    .nav > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .signals {
      overflow-x: scroll;
      padding: 0 5px;
    }

    .signals table {
      width: 100%;
      border-collapse: collapse;
      padding-top: 5px;
      margin-right: 5px;
    }

    .signals td {
      white-space: nowrap;
    }

    .sse {
      overflow: scroll;
      padding: 0 5px;
      min-height: 100px;
      max-height: 30vh;
    }

    .actions {
      display: flex;
      position: sticky;
      right: 0;
      background-color: grey;
      flex-direction: row;
      gap: 3px;
      height: 20px;
    }

    svg {
      height: 20px;
    }

    .event-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 10px;
    }

    .event-row pre {
      white-space: pre-wrap;
      word-wrap: break-word;
      padding: 2px;
      margin: 0;
    }
  `;

  datastarFetchHandler = (evt: CustomEvent) => {
    const {detail} = evt;
    if (
      !detail ||
      !['datastar-patch-elements', 'datastar-patch-signals'].includes(
        detail.type
      )
    ) {
      return;
    }
    if (detail.inspectorReplayed!) {
      return;
    }
    switch (detail.type) {
      case 'datastar-patch-elements':
        this.elementPatchEvents = [...this.elementPatchEvents, detail];
        if (this.elementPatchEvents.length > this.maxPatchEvents) {
          this.elementPatchEvents = this.elementPatchEvents.slice(1);
        }
        break;
      case 'datastar-patch-signals':
        this.signalPatchEvents = [...this.signalPatchEvents, detail];
        if (this.signalPatchEvents.length > this.maxSignalEvents) {
          this.signalPatchEvents = this.signalPatchEvents.slice(1);
        }
        break;
    }
  };

  replayEvent(sseEvent: DSSSEEvent) {
    return (_: Event) => {
      document.dispatchEvent(
        new CustomEvent(DATASPA_FETCH_EVENT, {
          detail: {...sseEvent, inspectorReplayed: true},
        })
      );
    };
  }

  sendToConsole(signal: any) {
    return (evt: Event) => {
      evt.stopPropagation();
      evt.preventDefault();
      console.table(signal);
    };
  }

  sendToClipboard(signal: any) {
    return (evt: Event) => {
      evt.stopPropagation();
      evt.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(JSON.stringify(signal, null, 2));
      }
    };
  }

  highlightSignal(signal: any) {
    return () => {
      // this.dispatchEvent(new CustomEvent('dataspa-highlight-signal', { detail: signal }))

      const xpath = `//*[ @*[starts-with(name(), 'data-') and contains(., '$${signal}')] ]`;
      const snapshot = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
      );

      const results = [];
      for (let i = 0; i < snapshot.snapshotLength; i++) {
        results.push(snapshot.snapshotItem(i));
        // Apply highlight class
        const element = snapshot.snapshotItem(i) as HTMLElement;
        element.classList.add(this.highlightClassName);
      }
    };
  }

  unhighlightSignal() {
    let elements = document.getElementsByClassName(this.highlightClassName);
    let elems = Array.from(elements);
    for (const element of elems) {
      element.classList.remove(this.highlightClassName);
    }
  }

  signalDetails(signal: DSSSEEvent) {
    if (!signal) {
      return '';
    }
    if (!signal.argsRaw) {
      return '';
    }
    if (!signal.argsRaw.signals) {
      return '';
    }

    return JSON.stringify(JSON.parse(signal.argsRaw.signals), null, 2);
  }

  documentFragmentFromEvent(event: DSSSEEvent): DocumentFragment | null {
    if (!event) {
      return null;
    }
    if (!event.argsRaw) {
      return null;
    }
    if (!event.argsRaw.elements) {
      return null;
    }

    const detailContent = event.argsRaw.elements;
    const elementsWithSvgsRemoved = detailContent.replace(
      /<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim,
      ''
    );
    const hasHtml = /<\/html>/.test(elementsWithSvgsRemoved);
    const hasHead = /<\/head>/.test(elementsWithSvgsRemoved);
    const hasBody = /<\/body>/.test(elementsWithSvgsRemoved);

    const newDocument = new DOMParser().parseFromString(
      hasHtml || hasHead || hasBody
        ? detailContent
        : `<body><template>${detailContent}</template></body>`,
      'text/html'
    );
    let newContent = document.createDocumentFragment();
    if (hasHtml) {
      newContent.appendChild(newDocument.documentElement);
    } else if (hasHead && hasBody) {
      newContent.appendChild(newDocument.head);
      newContent.appendChild(newDocument.body);
    } else if (hasHead) {
      newContent.appendChild(newDocument.head);
    } else if (hasBody) {
      newContent.appendChild(newDocument.body);
    } else {
      newContent = newDocument.querySelector('template')!.content;
    }

    return newContent;
  }

  getSelectors(evt: DSSSEEvent): string[] {
    if (!evt) {
      return [];
    }

    if (evt.argsRaw && evt.argsRaw.selector) {
      return [evt.argsRaw.selector];
    }

    let selectors: string[] = [];

    const detailDocument = this.documentFragmentFromEvent(evt);

    if (!detailDocument) {
      return selectors;
    }

    for (const child of detailDocument.children) {
      if (child instanceof HTMLHtmlElement) {
        selectors.push('DOCUMENT');
      } else if (child instanceof HTMLBodyElement) {
        selectors.push('BODY');
      } else if (child instanceof HTMLHeadElement) {
        selectors.push('HEAD');
      } else {
        selectors.push(`#${child.id}`);
      }
    }

    return selectors;
  }

  summaryForSignalEvent(event: DSSSEEvent): string {
    if (!event) {
      return 'UNKNOWN';
    }

    if (!event.argsRaw || !event.argsRaw.signals) {
      return 'UNKNOWN';
    }

    const obj = JSON.parse(event.argsRaw.signals);
    const result = Object.keys(obj).reduce(function (r, k) {
      return r.concat([k]);
    }, [] as string[]);

    return result.join(', ');
  }

  summaryForElementEvent(event: DSSSEEvent): string {
    const selectors = this.getSelectors(event);
    return `${selectors.join(', ')}`;
  }

  htmlFromEvent(event: DSSSEEvent): string {
    const docFragment = this.documentFragmentFromEvent(event);

    if (!docFragment) {
      return '';
    }

    const serializer = new XMLSerializer();
    const xmlnAttribute = ' xmlns="http://www.w3.org/1999/xhtml"';
    const regEx = new RegExp(xmlnAttribute, 'g');
    let newStr = serializer.serializeToString(docFragment);
    newStr = newStr.replace(regEx, '');
    return newStr;
  }

  renderSSE() {
    return html`
      <div class="sse">
        ${this.elementPatchEvents.map(
          (event) => html`
            <div class="event-row">
              <details>
                <summary>${this.summaryForElementEvent(event)}</summary>
                <pre>${this.htmlFromEvent(event)}</pre>
              </details>
              <div class="actions">
                <span @click="${this.replayEvent(event)}">${replayIcon}</span>
                <span @click="${this.sendToConsole(event)}"
                  >${consoleIcon}</span
                >
                <span @click="${this.sendToClipboard(event)}"
                  >${clipboardIcon}</span
                >
              </div>
            </div>
          `
        )}
      </div>
    `;
  }

  renderServerSignals() {
    return html`
      <div class="sse">
        ${this.signalPatchEvents.map(
          (event) => html`
            <div class="event-row">
              <details>
                <summary>${this.summaryForSignalEvent(event)}</summary>
                <pre>${this.signalDetails(event)}</pre>
              </details>
              <div class="actions">
                <span @click="${this.replayEvent(event)}">${replayIcon}</span>
                <span @click="${this.sendToConsole(event)}"
                  >${consoleIcon}</span
                >
                <span @click="${this.sendToClipboard(event)}"
                  >${clipboardIcon}</span
                >
              </div>
            </div>
          `
        )}
      </div>
    `;
  }

  renderSignals() {
    return html`
      <div class="signals">
        ${this.signalTableNotObject
          ? html`
              <pre>
${JSON.stringify(this.signals, null, 2)}
            </pre
              >
            `
          : html`
              <table>
                <tbody>
                  ${map(
                    Object.entries(this.signals),
                    (key, _) => html`
                      <tr
                        @touchstart="${this.highlightSignal(key[0])}"
                        @mouseenter="${this.highlightSignal(key[0])}"
                        @mouseleave="${this.unhighlightSignal}"
                      >
                        <td>${key[0]}</td>
                        <td>
                          <div>${JSON.stringify(key[1])}</div>
                        </td>
                        <td class="actions">
                          <span @click="${this.sendToConsole(key[1])}"
                            >${consoleIcon}</span
                          >
                          <span @click="${this.sendToClipboard(key[1])}"
                            >${clipboardIcon}</span
                          >
                        </td>
                      </tr>
                    `
                  )}
                </tbody>
              </table>
            `}
      </div>
    `;
  }

  setMaxSignalEvents(event: Event) {
    let newValue = parseInt((event.target as HTMLInputElement).value);
    if (isNaN(newValue)) return;
    if (
      newValue < this.maxSignalEvents &&
      this.signalPatchEvents.length > newValue
    ) {
      this.signalPatchEvents = this.signalPatchEvents.slice(
        this.maxSignalEvents - newValue
      );
    }
    this.maxSignalEvents = newValue;
  }

  setMaxSSEEvents(event: Event) {
    let newValue = parseInt((event.target as HTMLInputElement).value);
    if (isNaN(newValue)) return;
    if (
      newValue < this.maxPatchEvents &&
      this.elementPatchEvents.length > newValue
    ) {
      this.elementPatchEvents = this.elementPatchEvents.slice(
        this.maxPatchEvents - newValue
      );
    }
    this.maxPatchEvents = newValue;
  }

  clearSSEEvents() {
    this.elementPatchEvents = [];
  }

  clearSignalEvents() {
    this.signalPatchEvents = [];
  }

  renderSSEFooter() {
    return html`
      <div class="sse-footer">
        <label for="max-events"
          >Max Events:
          <input
            type="number"
            id="max-events"
            min="1"
            max="1000"
            value="${this.maxPatchEvents}"
            @input="${this.setMaxSSEEvents}"
          />
        </label>
        <button @click="${this.clearSSEEvents}">Clear</button>
      </div>
    `;
  }

  renderSignalsFooter() {
    return html`
      <div
        class="signals-footer"
        @click="${() =>
          (this.signalTableNotObject = !this.signalTableNotObject)}"
      >
        ${bracketsIcon}
        ${this.signalTableNotObject ? toggleOnIcon : toggleOffIcon} ${tableIcon}
      </div>
    `;
  }

  renderServerSignalsFooter() {
    return html`
      <div class="sse-footer">
        <label for="max-events"
          >Max Events:
          <input
            type="number"
            id="max-events"
            min="1"
            max="1000"
            value="${this.maxSignalEvents}"
            @input="${this.setMaxSignalEvents}"
          />
        </label>
        <button @click="${this.clearSignalEvents}">Clear</button>
      </div>
    `;
  }

  protected override render() {
    if (!this.show) {
      return html`
        <div class="minified" @click="${() => (this.show = true)}">
          <img src="data:image/webp;base64,${miniIcon}" />
        </div>
      `;
    }
    let panel: Function;
    let footer: Function;
    switch (this.panel) {
      case 'signals':
        panel = this.renderSignals.bind(this);
        footer = this.renderSignalsFooter.bind(this);
        break;
      case 'server-signals':
        panel = this.renderServerSignals.bind(this);
        footer = this.renderServerSignalsFooter.bind(this);
        break;
      case 'sse':
        panel = this.renderSSE.bind(this);
        footer = this.renderSSEFooter.bind(this);
        break;
      default:
        panel = this.renderSignals.bind(this);
        footer = this.renderSignalsFooter.bind(this);
    }
    return html`
      <div class="container">
        <header class="nav">
          <div>dataSPA Inspector</div>
          <div>
            <button
              @click="${() => (this.panel = 'signals')}"
              class=${this.panel === 'signals' ? 'active' : nothing}
            >
              ${signalsIcon}
            </button>
            <button
              @click="${() => (this.panel = 'server-signals')}"
              class=${this.panel === 'server-signals' ? 'active' : nothing}
            >
              ${serverSignalsIcon} ${this.signalPatchEvents.length}
            </button>
            <button
              @click="${() => (this.panel = 'sse')}"
              class=${this.panel === 'sse' ? 'active' : nothing}
            >
              ${htmlIcon} ${this.elementPatchEvents.length}
            </button>
          </div>
        </header>
        <hr />
        ${panel()}
        <hr />
        <footer>
          <div>${footer()}</div>
          <div id="minimise-icon" @click=${() => (this.show = false)}>
            ${minimiseIcon}
          </div>
        </footer>
      </div>
    `;
  }
}
