export function createImg(url, container){

    const img = document.createElement("img")
    img.className = "img";
    img.src = url;
    container.appendChild(img);
};

