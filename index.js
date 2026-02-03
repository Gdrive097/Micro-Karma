document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generateBtn");
  const result = document.getElementById("result");
  const postsList = document.getElementById("posts");
  const narrator = document.getElementById("narrator");
  const loading = document.getElementById("loading");

  let rotationIndex = 0;

  const dailyPosts = [
    [
      "Why does everyone suddenly care about this?",
      "This blew up more than expected",
      "No one saw this coming"
    ],
    [
      "This opinion is way more controversial than expected",
      "People are arguing in the comments",
      "Mods are watching closely"
    ],
    [
      "This feels oddly familiar",
      "Nostalgia hit this subreddit hard",
      "Everyone has a story about this"
    ]
  ];

  button.addEventListener("click", () => {
    postsList.innerHTML = "";
    narrator.textContent = "";
    result.classList.add("hidden");

    loading.classList.remove("hidden");
    button.disabled = true;

    const subreddit =
      document.getElementById("subreddit").value || "AskReddit";

    setTimeout(() => {
      const fakePosts = dailyPosts[rotationIndex];
      rotationIndex = (rotationIndex + 1) % dailyPosts.length;

      fakePosts.forEach((title, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${title}`;
        postsList.appendChild(li);
      });

      narrator.textContent =
        `🗣️ Narrator says: “Classic r/${subreddit} energy today.”`;

      loading.classList.add("hidden");
      result.classList.remove("hidden");
      button.disabled = false;
    }, 300);
  });
});
