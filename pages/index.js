import { getAllQuotes } from '../lib/api';
import Image from 'next/image'
import { Quoteslist } from '../components/quoteslist';
import { Filterform } from '../components/filter';
import Link from 'next/link';

export async function getStaticProps() {
    const quotes = (await getAllQuotes()) || [];

    return {
        props: { quotes },
    };
}

export default function HomePage({ quotes }) {
    return (
        <div>
            <h1>All Quotes</h1>
            <Quoteslist quotes={quotes} />
            <Link href="/">
                <a>Delete all filters</a>
            </Link>
            <Filterform quotes={quotes} />
        </div>
    )   
}