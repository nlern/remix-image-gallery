import { Link } from "remix";

export default function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">Image gallery</Link>
      </h1>
    </header>
  );
}
