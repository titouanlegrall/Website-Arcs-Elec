document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.savoirplus');
    if (btn) {
        btn.addEventListener('mousemove', e => {
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
        });
    }

    const maDiv = document.querySelector('#logo');
    const maDiv2 = document.querySelector('#text');
    const maDiv3 = document.querySelector('#first-plan');
    const maDiv4 = document.querySelector('#navbar');
    
    if (maDiv2) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.boundingClientRect.top < 0 && !entry.isIntersecting) {
            maDiv.style.position = 'sticky';
            maDiv.style.top = '10px';
            maDiv.style.transform = 'translateX(-50%) scale(0.3)'; // scale seulement
            maDiv3.style.marginTop = '-200px';
            maDiv4.style.transform = 'translateY(0px)';
            maDiv4.style.height = (window.innerWidth * 0.05) + 'px';
          } else {
            maDiv.style.position = 'absolute';
            maDiv.style.top = '1200px';
            maDiv.style.transform = 'translateX(-50%) scale(1)'; // reset normal
            maDiv3.style.marginTop = '60px';
            maDiv4.style.transform = 'translateY(-500px)';
            maDiv4.style.height = '0px';
          }
        });
      }, { threshold: 0 });
    
      observer.observe(maDiv2);
    }

    window.addEventListener('resize', () => {
        const maDiv4 = document.querySelector('#navbar');
        if (maDiv4) {
            maDiv4.style.height = (window.innerWidth * 0.05) + 'px';
        }
    });

    const adresseButton = document.getElementById('adresse');
    if (adresseButton) {
        const newContent = "27 rue Gabriel Péri   |   83460 Les Arcs sur Argens";

        adresseButton.addEventListener('mouseover', () => {
            adresseButton.textContent = newContent;
        });

        adresseButton.addEventListener('mouseout', () => {
            adresseButton.textContent = 'Adresse';
        });

        adresseButton.addEventListener('click', () => {
            const textarea = document.createElement('textarea');
            textarea.value = newContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            adresseButton.textContent = 'Copié !';
            setTimeout(() => {
                adresseButton.textContent = 'Adresse';
            }, 1000);
        });
    }

    const burger = document.getElementById('burger');
    const navbar = document.getElementById('navbar');

    if (burger && navbar) {
        burger.addEventListener('click', () => {
            navbar.classList.toggle('open');
        });
    }
});


        // Récupérer le bouton
        const adresseButton = document.getElementById('adresse');

        // Le texte à afficher lors du survol
        const newContent = "27 rue Gabriel Péri   |   83460 Les Arcs sur Argens";

        // Gérer le survol (hover)
        adresseButton.addEventListener('mouseover', () => {
            adresseButton.textContent = newContent; // Change le texte du bouton au survol
        });

        // Gérer la sortie de la souris (mouseout)
        adresseButton.addEventListener('mouseout', () => {
            adresseButton.textContent = 'Adresse'; // Réinitialise le texte lorsqu'on quitte le bouton
        });

        // Gérer le clic pour copier dans le presse-papier
        adresseButton.addEventListener('click', () => {
            // Créer un élément temporaire pour copier le texte
            const textarea = document.createElement('textarea');
            textarea.value = newContent; // Mettre le texte à copier dans le textarea
            document.body.appendChild(textarea); // Ajouter temporairement l'élément au DOM

            textarea.select(); // Sélectionner le texte
            document.execCommand('copy'); // Copier dans le presse-papier

            document.body.removeChild(textarea); // Supprimer l'élément temporaire du DOM

            // Changer le texte du bouton pour "Copié !" pendant 1 seconde
            adresseButton.textContent = 'Copié !';

            // Remettre le texte du bouton à "Adresse" après 1 seconde
            setTimeout(() => {
                adresseButton.textContent = 'Adresse';
            }, 1000); // 1000 ms = 1 seconde
        });

        document.addEventListener('DOMContentLoaded', () => {
            const burger = document.getElementById('burger');
            const navbar = document.getElementById('navbar');

            // Ajouter un événement pour le bouton burger
            burger.addEventListener('click', () => {
                navbar.classList.toggle('open'); // Ajouter ou retirer la classe 'open'
            });
        });
