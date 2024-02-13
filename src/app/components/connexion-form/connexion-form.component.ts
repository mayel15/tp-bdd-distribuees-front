import { Component } from '@angular/core';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.css']
})
export class ConnexionFormComponent {
  login: string = '';
  password: string = '';

  constructor() { }

  onSubmit() {
    const formData = {
      login: this.login,
      password: this.password
    };

    fetch(API_URL+'/membre/login', {
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
        window.location.href = '/home';
        console.log('Réponse du serveur:', data);
        // Réinitialiser le formulaire après l'envoi des données avec succès
        this.login = '';
        this.password = '';

      })
      .catch(error => {
        alert('Login ou mot de passe incorrect !');
        console.error('Erreur lors de l\'envoi des données:', error);
      });
  }
}
