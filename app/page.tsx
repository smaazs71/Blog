import { Blog, CardList, Category, Feature, Menu } from "@/components";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <main className="">
      <Feature />
      <Category />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
      {/* <Blog /> */}
    </main>
  );
}
