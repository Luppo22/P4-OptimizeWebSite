fetch('http://127.0.0.1:3000/api/products/', { method: 'GET' })
  .then(function (response) {
    return response.json()
  })
  .then(function (products) {

    // créer une variable 'itemsContainer' dans '#items'
    var itemsContainer = document.querySelector("#items");


    for (let product of products){
      // Juste pour vérifier qu'on accède bien à la liste de product.js
      console.log(product);

      // CRÉATION DU LIEN
      // créer une variable 'productId' qui pointe (en notation dot) vers _id dans product (qui est dans Products.js)
      let productId = product._id;
      // créer une constante 'link'
      const link = document.createElement('a');
      // ajout en tant que enfant dans 'itemsContainer'
      itemsContainer.appendChild(link);
      // créer le lien 'link' qui renvoie la variable de l'id du produit vers la page product.html
      link.href = `product.html?id=${productId}`;

      // créer une constante 'article' (dans link qui est dans itemsContainer qui est dans #items)
      const article = document.createElement('article');
       // ajout en tant que enfant dans 'link'
      link.appendChild(article);

      // CRÉATION DE L'IMAGE
      // créer une image dans article
      const image = document.createElement('img');
      // ajout en tant que enfant dans 'article'
      article.appendChild(image);
      // créer le texte alternatif de 'image'
      image.setAttribute('alt',product.altTxt);
      // créer l'url' de 'image'
      image.setAttribute('src',product.imageUrl);

      // CRÉATION DU TITRE
      // créer une balise html h3 (du nom du produit) dans article
      const productName = document.createElement('h3');
      // on déclare ce que va contenir cette variable 'productName'
      productName.innerText = product.name;
      // ajout en tant que enfant dans 'article'
      article.appendChild(productName);

      // CRÉATION DU TEXTE DE DESCRIPTION
      // créer une balise html p (description du produit) dans article
      const productDescription = document.createElement('p');
      productDescription.innerText = product.description;
      // ajout en tant que enfant dans 'article'
      article.appendChild(productDescription);

    }

  })