'use client';

import React from 'react';

import { useEditorPlugin, useElement } from '@udecode/plate-common/react';

export const GhostText = () => {
  const element = useElement();

  return <GhostTextContent />;
};

export function GhostTextContent() {

  return (
    <span
      className="max-sm:hidden pointer-events-none text-muted-foreground/70"
      contentEditable={false}
    >
    </span>
  );
}
