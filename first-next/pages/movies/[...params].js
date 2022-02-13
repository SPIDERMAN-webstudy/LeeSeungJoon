import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>{router.query.title || "Loading..."}</h2>
    </div>
  );
}
