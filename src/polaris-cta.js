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
        margin: 0 12px 12px 0;
      }
      
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

      .link {
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        border: 2px solid #444;
        color: #444;
        font-size: 16px;
      }

      .footer{
        display: inline-flex;
        border: 2px solid black;
        padding: 2px;
      }

      .button {

      }

      p {
        font-weight: 700;
        display: inline-block;
      }

      a {
        font-style: italic;
        font-weight: 700;
        letter-spacing: .025rem;
        display: inline-block;
        margin-left: 32px;
      }

      .wrapper {
        height: 48px;
        padding: 16px;
        display: inline-block;
        border: 2px solid black;
        background-color: white;
      }
    `;
  }

  constructor() {
    super();
    this.
    this.header = 'My app';
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