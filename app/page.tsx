import { Blog, CardList, Category, Feature, Menu } from "@/components";
import styles from "./homepage.module.css";

export default function Home({ searchParams }: { searchParams: any }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <main className="">
      <Feature />
      <Category />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
      {/* <Blog /> */}
    </main>
  );
}
