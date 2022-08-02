export function Filterform({ quotes }){
    let tags = quotes.map(data =>{
        return data.tags.split(',')
    });

    let allTags = [...new Set(tags.flat(1))];
    allTags.sort()

    return(
        <form class="form" method="get" action="/search">
           {allTags.map((item) => (
                <div>
                    <input type="checkbox" id={item} name="query" value={item} />
                    <label for={item}> {item}</label>
                </div>
            ))}

            <button type="submit">Submit</button>
        </form> 
    )
}