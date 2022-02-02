
let arrayOfUsers = [];

const getData = () => {

    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => arrayOfUsers.push(data.results));
}



const addUser = () => {
    console.log(arrayOfUsers)


    for(var i=0; i<arrayOfUsers[0].length; i++) {

        const {title, first, last} = arrayOfUsers[0][i].name;
        const {cell, email} = arrayOfUsers[0][i];
        const {date} = arrayOfUsers[0][i].dob;
        const {city, state, country} = arrayOfUsers[0][i].location;

        const img = document.createElement('img');
        img.src = arrayOfUsers[0][i].picture.large;
        document.getElementById('myList').appendChild(img)

        const nameList = document.createElement('li');
        document.getElementById('myList').append(nameList);
        const nameListInfo = document.createTextNode('Name: ' + title + ' ' + first + ' ' + last);
        nameList.appendChild(nameListInfo);

        let btn = document.createElement("button");
        btn.innerHTML = "More Info";
        btn.onclick = function () {
            const moreInfo = document.createElement('li');
            document.getElementById('myList').append(moreInfo);
            const moreMoreInfo = document.createTextNode(`Cell: ${cell}, Email: ${email}, DOB: ${date}, Location: ${city, state, country}`);;
            moreInfo.appendChild(moreMoreInfo);
            moreInfo.after(moreMoreInfo);
        }
        document.getElementById('myList').appendChild(btn);
        // const img = document.createElement('img');
        // img.src = arrayOfUsers[0][i].picture.medium;
        // document.getElementById("myList").appendChild(img);
        // const textnode = document.createTextNode('Name: ' + title + ' ' + first + ' ' + last);
        // li.appendChild(textnode);
        //
        // const moreData = document.createTextNode(`Cell: ${cell} Email: ${email}  DOB: ${date}  Location: ${city, state, country}`);
        // li.appendChild(moreData)
        // document.getElementById("myList").appendChild(li);
        // document.getElementById("subList").appendChild(moreData);
        // li.before(moreData);
    }

}
// [0][0].name.first