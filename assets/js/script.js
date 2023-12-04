// pour le remise en retart Ps2

//Ps2
const chapters = {
  accueil: {
    titre: "Avant de commencer !",
    description:
      "Vous vous réveilliez dans un monde surréel. La sensation d'être dans ce rêve lucide vous rend mal à l'aise. Votre but est de sortir de ce cauchemar.",
    video: "./assets/video/accueil.mp4",
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
      "Vous marchez dans un chemin étroit qui vous mène vers une intersection. Un des chemins vous mène vers une forêt remplie des yeux puis l'autre une plaine déserte.",
    image: "./assets/images/plaine.jpg",
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
    titre: "C'était de la drogue?",
    description:
      "Plus ce que vous marchez dans la forêt, vous sentez que votre tête tourne en rond. Des hallucinations vous hantent jusqu'à quand vos jambes perdent l'équilibre.",
    image: "./assets/images/foret.jpg",
    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "accueil",
      },
    ],
  },
  plaine: {
    titre: "Paix, mais pour quel coût",
    description:
      "Vous continuez votre chemin dans la plaine. Vous sentez que quelque chose vous suit. Des bruits insupportables sonnent dans vos oreilles... Vous n’êtes pas tout seuls. Une porte obscure se tient devant vous.",
    image: "./assets/images/porte_sombre.jpg",
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
      "Vous vous tournez pour vous élancer vers la cause des sons catastrophiques. Mais avant de faire cela, vous voyiez un trou noir qui avance vers vous. Stupéfait, quand vous réouvrîtes les yeux pour comprendre ce que vous avez vu, vous vous retrouvez dans l'obscurité total.",
    video: "./assets/video/creature.mp4",
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
      "Vous entrez dans la porte noire. Étonné d’être dans une maison vide, vous marchez dans un corridor et vous voyez une `pièce de cuisine` ainsi qu’une tasse de thé placer sur le plancher. ",
    image: "./assets/images/maison_vide.jpg",
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
      "En buvant le thé, vous vous sentez un peu étourdi et vous tombez dans un sommeil profond. Ceci cause une hallucination de composition de chiffres. Réveilliez, vous sentez toujours perdue, mais gagne de la confiance. Ces chiffres devront être importants, vous ne devez pas les oublier.",
    image: "./assets/images/the.jpg",
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
      "Vous décidiez d’explorer la maison. La cuisine est remplie dans un silence très fort. Cela vous attire, mais votre intention est plus forte. Malheureusement, vous n’avez rien trouvé puis vous décidez d’explorer les autres chambres.",
    image: "./assets/images/cuisine_vide.jpg",
    buttons: [
      {
        titre: "➤ Aller vers la dernière chambre",
        destination: "chambre",
      },
    ],
  },
  chambre: {
    titre: "Le dernier arrêt",
    description:
      "Vous explorez le reste de la maison puis vous trouvez ce que vous pensez être la sortie.",
    image: "./assets/images/maison.jpg",
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
    titre: "La finale?",
    description:
      "Vous décidez de sortir, mais, quand vous ouvrez la porte, vous vous retrouvez vers le tout début de votre `rêve`. Une boucle, vous pensez. Ceci n’est pas votre fin…",
    image: "./assets/images/coincer.jpg",
    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "accueil",
      },
    ],
  },
  maison: {
    titre: "Dernier? Qui a dit que c'était le dernier?",
    description:
      "Vous décidez de réexplorer la maison pour bien-être sûr que vous n'avez pas oublié quelque chose. Cette action intelligente vous permet de recevoir une montre dont les aiguilles ne marchent pas. Par coïncidence, vous savez que cette montre est la clé de la sortie. Vous devez juste mettre la bonne combinaison de chiffres.",
    image: "./assets/images/montre.webp",
    buttons: [{ titre: "➤ Mettre le code", destination: "Twist" }], // Ce chapitre n'a pas réellement une destination, car c'est un chapitre unique (twist) [Change manuellement dans la fonction]
  },
  fin: {
    titre: "Fou? J'étais fou une fois...",
    description:
      "Vous ouvrez vos yeux, le plafond comme le plancher. Les murs sont identiques...Vous sentez une vague de folie revenir. Êtes-vous réellement sortie?",
    image: "./assets/images/hopital.jpg",
    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "accueil",
      },
    ],
  },
  mauvaiscode: {
    titre: "Ne prends pas personnellement",
    description:
      "Vous n'avez pas mis le bon code. Quand vous ouvrez la porte de sortie, vous vous retrouvez vers le début de votre `rêve`.",
    image: "./assets/images/coincer.jpg",
    buttons: [
      {
        titre: "➤ Retour vers le début",
        destination: "accueil",
      },
    ],
  },
};

// Ps3

const contenueJeu = document.querySelector("#jeu");
const title = document.querySelector("h2");
const text = document.querySelector("p");
const buttons = document.querySelector(".boutons");
const divVisuel = document.getElementById("visuel");

// Création du code à 4 chiffres
const numberRep1 = Math.round(Math.random() * 9);
const numberRep2 = Math.round(Math.random() * 9);
const numberRep3 = Math.round(Math.random() * 9);
const numberRep4 = Math.round(Math.random() * 9);
const code = numberRep1 + "" + numberRep2 + "" + numberRep3 + "" + numberRep4;
const textCode = document.createTextNode(code);

function goToChapter(key) {
  // Ps4.1 Music ambiance en loop
  const musiqueAmbiance = new Audio("./assets/video/music_ambiance.mp3");

  // Appelle au son pour les boutons uniques
  const bruitFleche = new Audio("./assets/video/arrow.mp3");

  // Ps5.1 bouton mute

  let btnMute = document.querySelector("#check");

  btnMute.addEventListener("change", () => {
    localStorage.setItem("Muted", btnMute.checked);
    if (localStorage.getItem("Muted") === "true") {
      musiqueAmbiance.muted = true;
      bruitFleche.muted = true;
      problemeSonEffet.muted = true;
      notificationSonEffet.muted = true;
    }
  });

  if (localStorage.getItem("Muted") !== "true") {
    musiqueAmbiance.loop = true;
    musiqueAmbiance.autoplay = true;
  }

  // Easter Egg + bouton de réinstallation Ps4.2

  const btnHelpQuestion = document.getElementById("help");
  const btnDelete = document.getElementById("x");
  const btnGoBack = document.getElementById("goBack");
  const popupX = document.getElementById("popUpDelete");
  const btnRestart = document.getElementById("btnRestart");

  const notificationSonEffet = new Audio(
    "./assets/video/sound_effet_windows_notification.mp3"
  );

  btnHelpQuestion.addEventListener("click", () => {
    btnDelete.setAttribute("Disabled", true);
    if (localStorage.getItem("Muted") !== "true") {
      notificationSonEffet.play();
    }

    setTimeout(() => {
      popupX.style.display = "block";
      btnRestart.style.display = "block";
    }, 500);
  });

  btnRestart.addEventListener("click", () => {
    popupX.style.display = "none";
    localStorage.clear();
  });

  const problemeSonEffet = new Audio(
    "./assets/video/sound_effet_windows_probleme.mp3"
  );

  btnDelete.addEventListener("click", () => {
    btnHelpQuestion.setAttribute("Disabled", true);
    if (localStorage.getItem("Muted") !== "true") {
      problemeSonEffet.volume = 0.2;
      problemeSonEffet.play();
    }

    setTimeout(() => {
      let paraMsg = document.getElementById("msgQuestion");
      paraMsg.textContent = "Bonne essaie, mais tu restes coincé ici.";
      popupX.style.display = "block";
    }, 500);
    btnRestart.style.display = "none";
  });

  btnGoBack.addEventListener("click", () => {
    btnHelpQuestion.removeAttribute("Disabled");
    btnDelete.removeAttribute("Disabled");
    popupX.style.display = "none";
  });

  let chapitre = chapters[key];

  title.innerHTML = chapitre.titre;
  text.innerHTML = chapitre.description;
  divVisuel.innerHTML = "";

  if (chapitre.video != undefined) {
    const videoContenue = document.createElement("video");
    videoContenue.src = chapitre.video;
    videoContenue.classList.add("petitimg");
    videoContenue.play();
    videoContenue.loop = true;
    videoContenue.autoplay = true;
    videoContenue.muted = true;

    divVisuel.appendChild(videoContenue);
  } else {
    const imageContenue = document.createElement("img");
    imageContenue.classList.add("petitimg");
    imageContenue.src = chapitre.image;
    divVisuel.appendChild(imageContenue);
  }

  // créé une nouvelle balise paragraphe "p"
  const p = document.createElement("p");
  p.appendChild(textCode);

  if (chapitre === chapters.the) {
    // Le code vue au joueuer seulement dans ce chapitre
    contenueJeu.appendChild(p);
    localStorage.setItem("Code", JSON.stringify(code));
  }

  // Enlève tous les boutons = met en vide
  buttons.innerHTML = "";

  for (let i = 0; i < chapitre.buttons.length; i++) {
    if (chapitre === chapters.maison) {
      // ajoute un input pour inscrire le code
      const msgNumber = document.createElement("input");
      // Donner un name à l'input pour l'appeler après
      msgNumber.setAttribute("name", "msgNumberEcrit");
      msgNumber.classList.add("inputold");
      buttons.appendChild(msgNumber);

      const newBtn = document.createElement("button");
      newBtn.textContent = chapitre.buttons[i].titre;
      newBtn.addEventListener("click", () => {
        // Quand c'est un ElementsByName, c'est un array (Ne pas oublier l'exemple de body) [à voir dans les notes de cours]
        let value = document.getElementsByName("msgNumberEcrit")[0].value;

        // Conserve le code pris durant le jeu (dans le storage)
        const codeStorage = JSON.parse(localStorage.getItem("Code"));
        if (value === codeStorage) {
          if (localStorage.getItem("Muted") !== "true") {
            // le son joue dans les boutons créés
            bruitFleche.play();
          }
          goToChapter("fin");
        } else {
          if (localStorage.getItem("Muted") !== "true") {
            // le son joue dans les boutons créés
            bruitFleche.play();
          }
          goToChapter("mauvaiscode");
        }
      });
      buttons.appendChild(newBtn);
    } else {
      const newBtn = document.createElement("button");
      newBtn.textContent = chapitre.buttons[i].titre;
      newBtn.addEventListener("click", () => {
        goToChapter(chapitre.buttons[i].destination);
        localStorage.setItem("chaptersObj", JSON.stringify(key));
        if (localStorage.getItem("Muted") !== "true") {
          // le son joue dans les boutons créés
          bruitFleche.play();
        }
      });
      buttons.appendChild(newBtn);
    }
  }
}

if (localStorage.getItem("chaptersObj") != undefined) {
  //doit prendre en compte la progression du joueur
  const chapitreEnPause = JSON.parse(localStorage.getItem("chaptersObj"));
  goToChapter(chapitreEnPause);
} else {
  //quand on ouvre la page -> montre directement la page d'accueil
  goToChapter("accueil");
}
