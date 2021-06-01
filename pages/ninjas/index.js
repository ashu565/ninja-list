import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const NinjasRender = (ninjas) => {
  return ninjas.map((ninja) => {
    return (
      <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
        <a className={styles.single}>
          <h4>{ninja.name}</h4>
        </a>
      </Link>
    );
  });
};

export default function Ninjas({ ninjas }) {
  return (
    <div>
      <h1>All Ninjas</h1>
      {NinjasRender(ninjas)}
    </div>
  );
}
