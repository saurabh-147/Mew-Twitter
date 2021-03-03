const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const mewsElement = document.querySelector(".mews");
const API_URL = "http://localhost:3000/mews";

listAllMews();
loadingElement.style.display = "";

//when user suvmits the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fromData = new FormData(form);
  const name = fromData.get("name");
  const content = fromData.get("content");

  const mew = {
    name,
    content,
  };

  form.style.display = "none";
  loadingElement.style.display = "";

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(mew),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((createdMew) => {
      form.reset();
      loadingElement.style.display = "none";
      form.style.display = "";
      listAllMews();
    });
});

//function to list alll mews
function listAllMews() {
  mewsElement.innerHTML = "";
  fetch(API_URL)
    .then((response) => response.json())
    .then((mews) => {
      mews.reverse();
      mews.forEach((mew) => {
        const div = document.createElement("div");
        const header = document.createElement("h3");
        header.textContent = mew.name;

        const contents = document.createElement("p");
        contents.textContent = mew.content;

        const date = document.createElement("date");
        date.textContent = new Date(mew.createdAt);

        div.appendChild(header);
        div.appendChild(contents);
        div.appendChild(date);

        mewsElement.appendChild(div);
        loadingElement.style.display = "none";
      });
    });
}
