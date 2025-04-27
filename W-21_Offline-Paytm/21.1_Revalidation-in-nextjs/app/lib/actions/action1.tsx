import { revalidateTag } from "next/cache";

export default function revalidate() {
  return revalidateTag("todos")
}