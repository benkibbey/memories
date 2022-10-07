OC.L10N.register(
    "memories",
    {
    "Memories" : "Souvenirs",
    "Yet another photo management app" : "Une nouvelle application de gestion des photos",
    "# Memories\n\n* **📸 Photo and Video Timeline**: Sorts photos by date taken, parsed from Exif data.\n* **🤔 Quick Recap**: Jump to anywhere in the timeline instantly.\n* **🖼️ Folders**: Browse your and shared folders with a similar, efficient timeline.\n* **🎦 Slideshow**: View photos from your timeline and folders easily.\n* **📱 Mobile Support**: Relive your memories on devices of any shape and size through the web app.\n* **🗑️ Recycle**: Select and delete multiple photos and videos at once.\n* **✏️ Edit Metadata**: Edit Exif dates on photos quickly and easily.\n* **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n* **⚡️ Fast**: Memories is extremely fast. Period.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store\n1. ⚒️ Install `exiftool` (see below).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos. Photos from this directory will be displayed in the timeline, including any photos in nested subdirectories.\n1. Installing the [preview generator](https://github.com/rullzer/previewgenerator) for pre-generating thumbnails is strongly recommended.\n\n## 🔨 Installing Dependencies\nThe exact steps depend on your Nextcloud platform. If you use Docker for your Nextcloud instance, you can install Exiftool by using a custom docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`" : "# Souvenirs\n\n* **📸 Chronologie des photos et vidéos** : Trie les photos par date de prise, analysée à partir des données Exif.\n* **🤔 Récapitulatif rapide** : Passez instantanément à n'importe quel endroit de la chronologie.\n* **🖼️ Folders** : Parcourez vos dossiers et les dossiers partagés avec une ligne de temps similaire et efficace.\n* **🎦 Diaporama** : Visualisez facilement les photos de votre timeline et de vos dossiers.\n**📱 Support mobile** : Revivez vos souvenirs sur des appareils de toute forme et de toute taille grâce à l'application web.\n* **🗑️ Recyclage** : Sélectionnez et supprimez plusieurs photos et vidéos à la fois.\n* **✏️ Modifier les métadonnées** : Modifiez les dates Exif sur les photos rapidement et facilement.\n**📦 Archive** : Stockez les photos que vous ne voulez pas voir dans votre timeline dans un dossier séparé.\n* **⚡️ Rapide** : Memories est extrêmement rapide. Point final.\n\n## 🚀 Installation\n\n1. Installez l'application à partir de la boutique d'applications Nextcloud.\n1. ⚒️ Installez `exiftool` (voir ci-dessous). 1.\n1. Exécutez `php ./occ memories:index` pour générer des index de métadonnées pour les photos existantes. 1.\n1. Ouvrez l'application 📷 Memories dans Nextcloud et définissez le répertoire contenant vos photos. Les photos de ce répertoire seront affichées dans la timeline, y compris les photos des sous-répertoires imbriqués.\n1. L'installation du [générateur de prévisualisation](https://github.com/rullzer/previewgenerator) pour la pré-génération de vignettes est fortement recommandée. 2.\n\n## 🔨 Installer les dépendances\nLes étapes exactes dépendent de votre plateforme Nextcloud. Si vous utilisez Docker pour votre instance Nextcloud, vous pouvez installer Exiftool en utilisant une image docker personnalisée .\n- **Ubuntu/Debian** : `sudo apt install libimage-exiftool-perl`\n- **Fedora** : `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux** : `sudo pacman -S perl-image-exiftool`\n- **Alpine** : `apk add --no-cache exiftool`\n- **MacOS** : `brew install exiftool`\n- **FreeBSD** : `sudo pkg install p5-Image-ExifTool`",
    "Timeline" : "Fil chronologique",
    "Folders" : "Dossiers",
    "Favorites" : "Favoris",
    "Videos" : "Vidéos",
    "Archive" : "Archive",
    "On this day" : "Ce même jour",
    "Tags" : "Étiquettes",
    "Settings" : "Paramètres",
    "Edit Date/Time" : "Éditer la Date/Heure",
    "Newest" : "Plus récent",
    "Year" : "Année",
    "Month" : "Mois",
    "Day" : "Jour",
    "Time" : "Heure",
    "Hour" : "Heure",
    "Minute" : "Minute",
    "Oldest" : "Plus ancien",
    "This feature modifies files in your storage to update Exif data." : "Cette fonctionnalité modifie les fichiers de votre stockage pour mettre à jour les données Exif.",
    "Exercise caution and make sure you have backups." : "Faites preuve de prudence et assurez-vous que vous disposez de sauvegardes.",
    "Update Exif" : "Mettre à jour l'Exif",
    "Cannot find this photo anymore!" : "Impossible de trouver cette photo !",
    "Timeline Path" : "Emplacement du Fil chronologique",
    "Show hidden folders" : "Afficher les dossiers cachés",
    "Update" : "Mise à jour",
    "Error updating settings" : "Erreur lors de la mise à jour des paramètres",
    "Cancel" : "Annuler",
    "Delete" : "Supprimer",
    "Download" : "Télécharger",
    "Favorite" : "Favoris",
    "Unarchive" : "Désarchiver",
    "View in folder" : "Afficher dans le dossier",
    "No photos to show here" : "Aucune photo à montrer ici",
    "Failed to load some photos" : "Échec du chargement de certaines photos",
    "You are about to download a large number of files. Are you sure?" : "Vous êtes sur le point de télécharger un grand nombre de fichiers. Êtes-vous certain de vouloir le faire ?",
    "You are about to delete a large number of files. Are you sure?" : "Vous êtes sur le point de supprimer un grand nombre de fichiers. Êtes-vous certain⋅e de vouloir le faire ?",
    "You are about to touch a large number of files. Are you sure?" : "Vous êtes sur le point de modifier un grand nombre de fichiers. Êtes-vous sûr(e) ?",
    "_{n} selected_::_{n} selected_" : ["{n} sélectionné","{n} sélectionnés","{n} sélectionnés"],
    "Failed to delete files." : "Échec de la suppression des fichiers.",
    "Failed to delete {fileName}." : "Échec de la suppression de {fileName}.",
    "General Failure" : "Échec général",
    "Error: {msg}" : "Erreur : {msg}",
    "Failed to favorite {fileName}." : "Échec de l'ajout aux favoris de {fileName}.",
    "Failed to favorite files." : "Échec de la mise en favoris des fichiers."
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
