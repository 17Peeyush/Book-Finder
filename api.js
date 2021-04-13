class Api{
    
   async getData(){
        var requestOptions = {
            method: 'GET',
          };
        var dataSet=await fetch("https://api.publicapis.org/entries?category=Books&https=true", requestOptions)
          .then(response => response.json())
          .then((data) =>{ return data})
          .catch(error => console.log('error', error));
        
       // console.log("IN API:", dataSet);
        return dataSet;
    }
}