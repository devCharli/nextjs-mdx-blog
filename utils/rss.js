import { Feed } from 'feed';
import { getPosts } from './mdx-utils';

export function generateRSS() {
  const posts = getPosts();
  const siteURL = 'https://yourdomain.com';

  const feed = new Feed({
    title: 'Your Blog Name',
    description: 'Blog description',
    id: siteURL,
    link: siteURL,
    language: 'en',
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
