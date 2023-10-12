let isLoading = false;
let page = 1;

const showLoading = () => {
  document.getElementById("loading").style.display = "block";
};

const hideLoading = () => {
  document.getElementById("loading").style.display = "none";
};

const createPostElement = (post) => {
  const postElement = document.createElement("article");
  postElement.classList.add("post");

  postElement.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <div><img src="${post.image}" alt="image" /></div>
  `;

  return postElement;
};

const appendPosts = (data) => {
  const postList = document.getElementById("post-list");
  data.forEach((post) => {
    const postElement = createPostElement(post);
    postList.appendChild(postElement);
  });
};

const fetchData = async () => {
  try {
    const response = await fetch(`http://localhost:3000/posts`);

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();

    if (data.length === 0) {
      page = 1;
      return;
    }

    appendPosts(data);
    page++;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    hideLoading();
    isLoading = false;
  }
};

const fetchPosts = () => {
  if (isLoading) {
    return;
  }

  isLoading = true;
  showLoading();

  setTimeout(fetchData, 1500);
};

fetchPosts();

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    fetchPosts();
  }
};