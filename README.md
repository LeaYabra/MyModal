# TypeScript Components for HRnet

This repository contains the code for a library of react components. The components are published in TypeScript

## Technologies

- TS
- React

## Authors

the front-end developer: Lea Yabra

## Import a component into a project

### Getting Started

Install this package:

```shell
npm install @leayabra/mymodal@0.1.2
```

Import the Modal component:

```js
import { MyModal } from "@leayabra/mymodal"
```

You can then render the `Modal` component like any other React component in JSX.

### The components

#### Modal

It's an easy way to add a modal box to your project
To use this component you need to create a boolean state

```js
import React, { useState } from "react";
import { MyModal } from "@leayabra/mymodal"

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <MyModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        setVisible={setIsModalVisible}
      />
    </div>
  );
};

export default App;

```

This components needs four params :

- @param {string} children : the content of your modal
- @param {boolean} visible: A boolean state representing whether the modal is open or not.
- @param {function} onClose: A function to be called when the modal is closed.
- @param {function} setVisible: A function to update the visibility state of the modal.

## Add a component to the library

Fork this repository to GitHub

Add your TypeScript components in src/ folder

Export your component in src/index.ts file :

```ts
export { MyNewComponent } from "./MyNewComponent";
```

Modify the information in package.json

Run build scripts :

```shell
npm run rollup
```

And publish dist folder on npm :

```shell
npm publish 
```