// other Api 'https://jsonplaceholder.typicode.com/todos/1'

  fetch('http://api.mediastack.com/v1/news?access_key=b64d513d53cf37a292b62275ff101fcc')
   .then(res=> res.json())
   .then(json => 
    {
     const films = json.data;
    
     //  return peliculas;
     films.map(el => {

       const title = el.title;
       const category = el.category;
       const url = el.url;
       const publish = el.published_at;
  
       const data = document.getElementById('data');
       let tr = document.createElement("tr")
       data.append(tr)
       tr.innerHTML = `<td class="tdPrimary">${title} <span  class="icon"><i class="fas fa-chevron-circle-down"></i></span></td><td data-column="Category">${category}</td><td data-column="Url">${url}</td><td data-column="Date">${publish} </td>`;
    
  }) 
})
    
 

  