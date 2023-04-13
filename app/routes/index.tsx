import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import status from "~/server/status";

export function loader() {
  return json(status);
}

export default function Index() {
  const s = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <em>Started at {s.startedAt}</em>
      <h1>Am I borked? {s.isBorked ? "YES" : "NO"}</h1>
      <form action="/bork" method="POST">
        <input type="hidden" name="bork" value={s.isBorked ? "NO" : "YES"} />
        <button type="submit">{s.isBorked ? "Un-bork me" : "Bork me"}</button>
      </form>
    </div>
  );
}
