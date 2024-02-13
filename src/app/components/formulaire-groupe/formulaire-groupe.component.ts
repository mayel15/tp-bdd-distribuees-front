import { Component } from '@angular/core';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-formulaire-groupe',
  templateUrl: './formulaire-groupe.component.html',
  styleUrls: ['./formulaire-groupe.component.css']
})
export class FormulaireGroupeComponent {
  numeroGroupe: string = '';
  nom: string = '';
  ville: string = '';
  codePostal: string = '';

  constructor() { }

  onSubmit() {
    const formData = {
      numeroGroupe: this.numeroGroupe,
      nom: this.nom,
      ville: this.ville,
      codePosta: this.codePostal
    };

    fetch(API_URL+'/groupe/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la requête.');
        }
        return response.json();
      })
      .then(data => {
        alert('Groupe enregistré avec succès !');
        console.log('Réponse du serveur:', data);
        // Réinitialiser le formulaire après l'envoi des données avec succès
        this.numeroGroupe = '';
        this.nom = '';
        this.ville = '';
        this.codePostal = '';
      })
      .catch(error => {
        alert('Erreur lors de l\'enregistrement du groupe !');
        console.error('Erreur lors de l\'envoi des données:', error);
      });
  }
}
