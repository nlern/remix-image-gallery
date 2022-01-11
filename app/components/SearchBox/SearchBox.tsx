import { Form } from "remix";

export default function SearchBox({ q }: { q: string }) {
  return (
    <Form action="/search" method="get" className="searchbox-container">
      <input type="text" name="q" className="searchbox" defaultValue={q} />
    </Form>
  );
}
