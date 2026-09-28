import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

const aliasMap: Record<string, keyof typeof icons> = {
  HelpCircle: 'CircleHelp',
  PlusCircle: 'CirclePlus',
  CheckCircle: 'CircleCheck',
  AlertCircle: 'CircleAlert',
  XCircle: 'CircleX',
};

export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;
    const resolved = (aliasMap[icon] || icon) as keyof typeof icons;
    if (resolved in icons) {
      return createElement(icons[resolved]);
    }
  },
});

type SourcePage = NonNullable<ReturnType<typeof source.getPage>>;

export function getPageImage(page: SourcePage) {
  const segments = [...page.slugs, 'image.png'];
  return { segments, url: `${docsImageRoute}/${segments.join('/')}` };
}

export function getPageMarkdownUrl(page: SourcePage) {
  const segments = [...page.slugs, 'content.md'];
  return { segments, url: `${docsContentRoute}/${segments.join('/')}` };
}
