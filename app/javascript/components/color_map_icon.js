const colorChangeMapIcon = () => {
  const mapIcons = document.querySelectorAll(".map-icon");
  console.log(mapIcons);

  mapIcons.forEach((icon) => {
    const abstentionDepartment = icon.dataset.abstention
    const registerDepartment = icon.dataset.register
    const percentageAbstention = Math.round(((abstentionDepartment/ registerDepartment) + Number.EPSILON) * 100) / 100
    if (percentageAbstention < .5) {
      icon.setAttribute("fill","#1EDD88")
    }
    else {
      icon.setAttribute("fill", "#E2011B")
    };
    icon.addEventListener('click', (e) => {
      console.log(e);
    })
  })
}

export { colorChangeMapIcon }
