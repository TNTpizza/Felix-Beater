var gameData = {
    Felix: 0,
    FelixPerClick: 1,
    FelixPerClickCost: 10
}

function BeatFelix() {
    gameData.Felix += gameData.FelixPerClick
    document.getElementById("Felix").innerHTML = gameData.Felix + " Felix "
}

function buyFelixPerClick() {
    if (gameData.Felix >= gameData.FelixPerClickCost) {
        gameData.Felix -= gameData.FelixPerClickCost
        gameData.FelixPerClick += 1
        gameData.FelixPerClickCost *= 2
        document.getElementById("Felix").innerHTML = gameData.Felix + " Felix "
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade Stick (Currently Level " + gameData.FelixPerClick + ") Cost: " + gameData.FelixPerClickCost + " Felix "
    }
}

var mainGameLoop = window.setInterval(function() {
  mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("FelixBeaterSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("FelixBeaterSave"))
if (savegame !== null) {
  gameData = savegame
}