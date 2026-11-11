# Site web inRsi basé sur le gabarit [Start Bootstrap - Agency](https://startbootstrap.com/template-overviews/agency/)


## Maintenance

Le site est servi directement à partir des fichiers HTML, CSS et JavaScript du dépôt.
Aucune installation npm ni compilation Gulp n’est nécessaire.

- Modifier `index.html` et les styles personnalisés dans `css/inrsi.css`.
- `css/agency.css` est la feuille du thème chargée par les pages. Les fichiers `scss/`
  sont conservés comme référence historique et ne sont pas compilés automatiquement.
- Le site charge `js/agency.min.js`; toute modification de `js/agency.js` doit aussi
  être reportée dans ce fichier pour être visible.
- Les bibliothèques utilisées restent dans `vendor/` et `js/blazy.min.js`.
  Leurs sources et licences sont conservées pour faciliter les mises à jour.

Le site utilise jQuery 4.0.0 et Bootstrap 5.3.8 (avec Popper inclus dans le bundle).
Les menus et fenêtres utilisent les attributs `data-bs-*` de Bootstrap 5.
jQuery et jQuery Easing restent utilisés pour le défilement animé.
Après une mise à jour, vérifier le menu mobile, les fenêtres, le retour du focus,
le défilement et la mise en page dans Chrome et Safari, y compris sur iPhone.

L’ancien formulaire de contact du gabarit et sa validation, ainsi que les configurations
Gulp et Travis incomplètes, ont été retirés. L’inscription à l’infolettre utilise Zeffy.
