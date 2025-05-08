document.getElementById('toggleHabilidades').addEventListener('click', function() {
    const lista = document.getElementById('listaHabilidades');
    lista.classList.toggle('hidden');
});

document.getElementById('toggleEducacion').addEventListener('click', function() {
    const lista = document.getElementById('listaEducacion');
    lista.classList.toggle('hidden');
});
