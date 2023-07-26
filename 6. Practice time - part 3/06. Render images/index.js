// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
let container = document.getElementById("container")

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
function teamImages() {
    let baseImages = ""
    for (let i = 0; i < imgs.length; i++) {
        baseImages += `<img alt="Employees in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = baseImages
}
teamImages()