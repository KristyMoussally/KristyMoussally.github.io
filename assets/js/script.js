// pour le remise en retart Ps2

//Ps2
const chapters = {
  accueil: {
    titre: "Avant de commencer !",
    description:
      "Vous vous réveillez dans un monde surréel. La sensation d'être dans ce rêve lucide vous rend mal à l'aise. Votre but est de sortir de ce cauchemar.",
    image: "/assets/images/accueil.jpg",
    // video: "lien vers video dans dossier assets", // Premier vidéo --> À mettre
    buttons: [
      {
        titre: "➤ Commencer l'histoire intéractif",
        destination: "debut",
      },
    ],
  },
  debut: {
    titre: "Un rêve pas comme les autres",
    description:
      "Vous marchez dans un chemin étroit qui vous mène vers un intersection. Un des chemin vous mène vers une forêt remplie des yeux puis l'autre une plaine déserte.",
    image: "/assets/images/plaine.jpg",

    buttons: [
      {
        titre: "➤ Aller à la plaine",
        destination: "plaine",
      },
      {
        titre: "➤ Aller vers la forêt",
        destination: "foret",
      },
    ],
  },
  foret: {
    titre: "C'était de la drogue ??",
    description:
      "Plus ce que vous marchez dans la forêt, vous sentez que votre tête tourne en rond. Des hallucinations vous hantents jusqu'à quand vos jambes perd l'équilibre.",
    image: "/assets/images/foret.jpg",

    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "accueil",
      },
    ],
  },
  plaine: {
    titre: "Paix, mais pour quelle coût",
    description:
      "Vous continuez votre chemin dans la plaine. Vous sentez que quelque chose vous suit...Vous n'êtes pas touts seuls. Vous remarquez qu'il il y a une sorte de porte obscure devant vous. ",
    image: "/assets/images/porte_sombre.jpg",

    buttons: [
      {
        titre: "➤ Se tourner et attaquer la créature",
        destination: "creature",
      },
      {
        titre: "➤ S'enfuir vers la porte noire",
        destination: "porte",
      },
    ],
  },
  creature: {
    titre: "Quelle belle imagination vous avez !",
    description:
      "Vous vous tournez puis vous préparez à s'élancer. Mais avant de faire cela, vous voyez un trou noir qui avance vers vous. Stupéfait, quand vous reouvrit les yeux pour comprendre ce que vous avez vu, vous vous retrouvez dans l'obscurité total.",
    image: "/assets/images/creature.jpg",
    //video: "lien vers video dans dossier assets", // Deuxième vidéo --> À mettre
    buttons: [
      {
        titre: "➤ Retour vers l'accueil",
        destination: "accueil",
      },
    ],
  },
  porte: {
    titre: "Maison...vide",
    description:
      "Vous entrez dans la porte noire. Étonné d'être dans une maison vide, vous marcher dans un corridor et vous voyez un `pièce de cuisine` ainsi qu'une tasse de thé placer sur le plancher.",
    image: "/assets/images/maison_vide.jpg",
    buttons: [
      {
        titre: "➤ explorer la maison",
        destination: "cuisine",
      },
      {
        titre: "➤ Boire le thé suspésieux",
        destination: "the",
      },
    ],
  },
  the: {
    titre: "Une poison utile ",
    description:
      "En buvant le thé, vous sentez un peu étourdi. Ceci cause une voix qui donne transmet un code. Celui-ci devra être important, prenez note.",
    image: "/assets/images/the.jpg",

    buttons: [
      {
        titre: "➤ Aller vers la dernière chambre",
        destination: "chambre",
      },
    ],
  },

  cuisine: {
    titre: "C'est vide ici !",
    description:
      "La cuisine ressemble est remplie dans un silence très fort. Malheureusement, vous n'avez rien trouvez puis vous décida d'explorer un peu plus. ",
    image: "/assets/images/cuisine_vide.jpg",

    buttons: [
      {
        titre: "➤ Aller vers la dernière chambre",
        destination: "chambre",
      },
    ],
  },
  chambre: {
    titre: "Le dernier Arrêt",
    description:
      "Vous explorez le reste de la maison puis vous trouvez se que vous pensez être la sortie. ",
    image: "/assets/images/maison.jpg",

    buttons: [
      {
        titre: "➤ Partir tout de suite",
        destination: "sortie",
      },
      {
        titre: "➤ Explorer encore la maison",
        destination: "maison",
      },
    ],
  },
  sortie: {
    titre: "Fin...?",
    description:
      "Vous décidez de sortie mais ,quand vous ouvrez la porte, vous vous retrouvez vers le tout début de votre `rêve`.",
    image: "/assets/images/coincer.jpg",

    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "accueil",
      },
    ],
  },
  maison: {
    titre: "Dernier? Qui a dit que c'était le dernier",
    description:
      "Vous décidez de réexplorer la maison pour bien être sûr que vous n'avez pas oublié quelque chose. Cette action intelligente vous permet de resevoir une montre dont les aiguilles ne marche pas. Par chance, vous savez que cette montre est la clé de la sortie. Vous devez mettre la bonne heure.",
    image: "/assets/images/montre.webp",

    buttons: [{ titre: "➤ Mettre le code", destination: "Twist" }], // Ce chapitre n'a pas réellement une destination, car c'est un chapitre unique (twist) [Change manuellement dans la fonction]
  },
  fin: {
    titre: "Fou? J'étais fou une fois...",
    description:
      "Vous ouvrez vos yeux, le plafond comme le plancher. Les murs sont identiques...Vous sentez une vague de folie revenir.",
    image: "assets/images/hopital.jpg",
    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "accueil",
      },
    ],
  },
  mauvaiscode: {
    titre: "Don't take it personnal kid",
    description:
      "Vous n'avez pas mis le bon code. Donc quand vous ouvrez la porte de sortie, vous vous retrouvez vers le tout début de votre `rêve`.",
    image: "/assets/images/coincer.jpg",
    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "accueil",
      },
    ],
  },
};

// Ps3 (Réparer + Expliquer par le prof)

const contenueJeu = document.querySelector("#jeu");
const title = document.querySelector("h1");
const text = document.querySelector("p");
const contenueImage = document.querySelector(".petitimg");
const buttons = document.querySelector(".boutons");

// Création du code à 4 chiffres
const numberRep1 = Math.round(Math.random() * 9);
const numberRep2 = Math.round(Math.random() * 9);
const numberRep3 = Math.round(Math.random() * 9);
const numberRep4 = Math.round(Math.random() * 9);
const code = numberRep1 + "" + numberRep2 + "" + numberRep3 + "" + numberRep4;
const textCode = document.createTextNode(code);

// Appelle au son pour les boutons uniques
const bruitFleche = new Audio("assets/videos/arrow.mp3");

function goToChapter(key) {
  let chapitre = chapters[key];

  console.log(chapitre.titre);
  console.log(chapitre.description);
  console.log(chapitre.image);

  title.innerHTML = chapitre.titre;
  text.innerHTML = chapitre.description;

  /*
  // Appliquer si video existant (muet + boucle)
  if (video == true) {
    contenueImage.src = chapitre.video;
  } else {
    contenueImage.src = chapitre.image;
  }
*/
  // créé une nouvelle balise paragraphe "p"
  const p = document.createElement("p");
  p.appendChild(textCode);

  if (chapitre === chapters.the) {
    // Le code vue au joueuer seulement dans ce chapitre
    contenueJeu.appendChild(p);
  }

  // Enlève tous les boutons = met en vide
  buttons.innerHTML = "";

  for (let i = 0; i < chapitre.buttons.length; i++) {
    console.log(chapitre.buttons[i]);

    if (chapitre === chapters.maison) {
      // ajoute un input pour inscrire le code
      const msgNumber = document.createElement("input");
      // Donner un name à l'input pour l'appeler après
      msgNumber.setAttribute("name", "msgNumberEcrit");
      buttons.appendChild(msgNumber);

      const newBtn = document.createElement("button");
      newBtn.textContent = chapitre.buttons[i].titre;
      newBtn.addEventListener("click", () => {
        // Quand c'est un ElementsByName, c'est un array (Ne pas oublier l'exemple de body) [à voir dans les notes de cours]
        let value = document.getElementsByName("msgNumberEcrit")[0].value;
        if (value === code) {
          // le son joue dans les boutons uniques
          bruitFleche.play();
          goToChapter("fin");
        } else {
          bruitFleche.play();
          goToChapter("mauvaiscode");
        }
      });
      buttons.appendChild(newBtn);
    } else {
      const newBtn = document.createElement("button");
      newBtn.textContent = chapitre.buttons[i].titre;
      newBtn.addEventListener("click", () => {
        goToChapter(chapitre.buttons[i].destination);
        // Appelle au son pour les boutons créés
        const bruitFleche = new Audio("assets/videos/arrow.mp3");
        // le son joue dans les boutons créés
        bruitFleche.play();
      });
      buttons.appendChild(newBtn);
    }
  }
}

//quand on ouvre la page -> montre directement la page d'accueil
goToChapter("accueil");
