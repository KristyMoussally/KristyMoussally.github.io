const chapters = {
  accueil: {
    titre: "Avant de commencer !",
    description:
      "Vous vous réveillez dans un monde surréel. La sensation d'être dans ce rêve lucide vous rend mal à l'aise. Votre but est de sortie de ce cauchemar.",
    image: "assets/images/accueil.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Commencer l'histoire intéractif",
        destination: "Tapez goToChapter(`debut`)",
      },
    ],
  },
  debut: {
    titre: "Un rêve pas comme les autres",
    description:
      "Vous marchez dans un chemin étroit qui vous mène vers un intersection. Un des chemin vous mène vers une forêt remplie des yeux puis l'autre une plaine déserte.",
    image: "assets/images/plaine.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Aller à la plaine",
        destination: "Tapez goToChapter(`plaine`)",
      },
      {
        titre: "➤ Aller vers la forêt",
        destination: "Tapez goToChapter(`forêt`)",
      },
    ],
  },
  foret: {
    titre: "C'était de la drogue ??",
    description:
      "Plus ce que vous marchez dans la forêt, vous sentez que votre tête tourne en rond. Des hallucinations vous hantents jusqu'à quand vos jambes perd l'équilibre.",
    image: "assets/images/foret.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "Tapez goToChapter(`accueil`)",
      },
    ],
  },
  plaine: {
    titre: "Paix, mais pour quelle coût",
    description:
      "Vous continuez votre chemin dans la plaine. Vous sentez que quelque chose vous suit...Vous n'êtes pas touts seuls. Vous remarquez qu'il il y a une sorte de porte obscure devant vous. ",
    image: "assets/images/porte_sombre.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Se tourner et attaquer la créature",
        destination: "Tapez goToChapter(`créature`)",
      },
      {
        titre: "➤ S'enfuir vers la porte noire",
        destination: "Tapez goToChapter(`porte`)",
      },
    ],
  },
  creature: {
    titre: "Quelle belle imagination vous avez !",
    description:
      "Vous vous tournez puis vous préparez à s'élancer. Mais avant de faire cela, vous voyez un trou noir qui avance vers vous. Stupéfait, quand vous reouvrit les yeux pour comprendre ce que vous avez vu, vous vous retrouvez dans l'obscurité total.",
    image: "assets/images/creature.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Retour vers l'accueil",
        destination: "Tapez goToChapter(`accueil`)",
      },
    ],
  },
  porte: {
    titre: "Maison...vide",
    description:
      "Vous entrez dans la porte noire. Étonné d'être dans une maison vide, vous marcher dans un corridor et vous voyez un `pièce de cuisine` ainsi qu'une tasse de thé placer sur le plancher.",
    image: "assets/images/maison_vide.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ explorer la maison",
        destination: "Tapez goToChapter(`cuisine`)",
      },
      {
        titre: "➤ Boire le thé suspésieux",
        destination: "Tapez goToChapter(`thé`)",
      },
    ],
  },
  the: {
    titre: "Une poison utile ",
    description:
      "En buvant le thé, vous sentez un peu étourdi. Ceci cause une voix qui donne transmet un code. Celui-ci devra être important, prenez note.",
    image: "assets/images/the.webp",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Aller vers la dernière chambre",
        destination: "Tapez goToChapter(`chambre`)",
      },
    ],
  },

  cuisine: {
    titre: "C'est vide ici !",
    description:
      "La cuisine ressemble est remplie dans un silence très fort. Malheureusement, vous n'avez rien trouvez puis vous décida d'explorer un peu plus. ",
    image: "assets/images/cuisine_vide.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Aller vers la dernière chambre",
        destination: "Tapez goToChapter(`chambre`)",
      },
    ],
  },
  chambre: {
    titre: "Le dernier Arrêt",
    description:
      "Vous explorez le reste de la maison puis vous trouvez se que vous pensez être la sortie. ",
    image: "assets/images/maison.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Partir tout de suite",
        destination: "Tapez goToChapter(`sortie`)",
      },
      {
        titre: "➤ Explorer encore la maison",
        destination: "Tapez goToChapter(`maison`)",
      },
    ],
  },
  sortie: {
    titre: "Fin...?",
    description:
      "Vous décidez de sortie mais ,quand vous ouvrez la porte, vous vous retrouvez vers le tout début de votre `rêve`.",
    image: "assets/images/coincer.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "Tapez goToChapter(`accueil`)",
      },
    ],
  },
  maison: {
    titre: "Dernier? Qui a dit que c'était le dernier",
    description:
      "Vous décidez de rexplorer la maison pour bien être sûr que vous n'avez pas oublié quelque chose. Cette action intelligente vous permet de resevoir une montre dont les aiguilles ne marche pas. Par chance, vous savez que cette montre est la clé de la sortie. Vous devez mettre la bonne heure.",
    image: "assets/images/montre.jpg",
    option: "Option :",
    buttons: [
      { titre: "➤ Mettre le code", destination: "Tapez goToChapter(`fin`)" },
    ],
  },
  fin: {
    titre: "Fou! J'étais fou une fois...",
    description:
      "Vous ouvrez vos yeux, le plafond comme le plancher. Les murs sont identiques...Vous sentez une vague de folie revenir.",
    image: "asset/images/hopital.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "Tapez goToChapter(`accueil`)",
      },
    ],
  },
  mauvaiscode: {
    titre: "Don't take it personnal kid",
    description:
      "Vous n'avez pas mis le bon code. Donc quand vous ouvrez la porte de sortie, vous vous retrouvez vers le tout début de votre `rêve`.",
    image: "assets/images/coincer.jpg",
    option: "Option :",
    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "Tapez goToChapter(`accueil`)",
      },
    ],
  },
};

function goToChapter(chapitre) {
  if (chapitre == "debut") {
    console.log(chapters.debut.titre);
    console.log(chapters.debut.description);
    console.log(chapters.debut.option);
    for (let bouton of chapters.debut.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "foret") {
    console.log(chapters.foret.titre);
    console.log(chapters.foret.description);
    console.log(chapters.foret.option);
    for (let bouton of chapters.foret.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "plaine") {
    console.log(chapters.plaine.titre);
    console.log(chapters.plaine.description);
    console.log(chapters.plaine.option);
    for (let bouton of chapters.plaine.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "creature") {
    console.log(chapters.creature.titre);
    console.log(chapters.creature.description);
    console.log(chapters.creature.option);
    for (let bouton of chapters.creature.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "porte") {
    console.log(chapters.porte.titre);
    console.log(chapters.porte.description);
    console.log(chapters.porte.option);
    for (let bouton of chapters.porte.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "the") {
    console.log(chapters.the.titre);
    console.log(chapters.the.description);
    console.log(chapters.the.option);
    for (let bouton of chapters.the.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "cuisine") {
    console.log(chapters.cuisine.titre);
    console.log(chapters.cuisine.description);
    console.log(chapters.cuisine.option);
    for (let bouton of chapters.cuisine.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "chambre") {
    console.log(chapters.chambre.titre);
    console.log(chapters.chambre.description);
    console.log(chapters.chambre.option);
    for (let bouton of chapters.chambre.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "sortie") {
    console.log(chapters.sortie.titre);
    console.log(chapters.sortie.description);
    console.log(chapters.sortie.option);
    for (let bouton of chapters.sortie.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "maison") {
    console.log(chapters.maison.titre);
    console.log(chapters.maison.description);
    console.log(chapters.maison.option);
    for (let bouton of chapters.maison.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "fin") {
    console.log(chapters.fin.titre);
    console.log(chapters.fin.description);
    console.log(chapters.fin.option);
    for (let bouton of chapters.fin.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "mauvaiscode") {
    console.log(chapters.mauvaiscode.titre);
    console.log(chapters.mauvaiscode.description);
    console.log(chapters.mauvaiscode.option);
    for (let bouton of chapters.mauvaiscode.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == "accueil") {
    console.log(chapters.accueil.titre);
    console.log(chapters.accueil.description);
    console.log(chapters.accueil.option);
    for (let bouton of chapters.accueil.buttons) {
      console.log(bouton.titre);
      console.log(bouton.destination);
    }
  }
  if (chapitre == false) {
    console.log("Ce chapitre n'est pas existant.");
  }
}

console.log(chapters.accueil.titre);
console.log(chapters.accueil.description);
console.log(chapters.accueil.option);
for (let bouton of chapters.accueil.buttons) {
  console.log(bouton.titre);
  console.log(bouton.destination);
}
