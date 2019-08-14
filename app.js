let cat = {
  name: "Bo Jangles",
  petCount: 0,
  moods: [
    {
      status: "Happy",
      img: "https://i.kym-cdn.com/photos/images/original/000/071/862/happycat.jpg"
    },
    {
      status: "Irritated",
      img: "https://www.rd.com/wp-content/uploads/2018/05/shutterstock_675975526-760x506.jpg"
    },
    {
      status: "bitey",
      img: "http://www.hahastop.com/pictures/An_Attack_Cat.jpg"
    },
    {
      status: "Blood thirsty",
      img: "https://res.cloudinary.com/teepublic/image/private/s--MLEmOgFg--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1492352066/production/designs/1463870_1.jpg"
    },
  ]
}

function catnip() {
  cat.petCount == 0
  draw()
}

//increase pet count
// and update
function pet() {
  if (cat.petCount < 20) {
    cat.petCount++
    draw()
  }
}
//decrease pet count
// and update

function feed() {
  if (cat.petCount > 1) {
    cat.petCount--
    draw()
  }
}

function draw() {

  let nameElement = document.querySelector("#cat-name")
  let petCountElement = document.querySelector("#cat-pet-count")
  let imageElement = document.querySelector("#cat-image")
  let statusElement = document.querySelector("#cat-status")

  let moodIndex = checkMood()

  let moodObj = cat.moods[moodIndex]

  nameElement.textContent = cat.name
  petCountElement.textContent = cat.petCount.toString()
  imageElement.src = moodObj.img
  statusElement.textContent = moodObj.status
}

function checkMood() {
  if (cat.petCount >= 20) {
    return 3
  } else if (cat.petCount >= 10) {
    return 2
  } else if (cat.petCount >= 5) {
    return 1
  }
  return 0
}

draw()


