import {Enfant} from "@model/enfant";

export const enfants: Enfant[] = [
  {
    id: 0,
    nom: "Leach",
    prenom: "Maxine",
    genre: "Garçon",
    dateNaissance: new Date(2023, 7, 4),
    parents: [
      {
        divorcer: true,
        genre: "F",
        nom: "Dupont",
        prenom: "Marie",
        dateNaissance: new Date(1978, 1, 1),
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
        dateNaissance: new Date(1985, 7, 14),
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
    ]
  }, {
    id: 1,
    nom: "Elliott",
    prenom: "Barlow",
    genre: "Garçon",
    dateNaissance: new Date(2023, 2, 14),
    parents: [
      {
        divorcer: false,
        genre: "F",
        nom: "Leroy",
        prenom: "Anne",
        dateNaissance: new Date(1990, 3, 20),
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
        dateNaissance: new Date(1982, 11, 5),
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
    ]
  }
];
