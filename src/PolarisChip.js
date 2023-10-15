import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: {type: Boolean, reflect: true},
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 16px 16px 0;
      }
      .link:focus,
      .link:hover,
      :host([active]) .link {
        background-color: #e4e5e7;
        border: 2px solid #e4e5e7;
        border-radius: 2px;
        color: #004fa9;
        text-decoration: underline;
      }

      .link {
        font-weight: bold;
        padding: 8px 4px;
        border: 2px solid #ccc;
        color: #444;
        font-size: 16px;
        text-decoration: none;
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.link = 'https://www.psu.edu/news/academics/';
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}

