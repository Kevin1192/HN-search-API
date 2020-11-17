


export const queryResultsFromApi = async (search, page = 0) => {

    const apiUrl = 'http://hn.algolia.com/api/v1/';
    try {
        const searchUrl = `${apiUrl}search?query=${search}&tags=story&page=${page}`; 
        const res = await fetch(searchUrl);
        const newRes = await res.json();
         const results = newRes.hits.map(result => ({
             title: result.title,
             author: result.author,
             url: result.url,
             num_comments: result.num_comments,
             created_at: result.created_at,
             points: result.points,
         }))
         return {
             nbPages: newRes.nbPages,
             results,
             currentPage: page
         };
    } catch (err) {
        console.log(err);
    }
} 


