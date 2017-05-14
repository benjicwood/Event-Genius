import React from 'react';

export default function htmlviewer (htmlstring) {
  return <div dangerouslySetInnerHTML={{__html: htmlstring}} />;
}
