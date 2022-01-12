import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useSearchParams,
} from "remix";
import type { LinksFunction, MetaFunction } from "remix";

import stylesUrl from "~/styles/global.css";

import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import Footer from "./components/Footer/Footer";

export const links: LinksFunction = () => {
  return [
    { href: "https://fonts.googleapis.com", rel: "preconnect" },
    {
      href: "https://fonts.gstatic.com",
      rel: "preconnect",
      crossOrigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=The+Nautigal&display=swap",
      rel: "stylesheet",
    },
    { href: stylesUrl, rel: "stylesheet" },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Image Gallery" };
};

export default function App() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main>
          <SearchBox q={q} />
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
