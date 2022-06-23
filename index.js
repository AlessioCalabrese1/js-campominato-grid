let grillGeneratorButton = document.getElementById("grillGenerator");

grillGeneratorButton.addEventListener("click", function() {
    let grillContainer = document.getElementById("grillContainer");

    for (let index = 0; index < 100; index++) {
        let grillItem = document.createElement("div");
        grillItem.classList.add("grill-items-10", "d-inline-block", "bg-success", "gi-text");
        grillItem.innerHTML = index + 1;
        grillItem.addEventListener("click", function() {
            console.log(grillItem.innerHTML);
            grillItem.classList.remove("bg-success");
            grillItem.classList.add("bg-info");
        });
        grillContainer.append(grillItem);
    }
});

