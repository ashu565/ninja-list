import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    console.log("Running use effect");
    setTimeout(() => {
      // router.go(1);
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <h2 className="not-found-message">Opssss....</h2>
      <h4 className="not-found-page">This Page Does Not exist</h4>
      <p>
        Go Back to the{" "}
        <Link href="/">
          <a className="not-found-back">Homepage</a>
        </Link>
      </p>
    </div>
  );
}
