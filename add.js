const POST_ENDPOINT = "https://melon-potent-period.glitch.me/skills";

document.getElementById("view-skills").addEventListener("click", () => {
  window.location.href = "./index.html";
});

async function postSkillInfo(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert(response.ok ? "Skill added" : "Error");
    if (response.ok) {
      window.location.href = "./index.html";
    }
  } catch (error) {
    alert(error);
  }
}

document.getElementById("fetch-skill").addEventListener("click", () => {
  const skillInfo = document.getElementById("programer-skill").value;

  if (skillInfo) {
    const data = {
      skill: skillInfo,
    };

    postSkillInfo(POST_ENDPOINT, data);
  } else {
    alert("Add skill");
  }
});
