# Projet: Les villes américaines
Optimisation d'une page web avec des informations à collecter :
* [schema.org](https://schema.org/)
* sémantique de base
* [Open graph](https://ogp.me/)
* Manifeste html<sup>5</sup>. Exemple:
```js
{
  "name": "Project 2021",
  "short_name": "Portfolio",
  "start_url": "./?utm_source=web_app_manifest",
  "display": "standalone",
  "icons": [{
    "src": "images/touch/homescreen48.png",
    "sizes": "48x48",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen72.png",
    "sizes": "72x72",
    "type": "image/png"
  },{
    "src": "images/touch/homescreen144.png",
    "sizes": "144x144",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen168.png",
    "sizes": "168x168",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen192.png",
    "sizes": "192x192",
    "type": "image/png"
  }],
  "related_applications": [{
    "platform": "web"
  }, {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.google.samples.apps.iosched"
  }]
}

```