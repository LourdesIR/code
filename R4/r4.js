// other Api 'https://jsonplaceholder.typicode.com/todos/1'

  fetch('http://api.mediastack.com/v1/news?access_key=b64d513d53cf37a292b62275ff101fcc')
   .then(res=> res.json())
   .then(json => console.log(json))