// créer une variable 'str' qui nous retourne l'url complète de la page
var str = location;
// créer une variable 'url' qui corresponds à 'str'
var url = new URL(str);
// créer une variable 'monId' qui va renvoyer le paramètre 'id' contenu dans l'url
var monId = url.searchParams.get("id");
//console.log(monId);

// faire un appel 'fetch' à l'api pour aller chercher la valeur de 'monId'
fetch(`http://127.0.0.1:3000/api/products/${monId}`, { method: 'GET' })
    .then(function (response) {
        return response.json()
    })
    .then(function (product) {

        // PLACER L'IMAGE
        // créer une variable 'imageContainer' dans '.item__img'
        var imageContainer = document.querySelector(".item__img");
        // créer une constante 'imageProd' qui va accueillir une image dans imageContainer
        const imageProd = document.createElement('img');
        // ajout en tant que enfant dans 'imageContainer'
        imageContainer.appendChild(imageProd);
        // créer le texte alternatif de 'image'
        imageProd.setAttribute('alt', product.altTxt);
        // créer l'url' de 'image'
        imageProd.setAttribute('src', product.imageUrl);

        // PLACER LE TITRE
        // On sélectionne l'ID 'title' dans le html
        let titleContainer = document.querySelector("#title");
        // On crée dedans un contenu qui est le selecteur 'name' du tableau 'products'
        titleContainer.innerHTML = product.name;

        // PLACER LE PRIX
        // On sélectionne l'ID 'price' dans le html
        let priceContainer = document.querySelector("#price");
        // On crée dedans un contenu qui est le selecteur 'price' du tableau 'products'
        priceContainer.innerHTML = product.price;

        // PLACER LA DESCRIPTION
        // On sélectionne l'ID 'description' dans le html
        let descContainer = document.querySelector("#description");
        // On crée dedans un contenu qui est le selecteur 'description' du tableau 'products'
        descContainer.innerHTML = product.description;

        // PLACER LES CHOIX DE COULEURS
        // On sélectionne l'ID 'colors' dans le html
        let colorsContainer = document.querySelector("#colors");
        // On parcours le tableau 'colors' de l'élément 'product' (élément individuel du tableau 'products')
        // et on défini chaque élément de ce tableau 'colors' en tant que variable 'color'
        for (let color of product.colors) {
            //on crée dans le html une constante 'option'
            const option = document.createElement('option');
            //on assigne à cette option une valeur
            option.value = color;
            option.innerHTML = color;
            colorsContainer.appendChild(option);
            //console.log(colorsContainer);
        }

    })

    // ÉCOUTER LES CHOIX UTILISATEUR À ENVOYER AU LOCALSTORAGE
    const buttonAddToCart = document.querySelector("#addToCart");
    buttonAddToCart.addEventListener('click', function(userAdd){
        console.log (userAdd)

    })