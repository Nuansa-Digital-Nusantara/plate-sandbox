"use client";

import type React from "react";

import type { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import type {
  CodeBlockPlugin,
  CodeLinePlugin,
} from "@udecode/plate-code-block/react";
import type { TElement, TText } from "@udecode/plate-common";
import type { ParagraphPlugin } from "@udecode/plate-common/react";
import type { HEADING_KEYS } from "@udecode/plate-heading";
import type { HorizontalRulePlugin } from "@udecode/plate-horizontal-rule/react";
import type { TLinkElement } from "@udecode/plate-link";
import type { LinkPlugin } from "@udecode/plate-link/react";
import type { TImageElement, TMediaEmbedElement } from "@udecode/plate-media";
import type { ImagePlugin, MediaEmbedPlugin } from "@udecode/plate-media/react";
import type { TToggleElement } from "@udecode/plate-toggle";
import type { TogglePlugin } from "@udecode/plate-toggle/react";

/** Text */

export type EmptyText = {
  text: "";
};

export type PlainText = {
  text: string;
};

export interface RichText extends TText {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  bold?: boolean;
  code?: boolean;
  color?: React.CSSProperties["color"];
  fontFamily?: React.CSSProperties["fontFamily"];
  fontSize?: React.CSSProperties["fontSize"];
  fontWeight?: React.CSSProperties["fontWeight"];
  italic?: boolean;
  kbd?: boolean;
  strikethrough?: boolean;
  subscript?: boolean;
  underline?: boolean;
}

/** Inline Elements */

export interface MyLinkElement extends TLinkElement {
  children: RichText[];
  type: typeof LinkPlugin.key;
}

export type MyInlineElement = MyLinkElement;

export type MyInlineDescendant = MyInlineElement | RichText;

export type MyInlineChildren = MyInlineDescendant[];

/** Block props */

export interface MyIndentProps {
  indent?: number;
}

export interface MyIndentListProps extends MyIndentProps {
  listRestart?: number;
  listStart?: number;
  listStyleType?: string;
}

export interface MyLineHeightProps {
  lineHeight?: React.CSSProperties["lineHeight"];
}

export interface MyAlignProps {
  align?: React.CSSProperties["textAlign"];
}

export interface MyBlockElement
  extends TElement, MyIndentListProps, MyLineHeightProps {
  id?: string;
}

/** Blocks */

export interface MyParagraphElement extends MyBlockElement {
  children: MyInlineChildren;
  type: typeof ParagraphPlugin.key;
}

export interface MyH1Element extends MyBlockElement {
  children: MyInlineChildren;
  type: typeof HEADING_KEYS.h1;
}

export interface MyH2Element extends MyBlockElement {
  children: MyInlineChildren;
  type: typeof HEADING_KEYS.h2;
}

export interface MyH3Element extends MyBlockElement {
  children: MyInlineChildren;
  type: typeof HEADING_KEYS.h3;
}

export interface MyBlockquoteElement extends MyBlockElement {
  children: MyInlineChildren;
  type: typeof BlockquotePlugin.key;
}

export interface MyCodeBlockElement extends MyBlockElement {
  children: MyCodeLineElement[];
  type: typeof CodeBlockPlugin.key;
}

export interface MyCodeLineElement extends TElement {
  children: PlainText[];
  type: typeof CodeLinePlugin.key;
}

export interface MyToggleElement extends TToggleElement, MyBlockElement {
  children: MyInlineChildren;
  type: typeof TogglePlugin.key;
}

export interface MyImageElement extends TImageElement, MyBlockElement {
  children: [EmptyText];
  type: typeof ImagePlugin.key;
}

export interface MyMediaEmbedElement
  extends TMediaEmbedElement, MyBlockElement {
  children: [EmptyText];
  type: typeof MediaEmbedPlugin.key;
}

export interface MyHrElement extends MyBlockElement {
  children: [EmptyText];
  type: typeof HorizontalRulePlugin.key;
}

export type MyNestableBlock = MyParagraphElement;

export type MyRootBlock =
  | MyBlockquoteElement
  | MyCodeBlockElement
  | MyH1Element
  | MyH2Element
  | MyH3Element
  | MyHrElement
  | MyImageElement
  | MyMediaEmbedElement
  | MyParagraphElement
  | MyToggleElement;

export type MyValue = MyRootBlock[];
