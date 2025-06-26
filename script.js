function createProject() {
  const name = document.getElementById("projectName").value.trim();
  const desc = document.getElementById("projectDesc").value.trim();

  if (!name || !desc) {
    alert("Remplis tous les champs !");
    return;
  }

  const container = document.getElementById("projectsContainer");

  const card = document.createElement("div");
  card.className = "project-card";

  const title = document.createElement("h3");
  title.textContent = name;

  const description = document.createElement("p");
  description.textContent = desc;

  const progress = document.createElement("div");
  progress.className = "progress";

  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  progress.appendChild(progressBar);

  const simulateBtn = document.createElement("button");
  simulateBtn.textContent = "Simuler la progression";
  simulateBtn.onclick = () => {
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        simulateBtn.textContent = "APK prête à générer 🚀";
      } else {
        width += 10;
        progressBar.style.width = width + "%";
      }
    }, 300);
  };

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(progress);
  card.appendChild(simulateBtn);
  container.appendChild(card);

  // Reset fields
  document.getElementById("projectName").value = "";
  document.getElementById("projectDesc").value = "";
}
