import { destinationsData } from "./data.js";

const tabTitle = document.querySelector('#tabTitle');
const tabText = document.querySelector('#tabText');
const tabDistance = document.querySelector('#tabDistance');
const tabTravelTime = document.querySelector('#tabTravelTime');
const mainPicture = document.querySelector('picture');
const tabsButtons = document.querySelectorAll('[aria-selected]');

const onClickToggleTabs = (event) => {
    const target = event.target;
    const targetName = target.getAttribute('data-name');

    tabTitle.textContent = `${destinationsData[`${targetName}`].name}`;
    tabText.textContent = `${destinationsData[`${targetName}`].description}`;
    tabDistance.textContent = `${destinationsData[`${targetName}`].distance}`;
    tabTravelTime.textContent = `${destinationsData[`${targetName}`].travel}`;
    mainPicture.querySelector('source').setAttribute('srcset', `${destinationsData[`${targetName}`].images.webp}`);
    mainPicture.querySelector('img').setAttribute('src', `${destinationsData[`${targetName}`].images.src}`);
    mainPicture.querySelector('img').setAttribute('alt', `the ${destinationsData[`${targetName}`].name}`);

    tabsButtons.forEach(tab => tab.setAttribute('aria-selected', 'false'));
    target.setAttribute('aria-selected', 'true');
}

tabsButtons.forEach(tab => tab.addEventListener('click', onClickToggleTabs));