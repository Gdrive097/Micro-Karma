document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generateBtn");
  const result = document.getElementById("result");
  const postsList = document.getElementById("posts");
  const narrator = document.getElementById("narrator");
  const loading = document.getElementById("loading");

  let userPrediction = null;

  // Snapshot data mapped by vibe
  const dailyPosts = {
    Viral: [
      "Why does everyone suddenly care about this?",
      "This blew up more than expected",
      "No one saw this coming"
    ],
    Controversial: [
      "This opinion is way more controversial than expected",
      "People are arguing in the comments",
      "Mods are watching closely"
    ],
    Nostalgic: [
      "This feels oddly familiar",
      "Nostalgia hit this subreddit hard",
      "Everyone has a story about this"
    ]
  };

  // Prediction selection logic
  document.querySelectorAll(".choice").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".choice")
        .forEach((b) => b.classList.remove("selected"));

      btn.classList.add("selected");
      userPrediction = btn.dataset.vibe;

      button.disabled = false;
    });
  });

  // Reveal snapshot
  button.addEventListener("click", () => {
    if (!userPrediction) return;

    // Reset UI
    postsList.innerHTML = "";
    narrator.textContent = "";
    result.classList.add("hidden");

    // Show loader
    loading.classList.remove("hidden");
    button.disabled = true;
    button.textContent = "Revealing...";

    const subreddit =
      document.getElementById("subreddit").value || "AskReddit";

    setTimeout(() => {
      const snapshot = dailyPosts[userPrediction];

      snapshot.forEach((title, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${title}`;
        postsList.appendChild(li);
      });

      narrator.textContent = `You predicted **${userPrediction}**.  
Today’s snapshot feels **${userPrediction}**.  
Why do you think r/${subreddit} ended up like this today?`;

      loading.classList.add("hidden");
      result.classList.remove("hidden");

      button.textContent = "Reveal Snapshot";
    }, 800);
  });
});
