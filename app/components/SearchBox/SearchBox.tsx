import { Form } from "remix";

export default function SearchBox({ q }: { q: string }) {
  return (
    <div className="search-box-container">
      <Form action="/search" method="get">
        <input type="text" name="q" defaultValue={q} />
      </Form>
    </div>
  );
}
