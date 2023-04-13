import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import status from "~/server/status";

export const action = async ({ request }: LoaderArgs) => {
  const bork = (await request.formData()).get("bork");
  if (bork === "YES") status.isBorked = true;
  if (bork === "NO") status.isBorked = false;
  return redirect("/");
};

export const loader = () => redirect("/");
