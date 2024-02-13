import { Component } from '@angular/core';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-formulaire-membre',
  templateUrl: './formulaire-membre.component.html',
  styleUrls: ['./formulaire-membre.component.css']
})
export class FormulaireMembreComponent {
  idMembre: number = 0;
  nom: string = '';
  prenom: string = '';
  adresseCP: string = '';
  adresseRue: string = '';
  adresseVille: string = '';
  typeMembre: string = '';
  login: string = '';
  password: string = '';
  email: string = '';
  groupe: string = '';


  constructor() { }

  options: any[] = []; // tableau pour stocker les options
  ngOnInit() {
    // Appel à votre API pour récupérer les données
    fetch(API_URL+'/groupes')
      .then(response => response.json())
      .then(data => {
        this.options = data; // Stockage des données dans le tableau d'options
        console.log("Données récupérées depuis l\'API :", data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données depuis l\'API :', error);
      });
  }

  onSubmit() {
    const formData = {
      idMembre: this.idMembre,
      nom: this.nom,
      prenom: this.prenom,
      adresseCP: this.adresseCP,
      adresseRue: this.adresseRue,
      adresseVille: this.adresseVille,
      typeMembre: this.typeMembre,
      login: this.login,
      password: this.password,
      email: this.email,
      groupe: this.groupe
    };

    fetch(API_URL+'/membre/signup', {
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
        this.idMembre = 0;
        this.nom = '';
        this.prenom = '';
        this.adresseCP = '';
        this.adresseRue = '';
        this.adresseVille = '';
        this.typeMembre = '';
        this.login = '';
        this.password = '';
        this.email = '';
        this.groupe = '';
      })
      .catch(error => {
        alert('Erreur lors de l\'enregistrement du membre.');
        console.error('Erreur lors de l\'envoi des données:', error);
      });
  }
}
