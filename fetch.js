let r = fetch('https://reqres.in/api/user');

let s = r.then(function(res) {
    return res.json();
});

s.then(function(a) {
    // console.log(data);
    displayData(a.data);
});


function displayData(data) {
    data.forEach(function(element) {
        console.log(element);
        document.createElement('tr');
        document.createElement('td');
    });
}