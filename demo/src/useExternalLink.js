import { useRef } from 'react';

const noop = () => {};

export function detectExternalLink(event) {
  const appHost = window.location.host;
  const linkHost = event.target.host;

  return linkHost !== appHost;
}

export function useExternalLink(onAskUser = noop, options = {}) {
  const refExternalLink = useRef();
  function handleLinkOpen(event) {
    const linkHref = event.target.href;
    const isExternalLink = detectExternalLink(event);

    if (!isExternalLink) {
      return;
    }

    event.preventDefault();
    refExternalLink.current = linkHref;
    onAskUser(linkHref);
  }

  function handleConfirm(isAllowed) {
    const externalLink = refExternalLink.current;
    if (!externalLink) {
      if (options.debug) {
        console.warn(
          `externalLink is not available. It usually happens when handleConfirm is called directly without first calling handleLinkOpen`
        );
      }
      return;
    }

    if (isAllowed) {
      if (options.newTab) {
        window.open(externalLink, '_blank', 'noopener');
      } else {
        window.location.href = externalLink;
      }
    }

    refExternalLink.current = null;
  }

  return {
    handleLinkOpen,
    handleConfirm,
  };
}
