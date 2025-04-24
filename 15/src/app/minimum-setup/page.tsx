import { redirect } from "next/navigation";
import "server-only";

export default function MinimumSetup() {
  console.log("MinimumSetup");
  redirect("/minimum-setup/result");
}
