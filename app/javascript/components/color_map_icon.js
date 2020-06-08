const colorChangeMapIcon = () => {
  const mapIcons = document.querySelectorAll(".map-icon");
  console.log(mapIcons);

  mapIcons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      console.log(icon.id)
    })
  })
}

export { colorChangeMapIcon }
