/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import BrandIcon from 'parts/BrandIcon';
import Button from 'elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-8 md:ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light pt-3 md:pt-0">
              Growing Your Business
              {' '}
              <br />
              Is Our Calling
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-8 md:ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-gray-400 font-light">
              hello@joshitworks.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              Indore, Madhya Pradesh, India
            </p>
          </div>
          <div className="w-1/3 ml-8 md:ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social
            </h1>
            <Button href="https://www.instagram.com/joshitworks/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Instagram
            </Button>
            <Button href="https://www.linkedin.com/company/joshworks" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              LinkedIn
            </Button>
            {/* <Button href="https://github.com/racmathafidz" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Github
            </Button> */}
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light px-4 mx-3">
            Copyright 2022 - All rights reserved - Josh IT Works
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <Button href="https://github.com/himanshuragi456" type="link" target="_blank" className="text-lg text-theme-purple font-light" isExternal>
              Himanshu Ragi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
