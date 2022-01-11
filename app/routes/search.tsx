import { useLoaderData } from "remix";
import type { LinksFunction, LoaderFunction } from "remix";
import ImageList from "~/components/ImageList/ImageList";
import stylesUrl from "~/styles/search.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");

  const unsplashApiUrl = new URL("https://api.unsplash.com/search/photos");
  const params = {
    query: q || "",
  };
  unsplashApiUrl.search = new URLSearchParams(params).toString();
  const authHeader = "Client-ID " + (process.env.UNSPLASH_API_ACCESS_KEY || "");
  const options = {
    method: "GET",
    headers: new Headers({
      Authorization: authHeader,
    }),
  };
  const response = await fetch(unsplashApiUrl.toString(), options);
  const data = await response.json();
  return data.results;
};

export default function Search() {
  const images = useLoaderData();
  return (
    <div className="wrapper">
      <ImageList images={images} />
    </div>
  );
}
