# React Portal Overlay

[![NPM](https://img.shields.io/npm/v/react-portal-overlay)](https://www.npmjs.com/package/react-portal-overlay) [![License](https://img.shields.io/npm/l/react-portal-overlay)](https://github.com/seaneking/react-portal-overlay/blob/master/LICENSE.md)

A lightweight and performant fullscreen overlay component using React portals to render anywhere you need them to

## Installation

```sh
npm i react-portal-overlay
```

## Usage

See the [API Docs](https://seaneking.github.io/react-portal-overlay/) for a full overview of props and options.

```js
import React, { useState } from 'react';
import { Overlay } from 'react-portal-overlay';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Overlay open={open} onClose={() => setOpen(false)}>
      <h1>My overlay</h1>
    </Overlay>
  );
};
```
