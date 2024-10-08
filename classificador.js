let nomeDoHeroi = "SuperMan";
let xp = 5000;
let nivelDoHeroi;

switch (true) {
    case (xp < 1000):
        nivelDoHeroi = "Ferro";
        break;
    case (xp >= 1001 && xp <= 2000):
        nivelDoHeroi = "Bronze";
        break;
    case (xp >= 2001 && xp <= 5000):
        nivelDoHeroi = "Prata";
        break;
    case (xp >= 5001 && xp <= 7000):
        nivelDoHeroi = "Ouro";
        break;
    case (xp >= 7001 && xp <= 8000):
        nivelDoHeroi = "Platina";
        break;
    case (xp >= 8001 && xp <= 9000):
        nivelDoHeroi = "Ascendente";
        break;
    case (xp >= 9001 && xp <= 10000):
        nivelDoHeroi = "Imortal";
        break;
    case (xp >= 10001):
        nivelDoHeroi = "Radiante";
        break;
    default:
        nivelDoHeroi = "Nível não identificado";
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}.`);

