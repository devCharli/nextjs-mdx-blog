import { generateRSS } from '../utils/rss';

export async function getServerSideProps({ res }) {
  const rss = generateRSS();

  res.setHeader('Content-Type', 'text/xml');
  res.write(rss);
  res.end();

  return { props: {} };
}

export default function RSSPage() {
  return null;
}
