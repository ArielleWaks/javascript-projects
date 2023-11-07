//TODO: Add Your Code Below
window.addEventListener("load", () => {
  //const container = document.getElementById("container");
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then((response) => {
      response.json()
        .then((json) => {
          // function active(index) {
          //   if (json[index].active) {
          //     return 'class="green"';
          //   }
          // };


          json.sort((a, b) => {
            return a.hoursInSpace - b.hoursInSpace;
          });
          // json.sort((a, b) => {
          //   if (a.hoursInSpace > b.hoursInSpace) {
          //     return 1;
          //   } else if (a.hoursInSpace < b.hoursInSpace) {
          //     return -1;
          //   } else {
          //     return 0;
          //   }
          // });

          const container = document.getElementById("container");
          container.innerHTML = "<h3>Astronaut Count: " + json.length + " </h3>";
          for (let i = 0; i < json.length; i++) {
            container.innerHTML +=
              `
              <div class="astronaut">
                  <div class="bio">
                  <h2>${json[i].firstName} ${json[i].lastName}</h2>
                  <ul class="stats">
                      <li>Hours in Space: ${json[i].hoursInSpace}</li>
                      <li ${json[i].active ? 'class="green"' : ''}>Active: ${json[i].active}</li>
                      <li>Skills: ${json[i].skills}</li>
                  </ul>
                  </div>
                  <img class="avatar" src="${json[i].picture}">
              </div>
              `;
          }
        });
    });
});