> M09 - Disseny d'interfícies web, Institut Montsià. DAW

# Instal·lació

## Clonar el repositori

```
$ git clone https://github.com/rogerforner/tinkeringWCAG.git
```

### Grup 3

- Enric Beltran.
- Javier López.
- Roger Forner.

## Instal·lar dependències

```
$ npm install
```

# Executar servidor

```
$ php -S localhost:8000
```


# Compilar SASS

*Només es compilaran els .scss*

Per compilar SASS fem ús de **Gulp**:

```
$ gulp scss
```

Per no haver d'executar la comanda anterior cada cop que editem els fitxers:

```
$ gulp watch
```

# Publicar a GitHub Pages

```
$ git checkout gh-pages
$ git rebase master
$ git push origin gh-pages
$ git checkout master
```