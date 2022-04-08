    const firstLisEl = document.querySelector(".firstLis");
    const secondLisEl = document.querySelector(".secondLis");
    const thirdLisEl = document.querySelector(".thirdLis");

    const getPeopleData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.status >= 200 && res.status <= 299) {
            // const newArr = res.json();
            // console.log(newArr);
            return await res.json();
        } else {
            // Redirect
            // window.location.href = "/";
            const h1El = document.createElement("h1");
            h1El.textContent = "Error 404 page not found";
            document.body.append(h1El);


        }
    };





    const firstLisItem = (value = "") => {
        const elements = value.map(
            (person) => `
        <li class=".firstLis">
        <span class="name">${person.name}<br></span>
        <span class="age">Age:${person.age}<br></span>
        <span class="phone">Phone:${person.phone}<br></span>
        </li>
        `
        )
        firstLisEl.innerHTML = elements.join("");
    };

    const secondLisItem = (value = "") => {
        const elements = value.map(
            (person) => `
        <li class=".secondLis">
        <span class="name">${person.name}<br></span>
        <span class="age">Age:${person.age}<br></span>
        <span class="phone">Phone:${person.phone}<br></span>
        </li>
        `
        )
        secondLisEl.innerHTML = elements.join("");
    };

    const thirdLisItem = (value = "") => {
        const elements = value.map(
            (person) => `
        <li class=".thirdLis">
        <span class="name">${person.name}<br></span>
        <span class="age">Age:${person.age}<br></span>
        <span class="phone">Age:${person.phone}<br></span>
        </li>
        `
        )
        thirdLisEl.innerHTML = elements.join("");
    };
    getPeopleData("https://jsonplaceholder.typicode.com/users").then((data) => {
        const people = data.map((person) => {
            person.age = Math.floor(Math.random() * 90);
            return person;
        });
        // console.log(people)

        const firstLis = people.filter((person) => person.age >= 18 && person.age <= 35);
        console.log(firstLis);
        firstLisItem(firstLis);
        const secondLis = people.filter((person) => person.age >= 36 && person.age <= 64);
        console.log(secondLis);
        secondLisItem(secondLis);
        const thirdLis = people.filter((person) => person.age > 64);
        console.log(thirdLis);
        thirdLisItem(thirdLis);

        if (firstLis.length > 0) {
                firstLisItem(firstLis);
            } else {
                const h3El = document.createElement("h3");
                h3El.textContent = "Nessun utente presente";
                firstLisEl.append(h3El);

            }
        if (secondLis.length > 0) {
                    secondLisItem(secondLis);
            } else {
                const h3El2 = document.createElement("h3");
                h3El2.textContent = "Nessun utente presente";
                secondLisEl.append(h3El2);
                    }
        if (thirdLis.length > 0) {
                    thirdLisItem(thirdLis);
            } else {
                const h3El3 = document.createElement("h3");
                h3El3.textContent = "Nessun utente presente";
                thirdLisEl.append(h3El3);
            };
        
        


    });
        












