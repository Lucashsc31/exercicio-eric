const cidades = [
    {
        codigo: 1,
        nome: "Maringá",
        frotaVeiculos: 2313,
        acidentes: 4515
    }, 
    {
        codigo: 2,
        nome: "Foz do Iguaçu",
        frotaVeiculos: 1999,
        acidentes: 3453
    },
    {
        codigo: 3,
        nome: "Curitiba",
        frotaVeiculos: 7867,
        acidentes: 7863
    }, 
    {
        codigo: 4,
        nome: "Paranaguá",
        frotaVeiculos: 783,
        acidentes: 453
    },
    {
        codigo: 5,
        nome: "Cascavel",
        frotaVeiculos: 1500,
        acidentes: 2520
    }
]; 

// Cidade com mais acidentes 
// Cidade com menos acidentes

var cidadeMaisAcidentes;
var cidadeMenosAcidentes

for(i = 0; i < cidades.length; i++) {

    // se for o primeiro, logicamente por enquanto ele é o maior
    if(i == 0) {

        cidadeMaisAcidentes = cidades[i];

        cidadeMenosAcidentes = cidades[i];

    } else {

        // verifica se a cidade atual no laço tem mais acidentes que a referencia, se sim substitui
        if (cidades[i].acidentes > cidadeMaisAcidentes.acidentes) {

            cidadeMaisAcidentes = cidades[i];
            
        }

        // verifica se a cidade atual no laço tem menos acidentes que a referencia, se sim substitui
        else if (cidades[i].acidentes < cidadeMenosAcidentes.acidentes) {

            cidadeMenosAcidentes = cidades[i];
            
        }

    }

}

console.log("Cidade com mais acidentes:", cidadeMaisAcidentes.nome + " - " + cidadeMaisAcidentes.acidentes);
console.log("\n");

console.log("Cidade com menos acidentes:", cidadeMenosAcidentes.nome + " - " + cidadeMenosAcidentes.acidentes);
console.log("\n");



// Media total de veiculos

var frotaTotal = 0;
var mediaFrota = 0;

for(i = 0; i < cidades.length; i++) {

    frotaTotal = frotaTotal + cidades[i].frotaVeiculos;

}

console.log("Total de veiculos:", frotaTotal);
console.log("\n");

mediaFrota = frotaTotal / cidades.length;

console.log("Media de veiculos por cidade:", mediaFrota);
console.log("\n");



// Media de acidentes em cidades com frota menor que 2000 veiculos

var TotaldeAcidentes = 0;
var MediaAcidentes = 0;

for(i = 0; i < cidades.length; i++) {

    if (cidades[i].frotaVeiculos < 2000) {
        
        TotaldeAcidentes = TotaldeAcidentes + cidades[i].acidentes;
                
    }
    
}

console.log("Total de acidentes: ", TotaldeAcidentes);

MediaAcidentes = TotaldeAcidentes / cidades.length;

console.log("Media total de acidentes em cidades com frota menor que 2000 veiculos: " + MediaAcidentes);




