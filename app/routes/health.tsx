import status from "~/server/status";

export function loader() {
  return status.isBorked
    ? new Response("BORKED", { status: 500 })
    : new Response("OK");
}
