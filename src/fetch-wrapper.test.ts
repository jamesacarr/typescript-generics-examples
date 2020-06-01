import fetchWrapper from './fetch-wrapper';
import withErrorHandler from './with-error-handler';

interface Comic {
  alt: string;
  day: string;
  img: string;
  link: string;
  month: string;
  news: string;
  num: number;
  safe_title: string;
  title: string;
  transcript: string;
  year: string;
}

const url = 'https://xkcd.com/2267/info.0.json';
const body: Comic = {
  alt:
    "Blockchains are like grappling hooks, in that it's extremely cool when you encounter a problem for which they're the right solution, but it happens way too rarely in real life.",
  day: '12',
  img: 'https://imgs.xkcd.com/comics/blockchain.png',
  link: '',
  month: '2',
  news: '',
  num: 2267,
  safe_title: 'Blockchain',
  title: 'Blockchain',
  transcript: '',
  year: '2020',
};

describe('fetchWrapper', () => {
  it('returns body', async () => {
    const result = await fetchWrapper<Comic>(url);
    expect(result.body).toEqual(body);
  });

  it('returns statusCode', async () => {
    const result = await fetchWrapper<Comic>(url);
    expect(result.statusCode).toEqual(200);
  });

  it('can be wrapped by withErrorHandler', async () => {
    const result = await withErrorHandler(async () =>
      fetchWrapper<Comic>(url)
    )();
    expect(result.body).toEqual(body);
  });
});
