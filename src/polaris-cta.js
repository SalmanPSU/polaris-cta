import { LitElement, html, css } from 'lit';

class PolarisCta extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
      },

      link: {
        type: String,
      },

      type: {
        type: String,
        reflect: true
      },

      outlined: {
        type: Boolean,
        reflect: true
      },

      filled: {
        type: Boolean,
        reflect: true
      },
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 32px;
        --polaris-cta-white: #ffffff;
        --polaris-cta-gray:#E4E5E7;
        --polaris-cta-darkgray: #4f627C;
        --polaris-cta-blue: #1E407C;
        --polaris-cta-darkblue: #001E44;
        --polaris-cta-lightblue:#96BEE6;
        --polaris-cta-black: #000000;
      }

      a {
        font-style: italic;
        font-weight: 700;
        text-decoration: none;
        display: inline-flex;
        position: relative;
        top: -32px;
        left: 20px;
        padding: 12px 32px;
      }

      :host([type="primary"][outlined]) a {
        border: 2px solid var(--polaris-cta-blue);
        background-color: var(--polaris-cta-white);
        color: var(--polaris-cta-blue);
        transition: 0.1s;
      }

      :host([type="primary"][outlined]) a:focus,
      :host([type="primary"][outlined]) a:hover {
        border: 2px solid var(--polaris-cta-blue);
        background-color: var(--polaris-cta-blue);
        color: var(--polaris-cta-white);
      }

      :host([type="primary"][filled]) a {
        border: 2px solid var(--polaris-cta-blue);
        background-color: var(--polaris-cta-blue);
        color: var(--polaris-cta-white);
        transition: 0.1s;
      }

      :host([type="primary"][filled]) a:focus,
      :host([type="primary"][filled]) a:hover {
        border: 2px solid var(--polaris-cta-blue);
        background-color: var(--polaris-cta-white);
        color: var(--polaris-cta-blue);
      }

      :host([type="tinted"]) a {
        border: 2px solid var(--polaris-cta-white);
        background-color: var(--polaris-cta-darkgray);
        color: var(--polaris-cta-lightblue);
      }

      :host([type="tinted"]) a:focus,
      :host([type="tinted"]) a:hover {
        border: 2px solid var(--polaris-cta-darkgray);
        background-color: var(--polaris-cta-white);
        color: var(--polaris-cta-darkgray);
      }

      :host([type="light"][outlined]) a {
        border: 2px solid var(--polaris-cta-white);
        background-color: var(--polaris-cta-darkblue);
        color: var(--polaris-cta-lightblue);
        transition: 0.1s;
      }

      :host([type="light"][outlined]) a:focus,
      :host([type="light"][outlined]) a:hover {
        border: 2px solid var(--polaris-cta-lightblue);
        background-color: var(--polaris-cta-lightblue);
        color: var(--polaris-cta-darkblue);
      }

      :host([type="light"][filled]) a {
        border: 2px solid var(--polaris-cta-lightblue);
        background-color: var(--polaris-cta-lightblue);
        color: var(--polaris-cta-darkblue);
        transition: 0.1s;
      }

      :host([type="light"][filled]) a:focus,
      :host([type="light"][filled]) a:hover {
        border: 2px solid var(--polaris-cta-white);
        background-color: var(--polaris-cta-darkblue);
        color: var(--polaris-cta-lightblue);
      }
    `;
  }

  constructor() {
    super();
    this.text = 'Subscribe';
    this.link = 'https://psu.edu';
  }

  render() {
    return html`
      <a href="${this.link}" target=”_blank”><slot>${this.text}</slot></a>
    `;
  }
}

customElements.define('polaris-cta', PolarisCta);