import { crewData } from "./data.js";

const tabTitle = document.querySelector('#roleTitle');
const tabNameCrew = document.querySelector('#nameCrew');
const tabBio = document.querySelector('#tabBio');
const mainPicture = document.querySelector('picture');
const tabsButtons = document.querySelectorAll('[aria-selected]');

const onClickToggleTabs = (event) => {
    const target = event.target;
    const targetName = target.getAttribute('data-name');

    tabTitle.textContent = `${crewData[`${targetName}`].role}`;
    tabNameCrew.textContent = `${crewData[`${targetName}`].name}`;
    tabBio.textContent = `${crewData[`${targetName}`].bio}`;
    mainPicture.querySelector('source').setAttribute('srcset', `${crewData[`${targetName}`].images.webp}`);
    mainPicture.querySelector('img').setAttribute('src', `${crewData[`${targetName}`].images.src}`);
    mainPicture.querySelector('img').setAttribute('alt', `${crewData[`${targetName}`].name}`);

    tabsButtons.forEach(tab => tab.setAttribute('aria-selected', 'false'));
    target.setAttribute('aria-selected', 'true');
}

tabsButtons.forEach(tab => tab.addEventListener('click', onClickToggleTabs));