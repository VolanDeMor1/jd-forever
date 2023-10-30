import styles from "@/app/page.module.css";

export default async function Card({ song }: any) {

    return (
        <a className={styles.card} href={`https://ire-prod-jdns.justdancenow.com/getPreviewVideo?song=${song.id}`}>
            <img src={`${song.base}/assets/web/${song.id.toLowerCase()}_small.jpg`} alt={song['name']} draggable={false}/>
            <div>
                <h2>{song['name']}</h2>
                <p>{song['artist']}</p>
            </div>
        </a>
    )
}