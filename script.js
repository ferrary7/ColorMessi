/* Iteration 4: Make the Everything Work */
// <!-- Messi - background, Jersey, stripes, hair, face, beard, text -->
const background = document.getElementById('background');

const buttonBackground = document.getElementById('buttonBackground');
buttonBackground.oninput = () => {
  background.style.fill = buttonBackground.value;
};

const jersey = document.getElementById('jersey');
jersey.oninput = () => {
  Jersey.style.fill = jersey.value;
};

const buttonstripes = document.getElementById('buttonstripes');
buttonstripes.oninput = () => {
  stripes.style.fill = buttonstripes.value;
};

const buttonhair = document.getElementById('buttonhair');
buttonhair.oninput = () => {
  hair.style.fill = buttonhair.value;
};

const buttonface = document.getElementById('buttonface');
buttonface.oninput = () => {
  face.style.fill = buttonface.value;
};

const buttonbeard = document.getElementById('buttonbeard');
buttonbeard.oninput = () => {
  beard.style.fill = buttonbeard.value;
};

const buttontext = document.getElementById('buttontext');
buttontext.oninput = () => {
  text.style.fill = buttontext.value;
};
