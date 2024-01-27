/**
 * @name rz-modal_dialog
 * @abstract web component for dialog or modal
 * @description show or hide dialog or modal, with/without footer and red/yellow/green title
 * @version 0.1.0
 * @author ZHENG Robert
 * @param title="<title of dialog|modal>"
 * @param body="<content text>"
 * @param footer="<footer text>"
 * @param footer="<>" => no property or empty: no footer
 */

const _style = `
<style>

:root{

  --border-color: oklch(86.69% 0 0);

  --red: oklch(62.8% 0.25768330773615683 29.2338851923426);
  --yellow: oklch(96.8% 0.21100590772552355 109.76923207652125);
  --green: oklch(86.8% 0.156 144.09);

  --color: oklch(0% 0 0);
  --color-inverted: oklch(100% 0 0);

  --content-background: oklch(92.17% 0.055825473086886186 219.64177080087617);

  font-family: "Inter", -apple-system, BlinkMacSystemFont, Roboto, Ubuntu, "Segeo UI", "Helvetica Neue", Arial, sans-serif;
  color: var(--color);
  font-size: 16px;
}

  dialog {
   /* border: 1px solid var(--border-color);
    border-radius: 10px; */
    border: none;
    background: none;

    min-width: 200px;
    min-height: 100px;
    max-width:400px;
    max-height: 300px;

    margin: auto;
  }
  dialog:not([open]) {
    display: none;
  }
  dialog::backdrop {
    /*background-color: oklch(100% 0 0 / 90%); */
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }

  .rz_modal_close {
    background: #5cb85c;
    color: var(--color-inverted);
    float: right;
    /*font-size: 28px;*/
    font-weight: bold;
    padding-right: 5px;
    border-radius: 10px;
  }
  .rz_modal_close:hover,
  .rz_modal_close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  .rz_modal {
    overflow: auto; /* Enable scroll if needed */
  }
  .rz_modal_content {
    margin: auto;
    padding: 0;
    border: 1px solid var(--broder-color);
    border-radius: 10px;
    background-color: var(--content-background);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .rz_modal_header, .rz_modal_footer {
    height: fit-content;
    text-align:center;
    align-items: center;

    background-color: #5cb85c;
    color: var(--color-inverted);
    border-radius: 10px 10px 0 0;
    padding: 5px;
  }
    .rz_modal_body {
    /*padding: 2px 16px;*/
    flex: 1;
    align-items: center;

    border-radius: 0 0 10px 10px;
    height: 100%;
    padding: 5px;
    background-color: var(--content-background);
  }
  .rz_modal_footer {
    background-color: var(--content-background);
    border-top: 1px solid var(--border-color);
    border-radius: 0 0 10px 10px;
    color: var(--color);
  }
  .rz_modal_footer > span {
    font-size: 0.8rem;
  }

.red{
    background: var(--red);
}
.yellow{
    background: var(--yellow);
    color: var(--color);
}
.green {
    background: var(--green);
}

</style>
`;

class MyModalDialog extends HTMLElement {
  constructor() {
    super();
    //this.shadow = this.attachShadow({ mode: 'open' });

    this._footer = true;
  }

  get dialog_type() {
    return this.getAttribute("dialog_type");
  }
  set dialog_type(val) {
    this.setAttribute("dialog_type", val);
  }

  get title() {
    return this.getAttribute("title");
  }
  set title(val) {
    this.setAttribute("title", val);
    this.render();
  }

  get body() {
    return this.getAttribute("body");
  }
  set body(val) {
    this.setAttribute("body", val);
  }

  get footer() {
    try {
      if (this.getAttribute("footer").length > 0) {
        this._footer = true;
      }
    } catch (error) {
      this._footer = false;
    }

    return this.getAttribute("footer");
  }
  set footer(val) {
    if (val.length > 0) {
      this._footer = true;
    } else {
      this._footer = false;
    }
    this.setAttribute("footer", val);
  }

  get color() {
    return this.getAttribute("color");
  }
  set color(val) {
    this.setAttribute("color", val);
  }

  content() {
    let footer_content = "";
    if (this._footer) {
      footer_content = `
        <div id="rz_modal_footer" class="rz_modal_footer">
            <span>${this.footer}</span>
        </div>`;
    }
    return `
      <dialog id="rz_modal" class="rz_modal">
      <div id="rz_modal_content" class="rz_modal_content">
        <div id="rz_modal_header" class="rz_modal_header ${this.color}">
            <span id="rz_modal_close" class="rz_modal_close  ${this.color}">&times;</span> 
            <span>${this.title}</span>         
        </div>
        <div id="rz_modal_body" class="rz_modal_body">
          <p>${this.body}</p>
        </div>
        ${footer_content}
      </div>
      </dialog>
      `;
  }

  static get observedAttributes() {
    return ["dialog_type", "title", "body", "footer", "color"];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    document.removeEventListener(
      "click",
      document.getElementById("rz_modal_close")
    );
  }

  render() {
    this.innerHTML = _style;
    this.innerHTML += this.content();

    document.getElementById("rz_modal_close").addEventListener("click", () => {
      document.getElementById("rz_modal").close();
    });
  }
}
customElements.define("rz-modal_dialog", MyModalDialog);
