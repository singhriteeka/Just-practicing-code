async function api() {
    try {
        const data = await fetch("https://dummyjson.com/users");
        const result = await data.json();

        let output = "";

        result.users.forEach(user => {
            output += `
                <div class="card">
                <img src="${user.image}" width="100"><br>
                
                <b>Name:</b> ${user.firstName} ${user.lastName}<br>

                <b>Age:</b> ${user.age}<br>

                <b>Gender:</b> ${user.gender}<br>

                <b>Email:</b> ${user.email}<br>

                <b>Phone:</b> ${user.phone}<br>

                <b>Username:</b> ${user.username}<br>

                <b>Birth Date:</b> ${user.birthDate}<br>

                <b>BloodGroup:</b> ${user.bloodGroup}<br>

                <b>Height:</b> ${user.height}<br>

                <b>Weight:</b> ${user.weight}<br>

                <b>Eyecolor:</b> ${user.eyeColor}<br>

                <b>Hair:</b> ${user.hair.color} (${user.hair.type})<br>

                <b>IP:</b> ${user.ip}<br>

                <b>Street:</b> ${user.address.address}<br>
                <b>City:</b> ${user.address.city}<br>
                <b>Country:</b> ${user.address.country}<br>

                <b>Latitude:</b> ${user.address.coordinates.lat}<br>

                <b>Longitude:</b> ${user.address.coordinates.lng}<br>

                <b>MacAddress:</b> ${user.macAddress}<br>

                <b>University:</b> ${user.university}<br>

                <b>Card Expire:</b> ${user.bank.cardExpire}<br>

                <b>Card Number:</b> ${user.bank.cardNumber}<br>

                <b>Card Type:</b> ${user.bank.cardType}<br>

                <b>Currency:</b> ${user.bank.currency}<br>

                <b>IBAN:</b> ${user.bank.iban}<br>

                <b>Company:</b> ${user.company.name}<br>

                <b>Department:</b> ${user.company.department}<br>

                <b>Job Title:</b> ${user.company.title}<br>

                <b>EIN:</b> ${user.ein}<br>

                <b>SSN:</b> ${user.ssn}<br>

                <b>UserAgent:</b> ${user.userAgent}<br>

                <b>Crypto Coin:</b> ${user.crypto.coin}<br>

                <b>Wallet:</b> ${user.crypto.wallet}<br>

                <b>Network:</b> ${user.crypto.network}<br>

                <b>Role:</b> ${user.role}<br>

                <hr>
            </div>
        `;
    });

    document.getElementById("users").innerHTML = output;

    } catch (error) {
        document.getElementById("users").innerHTML =
            "Failed to load page";
    }
}

api();