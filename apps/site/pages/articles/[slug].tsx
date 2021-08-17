import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from "node:querystring";

interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

/* eslint-disable-next-line */
export interface SlugProps {}

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  return {
    paths: [1, 2, 3].map((idx) => {
      return {
        params: {
          slug: `page${idx}`,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

export function Article(props: ArticleProps) {
  return (
    <div>
      <h1>Visiting {props.slug}</h1>
    </div>
  );
}

export default Article;
