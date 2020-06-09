const colorChangeMapIcon = () => {
  const mapIcons = document.querySelectorAll(".map-icon");
  const percentageFrance = document.getElementById("container-map").dataset.percentage
  mapIcons.forEach((icon) => {
    const abstentionDepartment = icon.dataset.abstention
    const registerDepartment = icon.dataset.register
    const percentageAbstention = Math.round(((abstentionDepartment/ registerDepartment) + Number.EPSILON) * 100) / 100
    if (percentageAbstention <= .4) {
      icon.setAttribute("fill", "rgb(30, 221, 136)")
    }
    else if (percentageAbstention < percentageFrance) {
      icon.setAttribute("fill","rgb(255, 110, 0)")
    }
    else {
      icon.setAttribute("fill", "rgb(226, 1, 27)")
    };
  })
}

export { colorChangeMapIcon }
