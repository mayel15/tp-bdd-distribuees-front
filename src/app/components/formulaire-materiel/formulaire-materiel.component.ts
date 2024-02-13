import { Component } from '@angular/core';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-formulaire-materiel',
  templateUrl: './formulaire-materiel.component.html',
  styleUrls: ['./formulaire-materiel.component.css']
})
export class FormulaireMaterielComponent {
  numeroSerie: string = '';
  marque: string = '';
  modele: string = '';
  typeMateriel: string = '';
  prix: number = 0;
  groupe: string = '';

  constructor() { }

  onSubmit() {
    const formData = {
      numeroSerie: this.numeroSerie,
      marque: this.marque,
      modele: this.modele,
      typeMateriel: this.typeMateriel,
      prix: this.prix,
      groupe: this.groupe
      
    };

    fetch(API_URL+'/materiel/add', {
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
        console.log('Réponse du serveur:', data);
        // Réinitialiser le formulaire après l'envoi des données avec succès
        this.numeroSerie = '';
        this.marque = '';
        this.modele = '';
        this.typeMateriel = '';
        this.prix = 0;
        this.groupe = '';
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi des données:', error);
      });
  }
}
