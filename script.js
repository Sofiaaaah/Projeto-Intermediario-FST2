const produto=document.getElementById("produto");
const quantidade=document.getElementById("quantidade");
const adicionar=document.getElementById("adicionar");
const Rproduto=document.getElementById("Rproduto");
const Rquantidade=document.getElementById("Rquantidade");

adicionar.addEventListener("click", function(){
    const Vproduto=produto.value;
    const Vquantidade=quantidade.value;
    const resultado1=document.createElement("h3");
    const resultado2=document.createElement("h3");
    const remover=document.createElement("button");

    resultado1.textContent=Vproduto
    resultado2.textContent=Vquantidade

    produto.value=""
    quantidade.value=""
    remover.textContent="remover"

    remover.addEventListener("click",function(){
        resultado1.remove()
        resultado2.remove()
    })

    if(Vproduto==""){
        return
    }if(Vquantidade==""){
        return
    }
    
    resultado2.appendChild(remover)
    Rproduto.appendChild(resultado1);
    Rquantidade.appendChild(resultado2);
})