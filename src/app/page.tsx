import styles from './page.module.css'
import Card from "@/comp/card";

export default async function Home() {
  const data = await (await fetch("https://ire-prod-api.justdancenow.com/v1/songs/published", {next:{revalidate: 60 * 60}})).json()

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {data.map((s: any) => <Card song={s}/>)}
      </div>
    </main>
  )
}