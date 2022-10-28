const GET_ENDPOINT = "https://melon-potent-period.glitch.me/skills";
const DELETE_ENDPOINT = "https://melon-potent-period.glitch.me/skill";

document.getElementById("add-skill").addEventListener("click", () => {
  window.location.href = "./add.html";
});

async function getSkillsData(url) {
  try {
    const response = await fetch(url);
    const responseUsers = await response.json();
    return responseUsers;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function deleteItem(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    alert(response.ok ? "Success" : "Error");

    window.location.reload();
  } catch (error) {
    alert(error);
  }
}

async function getSkillsDataFromUrl(url) {
  const data = await getSkillsData(url);
  fillSkillsTable(data);
  console.log(data);
}

function fillSkillsTable(data) {
  const skillContainer = document.getElementById("skill-container");

  data.forEach((dataItem) => {
    const skillRow = document.createElement("div");
    skillRow.classList.add("skill-row");

    const userId = document.createElement("p");
    userId.textContent = dataItem.id;

    const userSkill = document.createElement("p");
    userSkill.textContent = dataItem.skill;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "delete";

    deleteButton.addEventListener("click", () => {
      deleteItem(DELETE_ENDPOINT + "/" + dataItem.id);
    });

    skillRow.append(userId, userSkill, deleteButton);
    skillContainer.append(skillRow);
  });
}

getSkillsDataFromUrl(GET_ENDPOINT);
