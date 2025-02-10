import { Feed } from 'feed';
import { getPosts } from './mdx-utils';

export function generateRSS() {
  const posts = getPosts();
  const siteURL = 'https://freshpotpourri.com';

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
    feed.addItem({
      title: post.data.title,
      id: `${siteURL}/posts/${post.filePath.replace(/\.mdx?$/, '')}`,
      link: `${siteURL}/posts/${post.filePath.replace(/\.mdx?$/, '')}`,
      description: post.data.description,
      date: new Date(post.data.date),
    });
  });

  return feed.rss2();
}
