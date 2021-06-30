const screenDimensions =  document.createElement('div');
screenDimensions.style = "padding: 5px; background-color: rgba(255, 255, 255, 0.877); position: fixed; z-index: 100; top: 0px;";
document.getElementsByTagName('body')[0].appendChild(screenDimensions);

screenDimensions.innerHTML = `${window.innerWidth} (${window.innerWidth-17})<br>${window.innerHeight}`;

window.addEventListener("resize", () => {
	screenDimensions.innerHTML = `${window.innerWidth} (${window.innerWidth-17})<br>${window.innerHeight}`;
});