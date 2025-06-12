const apiKey = "your_api_key_here"; // Replace with your NewsAPI key
const newsContainer = document.getElementById("newsContainer");
const searchInput = document.getElementById("search");

async function fetchNews(query = "india") {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
  const data = await res.json();
  displayNews(data.articles);
}

function displayNews(articles) {
  newsContainer.innerHTML = "";
  articles.forEach(article => {
    const div = document.createElement("div");
    div.className = "article";
    div.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.description || "No description available"}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;
    newsContainer.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  fetchNews(query || "india");
});

// Load default news
fetchNews();
