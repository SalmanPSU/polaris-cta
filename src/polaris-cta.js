import { LitElement, html, css } from 'lit';

class PolarisCta extends LitElement {
  static get properties() {
    return {
      primaryoutlined: {
        type: Boolean,
        reflect: true
      },

      primaryfilled: {
        type: Boolean,
        reflect: true
      },

      tinted: {
        type: Boolean,
        reflect: true
      },

      lightoutlined: {
        type: Boolean,
        reflect: true
      },

      lightfilled: {
        type: Boolean,
        reflect: true
      },
    }
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        margin: 32px;
      }

      /** From Midterm code by the professor (Focus/Hover/Active) - Dont use // for comments! */
      /** .link:focus,
      .link:hover,
      :host([active]) .link{
        background-color: #e4e5e7;
        border: 2px solid #e4e5e7;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
      } */

      p {
        font-weight: 700;
        display: inline-block;
      }

      :host([primaryoutlined]) p,
      :host([primaryfilled]) p,
      :host([tinted]) p {
        color: #000;
      }

      :host([lightoutlined]) p,
      :host([lightfilled]) p {
        color: #fff;
      }

      a {
        font-style: italic;
        font-weight: 700;
        text-decoration: none;
        display: inline-block;
        margin-left: 32px;
        padding: 12px 32px;
      }

      :host([primaryoutlined]) a {
        border: 2px solid #005fa9;
        background-color: #fff;
        color: #005fa9;
      }

      :host([primaryfilled]) a {
        border: 2px solid #005fa9;
        background-color: #005fa9;
        color: #fff;
      }

      :host([tinted]) a {
        border: 2px solid #fff;
        background-color: #4f627c;
        color: #b0e1ff;
      }

      :host([lightoutlined]) a {
      border: 2px solid #fff;
      background-color: #011e44;
      color: #a5e7fe;
      }

      :host([lightfilled]) a {
      border: 2px solid #a5e7fe;
      background-color: #a5e7fe;
      color: #011e44;
      }

      .wrapper {
        height: 48px;
        padding: 16px;
        display: block;
        border: 2px solid black;
      }

      :host([primaryoutlined]) .wrapper,
      :host([primaryfilled]) .wrapper {
      background-color: #fff;
      }

      :host([tinted]) .wrapper {
      background-color: #e4e5e7;
      }

      :host([lightoutlined]) .wrapper,
      :host([lightfilled]) .wrapper {
      background-color: #011e44;
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
      <div class="wrapper">
        <p>GET THE NEWS BY EMAIL</p>
        <a href="${this.link}" target="_blank"><slot>${this.text}</slot></a>
      </div>
    `;
  }
}

customElements.define('polaris-cta', PolarisCta);