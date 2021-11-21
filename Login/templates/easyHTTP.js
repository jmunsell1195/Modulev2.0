/**  
*
* Easy HTTP
* Library for making HTTP requests
*
* @version 2.0.0
* @author Jeremy Munsell
* 
*
**/

class EasyHTTP {
    //Make HTTP Get Request
    get(url) {
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    //Make HTTP Post Request
    post(url,data) {
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'POST',
                headers: {'Content-type': 'application/json'}, body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }
}
