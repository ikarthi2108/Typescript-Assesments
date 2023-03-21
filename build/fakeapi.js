"use strict";
function FakeApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => console.log(json));
}
FakeApi();
