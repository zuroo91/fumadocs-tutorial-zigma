import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
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
