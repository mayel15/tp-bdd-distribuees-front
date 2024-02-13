import { Component } from '@angular/core';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-recup-form',
  templateUrl: './recup-form.component.html',
  styleUrls: ['./recup-form.component.css']
})
export class RecupFormComponent {
  materiels: any[] = []; // tableau pour stocker les options
  ngOnInit() {
    // Appel à votre API pour récupérer les données
    fetch(API_URL+'/materiels')
      .then(response => response.json())
      .then(data => {
        this.materiels = data; // Stockage des données dans le tableau d'options
        console.log("Données récupérées depuis l\'API :", data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données depuis l\'API :', error);
      });
  }
}
