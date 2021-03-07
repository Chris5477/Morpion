const container = document.createElement("div");
container.id="container";
document.body.appendChild(container);

for (let i = 0; i < 9; i++) {
     const cases = document.createElement("div")
     cases.className="cas";
     container.appendChild(cases)
    }