const personagens = document.querySelectorAll('.personagem');
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () =>{
        if(window.innerWidth<450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
        const personagemselecionado = document.querySelector('.selecionado');
        personagemselecionado.classList.remove('selecionado');
        
        personagem.classList.add('selecionado');
        const imgpersonagemGrande = document.querySelector('.personagem-grande');
        const idpersonagem = personagem.attributes.id.value;
        imgpersonagemGrande.src = `./src/imagens/card-${idpersonagem}.png`;
        const nomepersonagem = document.getElementById('nome-personagem');
        nomepersonagem.innerText = personagem.getAttribute('data-name');
        const descricao = document.getElementById('descricao-personagem');
        descricao.innerText = personagem.getAttribute('data-description');

    })
})