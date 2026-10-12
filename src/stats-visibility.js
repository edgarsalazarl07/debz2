const jugarButtons = [...document.querySelectorAll(".confirm-button")];
const combatBlocks = [...document.querySelectorAll(".fighter-stats, .battle-actions")];

function actualizarVisibilidadEstadisticas() {
    const combateIniciado = jugarButtons.length === 2 && jugarButtons.every((button) => button.classList.contains("d-none"));
    combatBlocks.forEach((block) => block.classList.toggle("d-none", !combateIniciado));
}

jugarButtons.forEach((button) => button.addEventListener("click", actualizarVisibilidadEstadisticas));