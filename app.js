console.log("Let's get this party started!");

const removebtn = document.querySelector("#remove");
const gifArea = document.querySelector("#gifs");
const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const resolve = await axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  console.log(resolve.data.data[0].images.fixed_height.url);
  const img = document.createElement("IMG");
  img.src = resolve.data.data[0].images.downsized.url;
  gifArea.append(img);
});

removebtn.addEventListener("click", function () {
  gifArea.replaceChildren("");
});
