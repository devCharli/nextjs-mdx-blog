import { Feed } from 'feed';
import { getPosts } from './mdx-utils';

export function generateRSS() {
  const siteURL = 'https://freshpotpourri.com'; // Using non-www version
  const posts = getPosts();

  const feed = new Feed({
    title: 'freshpotpourri',
    description: '당신에게 필요한 정보를 한 곳에 정리 해 둔 사이트입니다.',
    id: siteURL,
    link: siteURL,
    language: 'ko',
    feedLinks: {
      rss2: `${siteURL}/rss.xml`,
    },
  });

  posts.forEach((post) => {
    const postSlug = post.filePath.replace(/\.mdx?$/, ''); // Extract slug from filename
    const postURL = `${siteURL}/posts/${postSlug}`;

    feed.addItem({
      title: post.data.title,
      id: postURL,
      link: postURL,
      description: post.data.description,
    });
  });

  return feed.rss2();
}
