"use strict";
function getApi() {
    return fetch("/api.json")
        .then(res => res.json())
        .then(res => { return res; });
}
getApi()
    .then(pro => {
    ``;
    console.log(pro.map(u => u.red + u.pink + u.purple + u.deeppurple + u.indigo + u.blue + u.lightblue + u.cyan + u.teal + u.green + u.lightgree + u.lime + u.yellow + u.amber + u.orange + u.deeporange + u.brown + u.grey + u.black + u.white).toString());
});
