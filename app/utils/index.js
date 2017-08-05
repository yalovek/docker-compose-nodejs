/* global DATA_URL */

import fetch from 'isomorphic-fetch';
import Router from 'next/router';

export const getInitialProps = async ({ pathname }) => {
  const res = await fetch(`${DATA_URL}?query=${encodeURI(`{
    page(url: "${pathname}") {
      texts
    }
  }`)}`);
  const json = await res.json();

  return {
    texts: JSON.parse(json.data.page.texts),
  };
};
