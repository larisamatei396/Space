import { LitElement, html, css } from 'lit-element';

class SpaceData extends LitElement {
  static get styles() {
    // host referentiaza space-data (render -> SpaceMain)
    return css`
      :host {
        background: lightblue;
        display: block;
        padding: 1rem;
      }
    `;
  }

  // returneaza key-value (unde valorile sunt obiecte)
  static get properties() {
    return {
      lat: { type: Number },
      lon: { type: Number },
      place: { type: String },
    };
  }

  // nu mai randam alte elemente custom, ci niste div-uri
  // latitudine si longitudine
  render() {
    return html`
      <div>Lat: <output>${this.lat}</output></div>
      <div>Lon: <output>${this.lon}</output></div>
      <div>Place: <span>${this.place}</span></div>
    `;
  }
}

window.customElements.define('space-data', SpaceData);
