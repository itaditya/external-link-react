## External Link React

If your website has a comment section, a hacker might post exploitive links there so that users might open the link thinking it is part of your website. You should inform the users that they are about to leave your website and step into an external page. This React hook lets you do it pretty quickly. You just have to plug it in your UI.

[Try it online](https://codesandbox.io/s/detect-external-links-79jkf)

### Usage

```js
import { useExternalLink } from 'external-link-react';

function App() {
  const { handleLinkOpen, handleConfirm } = useExternalLink(handleAskUser);

  function handleAskUser() {
    // we're using browser's native confirm but you can use your own UI.
    const userResponse = window.confirm('This is an external link');
    handleConfirm(userResponse);
  }

  return (
    <div onClick={handleLinkOpen}>
      <a href="https://google.com">Google (external)</a>
      <a href="http://localhost:3000/">Our App (internal)</a>
    </div>
  );
}
```

### Installation

```
npm i external-link-react
```

### Options

You can pass options to the useExternalLink React hook as a second argument. It has to be an object containing or more of these key-value pairs.

```js
const options = {
  newTab: false,
  debug: false,
};

// inside component
const { handleLinkOpen, handleConfirm } = useExternalLink(handleAskUser, options);
```

1. **newTab**- By default link opens in the same tab. If you want the link to open in a separate tab then you can pass `newTab: true`. `noopener` is set on the link so that your website remains secure against phishing attacks.
1. **debug**- To enable helpful console messages you can pass `debug: true`.
