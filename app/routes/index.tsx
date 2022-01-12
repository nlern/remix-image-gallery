import { Link, useLoaderData } from "remix";
import type { LinksFunction, LoaderFunction } from "remix";
import stylesUrl from "~/styles/homepage.css";

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: "stylesheet" }];
};

export const loader: LoaderFunction = () => {
  const tags = [
    { id: "mountains", label: "mountains", link: "mountains" },
    { id: "beaches", label: "beaches", link: "beaches" },
    { id: "birds", label: "birds", link: "birds" },
    { id: "food", label: "food", link: "food" },
  ];
  return { tags };
};

export default function Index() {
  const { tags } =
    useLoaderData<{ tags: { id: string; label: string; link: string }[] }>();
  const tagLinks = tags.map((tag) => {
    return (
      <div className="tag-link" key={tag.id}>
        <Link to={`/search?q=${tag.link}`}>{tag.label}</Link>
      </div>
    );
  });
  return (
    <div className="homepage__container">
      <section className="homepage__intro">
        <p>
          Welcome to Image Gallery! Here you can search for images from{" "}
          <em>
            <a href="https://unsplash.com">Unsplash</a>
          </em>{" "}
          by entering your query text in the search box and clicking search
          button or pressing enter.
        </p>
      </section>
      <section className="homepage__tags-container">
        <div className="homepage__tags-help">
          <p>You can also click any of the below links to search.</p>
        </div>
        <div className="homepage__tags">{tagLinks}</div>
      </section>
    </div>
  );
}
