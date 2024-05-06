console.log("Script loaded!");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const postsContainer = document.getElementById("posts-container");
    const search = document.getElementById("search");
    search.addEventListener("input", () => {
      const filteredPosts = posts.filter(
        (post) =>
          post.title.includes(search.value) || post.body.includes(search.value)
      );
      postsContainer.innerHTML = "";
      filteredPosts.forEach((post) => {
        postsContainer.innerHTML += `<div><h2>${post.title}</h2><p>${post.body}</p></div>`;
      });
    });
    posts.forEach((post) => {
      postsContainer.innerHTML += `<div><h2>${post.title}</h2><p>${post.body}</p></div>`;
    });
  })
  .catch((error) => console.error("Error:", error));
