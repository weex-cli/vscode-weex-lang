
## Features

- All features of vetur
- Weex components snippet
- Weex eslint ([eslint-plugin-weex](https://github.com/erha19/eslint-plugin-weex))

## Install

* Search `weex-lang` and install (Vscode extension store)
* Associate your '.vue' files with the `weex-lang` extension by adding this to your settings.json, like this:

```
"files.associations": {
  "*.vue": "weex",
}
```

### Note

* You can disable `Eslint-plugin-weex` see [here](`https://github.com/weex-cli/vscode-weex-lang/issues/1`).
* If you have vue project use `vetur`, you can set `files.associations` or temporarily disable `weex-lang`.

```
"files.associations": {
  "*.vue": "vue",
}
```

## Issues

https://github.com/weex-cli/vscode-weex-lang/issues

## Base on

vetur https://github.com/vuejs/vetur
