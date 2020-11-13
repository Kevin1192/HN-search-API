


export const queryResultsFromApi = async (search) => {

    const apiUrl = 'http://hn.algolia.com/api/v1/';
    try {
        const res = await fetch(`${apiUrl}search?query=${search}&tags=story`);
        const newRes = await res.json();
         const list = newRes.hits.map(result => ({
             title: result.title,
             author: result.author,
             url: result.url,
             num_comments: result.num_comments,
             created_at: result.created_at,
             points: result.points
         }))
         return list;
    } catch (err) {
        console.log(err);
    }
} 


