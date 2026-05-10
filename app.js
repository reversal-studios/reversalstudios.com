async function onLoad() {
  document.querySelector("footer").outerHTML = await (await fetch("./public/static/footer.html")).text()
  document.getElementById("copyright").textContent = `© 2025-${new Date().getFullYear()} Reversal Studios. All rights reserved.`;
}

document.addEventListener("DOMContentLoaded", onLoad);
