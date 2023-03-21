interface getApi{
    red: string, 
   pink: string, 
   purple: string,
    deeppurple: string, 
    indigo: string,
     blue:string, 
     lightblue: string, 
     cyan: string, 
     teal: string, 
     green: string, 
     lightgree:string, 
     lime: string, 
     yellow: string, 
     amber: string, 
     orange: string,
      deeporange:string,
       brown: string, 
       grey: string, 
       black:string, 
       white:string
}

function getApi():Promise <getApi[]>{
   return fetch("/api.json")
     .then(res=>res.json())
     .then(res=> {return res as getApi[]})
   }

getApi()
.then(pro=>{``
   console.log(pro.map(u => u.red+ u.pink+  u.purple+u.deeppurple+u.indigo+u.blue+u.lightblue+u.cyan+u.teal+u.green +u.lightgree+u.lime +u.yellow+u.amber+u.orange+u.deeporange+u.brown +u.grey+u.black+u.white ).toString())
})