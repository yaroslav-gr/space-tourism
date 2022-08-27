import { technologyData } from "./data.js";

const tabName = document.querySelector('#tabName');
const tabText = document.querySelector('#tabText');
const mainPicture = document.querySelector('picture');
const tabsButtons = document.querySelectorAll('[aria-selected]');

const onClickToggleTabs = (event) => {
    const target = event.target;
    const targetName = target.getAttribute('data-name');

    tabName.textContent = `${technologyData[`${targetName}`].name}`;
    tabText.textContent = `${technologyData[`${targetName}`].description}`;
    mainPicture.querySelector('#smallPicJpg').setAttribute('srcset', `${technologyData[`${targetName}`].images.portrait}`);
    mainPicture.querySelector('img').setAttribute('src', `${technologyData[`${targetName}`].images.landscape}`);
    mainPicture.querySelector('img').setAttribute('alt', `${technologyData[`${targetName}`].name}`);

    tabsButtons.forEach(tab => tab.setAttribute('aria-selected', 'false'));
    target.setAttribute('aria-selected', 'true');
}

tabsButtons.forEach(tab => tab.addEventListener('click', onClickToggleTabs));