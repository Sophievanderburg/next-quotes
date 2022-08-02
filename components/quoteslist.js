import Image from 'next/image'
import styles from './quoteslist.module.css';

export function Quoteslist({ quotes }){
    return(
        <ol className={styles.quoteslist}>
           {quotes.map((item, i) => (
                <li key={i} > 
                    <p> {item.text}</p>
                    <div>
                        <Image src={item.avatar} alt='Profielfoto' width={40} height={40}/>
                        <h3>{item.name}</h3>
                    </div>
                </li>
            ))}
        </ol> 
    )
}