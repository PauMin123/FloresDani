function reproducirAudio() {
    const audio = new Audio('Taylor Swift - You Belong With Me.mp3'); // Ruta del archivo de audio
    audio.play()
        .then(() => {
            console.log("Reproducción iniciada");
        })
        .catch((error) => {
            console.error("Error al reproducir el audio:", error);
        });
}

window.onload = () => {
    document.body.classList.remove("container");
    reproducirAudio(); // Llama a la función para reproducir el audio
};
