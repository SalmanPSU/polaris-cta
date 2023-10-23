import { LitElement, html, css } from 'lit';

class PolarisCta extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },

      link: {
        type: String,
      },

      primaryOutlined: {
        type: Boolean,
        reflect: true
      },

      primaryFilled: {
        type: Boolean,
        reflect: true
      },

      tinted: {
        type: Boolean,
        reflect: true
      },

      lightOutlined: {
        type: Boolean,
        reflect: true
      },

      lightFilled: {
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

      /** From Midterm code by the professor - Dont use // for comments! */
      .link:focus,
      .link:hover,
      :host([active]) .link{
        background-color: #e4e5e7;
        border: 2px solid #e4e5e7;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
      }

      p {
        font-weight: 700;
        display: inline-block;
      }

      :host([primaryOutlined]) p,
      :host([primaryFilled]) p,
      :host([tinted]) p {
        color: #000;
      }

      :host([lightOutlined]) p,
      :host([lightFilled]) p {
        color: #fff;
      }

      a {
        font-style: italic;
        font-weight: 700;
        text-decoration: none;
        display: inline-block;
        margin-left: 32px;
      }

      :host([primaryOutlined]) a {
        border: 2px solid #005fa9;
        background-color: #fff;
        color: #005fa9;
        padding: 12px 32px;
      }

      :host([primaryFilled]) a {
        border: 2px solid #005fa9;
        background-color: #005fa9;
        color: #fff;
        padding: 12px 32px;
      }

      :host([tinted]) a {
        border: 2px solid #fff;
        background-color: #4f627c;
        color: #b0e1ff;
        padding: 12px 32px;
      }

    :host([lightOutlined]) a {
      border: 2px solid #fff;
      background-color: #011e44;
      color: #a5e7fe;
      padding: 12px 32px;
    }

    :host([lightFilled]) a {
      border: 2px solid #a5e7fe;
      background-color: #a5e7fe;
      color: #011e44;
      padding: 12px 32px;
    }

      .wrapper {
        height: 48px;
        padding: 16px;
        display: inline-block;
        border: 2px solid black;
        background-color: white;
      }

      :host([primaryOutlined]) .wrapper,
      :host([primaryFilled]) .wrapper {
      background-color: #fff;
    }

      :host([tinted]) .wrapper {
      background-color: #e4e5e7;
    }

      :host([lightOutlined]) .wrapper,
      :host([lightFilled]) .wrapper {
      background-color: #011e44;
    }
    `;
  }

  constructor() {
    super();
    this.name = 'Subscribe';
    this.link = 'https://psu.edu';
  }

  render() {
    return html`
      <div class="wrapper">
        <p>GET THE NEWS BY EMAIL</p>
        <a class="link" href="${this.link}"><slot>${this.name}</slot></a>
      </div>
    `;
  }
}

customElements.define('polaris-cta', PolarisCta);