const skills = [
    {
      category: "Programing Languages",
      types: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 80 },
        { name: "JS", level: 35 },
        { name: "PHP", level: 70 },
      ],
    },
  
    {
      category: "Languages",
      types: [
        { name: "Nederlands", level: 80 },
        { name: "English", level: 85 },
      ],
    },
  ];
  
  const skillsElement = document.getElementById("prog");
  
  for (let i = 0; i < skills.length; i++) {
    const skilldata = skills[i];
    const types = skilldata.types;
    const category = skilldata.category;
  
    const skillCategory = document.createElement("div");
    skillCategory.className = "skill-category";
  
    const categoryTitle = document.createElement("h3");
    categoryTitle.className = "category-title";
    categoryTitle.innerHTML = category;
    skillCategory.appendChild(categoryTitle);
  
    const skillList = document.createElement("ul");
    skillList.className = "skills";
  
    for (let j = 0; j < types.length; j++) {
      const skilltype = types[j];
      const name = skilltype.name;
      const level = skilltype.level;
  
      const skillElement = document.createElement("li");
      skillElement.className = "skill";
  
      const skillBg = document.createElement("div");
      skillBg.className = "skill-bg";
  
      const skillBar = document.createElement("div");
      skillBar.className = "skill-bar";
      skillBg.style.width = `${level}%`;
  
      const skillTitle = document.createElement("span");
      skillTitle.className = "skill-title";
      const skillLevel = document.createElement("span");
      skillLevel.className = "skill-level";
      skillTitle.innerHTML = name;
      skillLevel.innerHTML = `${level}%`;
  
      skillBar.appendChild(skillTitle);
      skillBar.appendChild(skillLevel);
  
      skillBg.appendChild(skillBar);
      skillElement.appendChild(skillBg);
      skillCategory.appendChild(skillElement);
      skillList.appendChild(skillCategory);
    }
    skillsElement.appendChild(skillList);
  }