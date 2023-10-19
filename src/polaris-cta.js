import { LitElement, html, css } from 'lit';

class PolarisCta extends LitElement {
  static properties = {
    header: { type: String },
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
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
    `;
  }

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div>
        <p>test</p><a class="link" href="${this.link}"><slot>${this.name}</slot></a>
      </div>
    `;
  }
}