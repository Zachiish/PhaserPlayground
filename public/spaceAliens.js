const config = {
  type: Phaser.AUTO,
  width: '100%',
  height: '100%',
  parent: 'gameContainer', // Updated to match the id of the container div
  backgroundColor: '#000',
  scene: {
      preload: preload,
      create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  // preload assets if needed
}

function create() {
  const text = this.add.text(100, 100, 'Hello, Phaser!', { fontSize: '32px', fill: '#fff' });
  
  const gameContainer = document.getElementById('gameContainer');
  gameContainer.style.border = '4px solid white';
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOMContentLoaded event fired");
  var gameBodyContainer = document.getElementById('gameBodyContainer');
  console.log("gameBodyContainer:", gameBodyContainer);
  if (gameBodyContainer) {
      gameBodyContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log("Scrolling to gameBodyContainer");
  }
});