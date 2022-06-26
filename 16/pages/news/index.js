import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <Link href="/news/nextjs-is-a-great-framework">
          <li>NextJs is a great Framework</li>
        </Link>
        <li>somethng Framework</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
