# dataSPA Inspector

The dataSPA Inspector is an attempt to provide some of the functionality of the
[Inspector](https://data-star.dev/reference/datastar_pro#datastar-inspector)
found in the Pro version of Datastar.

The inspector will show the current state of dataSPA/datastar signals on the page and also show signal and element patch events received from the server.

## Features

### Show page signals

Show the current value of the various signals. Mouse over the signal name to highlight the elements where the signal is used. Shift-click on the signal name to scroll the first matching element into view.

Toggle between table and object view.

### Show signal patch events from the server

See the patch event. Send it to the console, copy it to the clipboard, or replay the event.

### Show element patch events from the server

See the patch event. Send it to the console, copy it to the clipboard, or replay the event.

## Usage

To use the inspector, include the following script tag in your page `<head>`:

```html
  <script defer type="module" src="https://cdn.jsdelivr.net/gh/dataSPA/dataSPA-inspector@main/dataspa-inspector.bundled.js"></script>
```

Then include the inspector using the following HTML tag anywhere in your page:

```html
  <dataspa-inspector></dataspa-inspector>
```

### Injecting into an existing application

If you want to inject the inspector into an existing application, you can paste the following code into the devtools console:

```javascript
el = document.createElement("script")
el.src = "https://cdn.jsdelivr.net/gh/dataSPA/dataSPA-inspector@latest/dataspa-inspector.bundled.js"
el.type = "module"
document.head.appendChild(el)
document.body.appendChild(document.createElement("dataspa-inspector"))
```
