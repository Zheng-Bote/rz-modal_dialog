<div id="top" align="center">

# rz-modal_dialog

A Web Component for HTML dialog or modal

show or hide dialog or modal, with/without footer and red/yellow/green title

</div>

## Authors

- [@Zheng-Bote](https://www.github.com/Zheng-Bote)

## Version

v0.1.0

## License

[MIT](https://choosealicense.com/licenses/mit/)

## API Reference

#### Parameters

```
    <rz-modal_dialog
      id="rz-dialog"
      title="my title"
      body="my body"
      footer="my footer"
      >
      </rz-modal_dialog>
```

```
    <rz-modal_dialog
      id="rz-dialog"
      title="my title"
      body="my body"
      footer=""
      >
      </rz-modal_dialog>
```

```
    <rz-modal_dialog
      id="rz-dialog"
      title="my title"
      body="my body"
      >
      </rz-modal_dialog>
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `title`   | `string` | "title of dialog or modal"            |
| `body`    | `string` | "content text"                        |
| `footer`  | `string` | "footer text"                         |
| `footer`  | `string` | "" => no property or empty: no footer |

## Installation

used folder structure

```bash
.
├── assets
│   ├── css
│   │   └── index.css
│   ├── img
│   │   ├── Screenshot_default_footer_green.png
│   │   ├── Screenshot_default_footer_new_text.png
│   │   ├── Screenshot_default_footer_new_text_yellow.png
│   │   ├── Screenshot_default_footer.png
│   │   ├── Screenshot_default_red.png
│   │   └── Screenshot_no_footer_green.png
│   └── js
│       └── rz-modal.js
├── favicon.ico
├── index.html
└── README.md


```

## Usage/Examples

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="ZHENG Robert" />

    <title>Web Component</title>

    <meta name="description" content="Web Component for HTML footer" />
    <meta name="version" content="v0.1.0" />
    <meta name="author" content="ZHENG Robert" />
    <meta name="date" content="2016-01-02T01:30:00+01:00" />

    <link rel="alternate icon" href="./favicon.ico" />
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />

    <link href="../assets/css/index.css" rel="stylesheet" type="text/css" />
  </head>

  <body id="body">
    <main>
      <h1>Web-Component &raquo;rz-modal_dialog&laquo;</h1>
      <article>
        <h2>A Web Component for dialog or modal</h2>
        <p class="brief">steering via properties</p>
        <p>
          show or hide dialog or modal, with/without footer and red/yellow/green
          title
        </p>
        <section>
          <h3>example</h3>
          <button class="btn" id="rz_btn_dialog_show">show dialog</button>
          <button class="btn" id="rz_btn_modal_show">show modal</button>
          &nbsp;
          <button class="btn" id="rz_btn_text">change text</button>
          <button class="btn" id="rz_btn_no_footer">no footer</button>
          &nbsp;
          <button class="btn" id="rz_btn_red">change red</button>
          <button class="btn" id="rz_btn_yellow">change yellow</button>
          <button class="btn" id="rz_btn_green">change green</button>

          <rz-modal_dialog
            id="rz-dialog"
            title="my title"
            body="my body"
            footer="my footer"
          ></rz-modal_dialog>
        </section>
      </article>
    </main>
  </body>
  <script src="./assets/js/rz-modal.js"></script>

  <script>
    /* ##### the buttons ##### */
    document
      .getElementById("rz_btn_dialog_show")
      .addEventListener("click", () => {
        document.getElementById("rz_modal").show();
        document.getElementById("rz_modal_header").classList.add(this.color);
      });
    document
      .getElementById("rz_btn_modal_show")
      .addEventListener("click", () => {
        document.getElementById("rz_modal").showModal({ backdrop: true });
      });

    /* ##### examples change props ##### */
    document.getElementById("rz_btn_text").addEventListener("click", () => {
      document.getElementById("rz-dialog").title = "new Title";
      document.getElementById("rz-dialog").body = "new Body";
      document.getElementById("rz-dialog").footer = "new Footer";
    });
    document
      .getElementById("rz_btn_no_footer")
      .addEventListener("click", () => {
        document.getElementById("rz-dialog").footer = "";
      });

    document.getElementById("rz_btn_red").addEventListener("click", () => {
      document.getElementById("rz-dialog").color = "red";
      document.getElementById("rz-dialog").title = "critical";
      document.getElementById("rz-dialog").body = "critical text";
    });
    document.getElementById("rz_btn_yellow").addEventListener("click", () => {
      document.getElementById("rz-dialog").color = "yellow";
      document.getElementById("rz-dialog").title = "warning";
      document.getElementById("rz-dialog").body = "warning text";
    });
    document.getElementById("rz_btn_green").addEventListener("click", () => {
      document.getElementById("rz-dialog").color = "green";
      document.getElementById("rz-dialog").title = "ok";
      document.getElementById("rz-dialog").body = "ok text";
    });
    /* ##### examples change props ##### */
  </script>
</html>
```

## Screenshots

**default**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-modal_dialog/main/assets/img/Screenshot_default_footer_green.png" width="100%" height="auto" />

**yellow title new text**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-modal_dialog/main/assets/img/Screenshot_default_footer_new_text_yellow.png" width="100%" height="auto" />

**new text**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-modal_dialog/main/assets/img/Screenshot_default_footer_new_text.png" width="100%" height="auto" />

**default with footer**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-modal_dialog/main/assets/img/Screenshot_default_footer.png" width="100%" height="auto" />

**default with red title**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-modal_dialog/main/assets/img/Screenshot_default_red.png" width="100%" height="auto" />

**green title no footer**

  <img src="https://raw.githubusercontent.com/Zheng-Bote/rz-modal_dialog/main/assets/img/Screenshot_no_footer_green.png" width="100%" height="auto" />

## Used By

This web component is used by the following web sites:

- [hase-zheng.net: Micro-Frontends and Microservices](https://www.hase-zheng.net)
- [Robert Zheng Landing Page](https://www.robert.hase-zheng.net)
- [Points of Interest: Geo-Coordinates and Photos of POI's](https://www.flag-me.info/)
- [ZHENG Bote: private travel photos](https://www.bote.hase-zheng.net/)
- [DigiDocuDev: web-based documentation management](https://www.digidocu.dev/)

### the end

:vulcan_salute:

<p align="right">(<a href="#top">back to top</a>)</p>
