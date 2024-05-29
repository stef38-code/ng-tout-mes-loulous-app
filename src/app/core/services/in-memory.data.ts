import {Enfant} from "@model/enfant";

export const enfants: Enfant[] = [
  {
    id: 0,
    nom: "Leach",
    prenom: "Maxine",
    genre: "Garçon",
    dateNaissance: "04/07/2023",
    parents: [
      {
        divorcer: true,
        genre: "F",
        nom: "Dupont",
        prenom: "Marie",
        dateNaissance: "01/01/1978",
        adresse: {
          rue: "rue du Soleil",
          codePostal: "75000",
          ville: "Paris",
          pays: "France"
        },
        telephones: [
          {numero: "0123456789", type: "fixe"},
          {numero: "0612345678", type: "portable"}
        ],
        emails: [
          {adresse: "marie.dupont@exemple.com", type: "personnel"},
          {adresse: "marie.dupont@professionnel.com", type: "professionnel"}
        ]
      }, {
        divorcer: true,
        genre: "M",
        nom: "Martin",
        prenom: "Jean",
        dateNaissance: "14/05/1985",
        adresse: {
          rue: "rue de la Lune",
          codePostal: "13000",
          ville: "Marseille",
          pays: "France"
        },
        telephones: [
          {numero: "0987654321", type: "fixe"}
        ],
        emails: [
          {adresse: "jean.martin@exemple.com", type: "personnel"}
        ]
      }
    ],
    fratrie: [2]
  }, {
    id: 1,
    nom: "Elliott",
    prenom: "Barlow",
    genre: "Garçon",
    dateNaissance: "14/02/2023",
    parents: [
      {
        divorcer: false,
        genre: "F",
        nom: "Leroy",
        prenom: "Anne",
        dateNaissance: "20/05/1990",
        adresse: {
          rue: "rue des Fleurs",
          codePostal: "69000",
          ville: "Lyon",
          pays: "France"
        },
        telephones: [
          {numero: "0789012345", type: "portable"},
          {numero: "0467891234", type: "fixe"}
        ],
        emails: [
          {adresse: "anne.leroy@exemple.com", type: "personnel"},
          {adresse: "anne.leroy@professionnel.com", type: "professionnel"}
        ]
      },
      {
        divorcer: false,
        genre: "M",
        nom: "Petit",
        prenom: "Nicolas",
        dateNaissance: "05/11/1982",
        adresse: {
          rue: "rue du Boulevard",
          codePostal: "34000",
          ville: "Montpellier",
          pays: "France"
        },
        telephones: [
          {numero: "0456789123", type: "fixe"}
        ],
        emails: [
          {adresse: "nicolas.petit@exemple.com", type: "personnel"}
        ]
      }
    ],
    fratrie: []
  },
  {
    id: 2,
    nom: "Leach",
    prenom: "Julie",
    genre: "Fille",
    dateNaissance: "24/02/2020",
    parents: [
      {
        divorcer: true,
        genre: "F",
        nom: "Dupont",
        prenom: "Marie",
        dateNaissance: "01/01/1978",
        adresse: {
          rue: "rue du Soleil",
          codePostal: "75000",
          ville: "Paris",
          pays: "France"
        },
        telephones: [
          {numero: "0123456789", type: "fixe"},
          {numero: "0612345678", type: "portable"}
        ],
        emails: [
          {adresse: "marie.dupont@exemple.com", type: "personnel"},
          {adresse: "marie.dupont@professionnel.com", type: "professionnel"}
        ]
      }, {
        divorcer: true,
        genre: "M",
        nom: "Martin",
        prenom: "Jean",
        dateNaissance: "14/07/1985",
        adresse: {
          rue: "rue de la Lune",
          codePostal: "13000",
          ville: "Marseille",
          pays: "France"
        },
        telephones: [
          {numero: "0987654321", type: "fixe"}
        ],
        emails: [
          {adresse: "jean.martin@exemple.com", type: "personnel"}
        ]
      }
    ],
    fratrie: [0]
  }
];
