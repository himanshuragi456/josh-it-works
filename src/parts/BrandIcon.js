/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      {/* <p className="text-theme-blue text-4xl">
        Racx
        <span className="text-theme-purple">studio</span>
      </p> */}
      <img alt="josh it works" src="assets/images/logo-josh.png" width={180} />
    </Button>
  );
}
