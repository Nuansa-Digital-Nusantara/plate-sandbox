import { withProps } from '@udecode/cn';
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from '@udecode/plate-code-block/react';
import {
  ParagraphPlugin,
  PlateLeaf,
  usePlateEditor,
} from '@udecode/plate-common/react';
import { DatePlugin } from '@udecode/plate-date/react';
import { EmojiInputPlugin } from '@udecode/plate-emoji/react';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { TocPlugin } from '@udecode/plate-heading/react';
import { HighlightPlugin } from '@udecode/plate-highlight/react';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { KbdPlugin } from '@udecode/plate-kbd/react';
import { ColumnItemPlugin, ColumnPlugin } from '@udecode/plate-layout/react';
import { LinkPlugin } from '@udecode/plate-link/react';
import {
  AudioPlugin,
  ImagePlugin,
  MediaEmbedPlugin,
  VideoPlugin,
} from '@udecode/plate-media/react';
import { SlashInputPlugin } from '@udecode/plate-slash-command/react';
import { TogglePlugin } from '@udecode/plate-toggle/react';

import { editorPlugins } from '@/components/editor/plugins/editor-plugins';
import { FixedToolbarPlugin } from '@/components/editor/plugins/fixed-toolbar-plugin';
import { FloatingToolbarPlugin } from '@/components/editor/plugins/floating-toolbar-plugin';
import { BlockquoteElement } from '@/components/plate-ui/blockquote-element';
import { CodeBlockElement } from '@/components/plate-ui/code-block-element';
import { CodeLeaf } from '@/components/plate-ui/code-leaf';
import { CodeLineElement } from '@/components/plate-ui/code-line-element';
import { CodeSyntaxLeaf } from '@/components/plate-ui/code-syntax-leaf';
import { ColumnElement } from '@/components/plate-ui/column-element';
import { ColumnGroupElement } from '@/components/plate-ui/column-group-element';
import { DateElement } from '@/components/plate-ui/date-element';
import { EmojiInputElement } from '@/components/plate-ui/emoji-input-element';
import { HeadingElement } from '@/components/plate-ui/heading-element';
import { HighlightLeaf } from '@/components/plate-ui/highlight-leaf';
import { HrElement } from '@/components/plate-ui/hr-element';
import { ImageElement } from '@/components/plate-ui/image-element';
import { KbdLeaf } from '@/components/plate-ui/kbd-leaf';
import { LinkElement } from '@/components/plate-ui/link-element';
import { MediaAudioElement } from '@/components/plate-ui/media-audio-element';
import { MediaEmbedElement } from '@/components/plate-ui/media-embed-element';
import { MediaVideoElement } from '@/components/plate-ui/media-video-element';
import { ParagraphElement } from '@/components/plate-ui/paragraph-element';
import { withPlaceholders } from '@/components/plate-ui/placeholder';
import { SlashInputElement } from '@/components/plate-ui/slash-input-element';
import { TocElement } from '@/components/plate-ui/toc-element';
import { ToggleElement } from '@/components/plate-ui/toggle-element';

export const useCreateEditor = () => {
  return usePlateEditor({
    override: {
      components: withPlaceholders({
        [AudioPlugin.key]: MediaAudioElement,
        [BlockquotePlugin.key]: BlockquoteElement,
        [BoldPlugin.key]: withProps(PlateLeaf, { as: 'strong' }),
        [CodeBlockPlugin.key]: CodeBlockElement,
        [CodeLinePlugin.key]: CodeLineElement,
        [CodePlugin.key]: CodeLeaf,
        [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
        [ColumnItemPlugin.key]: ColumnElement,
        [ColumnPlugin.key]: ColumnGroupElement,
        [DatePlugin.key]: DateElement,
        [EmojiInputPlugin.key]: EmojiInputElement,
        [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: 'h1' }),
        [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: 'h2' }),
        [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: 'h3' }),
        [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: 'h4' }),
        [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: 'h5' }),
        [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: 'h6' }),
        [HighlightPlugin.key]: HighlightLeaf,
        [HorizontalRulePlugin.key]: HrElement,
        [ImagePlugin.key]: ImageElement,
        [ItalicPlugin.key]: withProps(PlateLeaf, { as: 'em' }),
        [KbdPlugin.key]: KbdLeaf,
        [LinkPlugin.key]: LinkElement,
        [MediaEmbedPlugin.key]: MediaEmbedElement,
        [ParagraphPlugin.key]: ParagraphElement,
        [SlashInputPlugin.key]: SlashInputElement,
        [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: 's' }),
        [SubscriptPlugin.key]: withProps(PlateLeaf, { as: 'sub' }),
        [SuperscriptPlugin.key]: withProps(PlateLeaf, { as: 'sup' }),
        [TocPlugin.key]: TocElement,
        [TogglePlugin.key]: ToggleElement,
        [UnderlinePlugin.key]: withProps(PlateLeaf, { as: 'u' }),
        [VideoPlugin.key]: MediaVideoElement,
      }),
    },
    plugins: [
      ...editorPlugins,
      FixedToolbarPlugin,
      FloatingToolbarPlugin,
    ],
    value: [
      {
        children: [{ text: 'Playground' }],
        type: 'h1',
      },
    ],
  });
};
