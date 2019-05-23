import { LitElement, html, css } from 'lit-element';

class SpaceTool extends LitElement {
  static get styles() {
    return css`
      :host {
        background: lightyellow;
        display: block;
        padding: 1rem;
      }
      button {
        font-family: sans-serif;
        font-size: 1rem;
      }
    `;
  }
  render() {
    return html`
      <button @click=${this.onClickFind}>
        Find position
      </button>
    `;
  }

  onClickFind() {
    this.dispatchEvent(new CustomEvent('fetch-position'));
  }
}

window.customElements.define('space-tool', SpaceTool);
