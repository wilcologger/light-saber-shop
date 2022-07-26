# light-saber-shop

## user stories:
JEDI-1​:​ As a padawan I want to be able to read in a json file that contains data about the light sabers data so I can display the list of available sabes in the webshop. 
```
{ 
    "sabers": [ 
        { 
            "id": 4456, 
            "name": "Sith Saber", 
            "available": 27, 
            "crystal": { 
                "name": "Kadril saber", 
                "color": "red", 
                “planet”: 13 
            } 
        }, 
        { 
            "id": 7766, 
            "name": "Master Jedi Saber", 
            "available": 13, 
            "crystal": { 
                "name": "Obi Wan saber", 
                "color": "green", 
                “planet”: 12 
            } 
        } 
    ] 
}

```
JEDI-2​: As a padawan I want to be able to supply my age, so that I can see how much force is needed to use a saber. 
JEDI-3​:​ As a padawan I want to order a saber. This order needs to be archived for the Jedi master 
JEDI-4​: ​As a Jedi master I want to be able to see the list of orders that are placed, only a jedi master can see this information with a force provided password. 
JEDI-5​: ​As a Jedi master I want to be able to adjust the stock of existing and non-existing sabers. 
JEDI-6​: ​ As a padawan I want to see which planet the crystal comes which is used in the saber API documentation is found on https://swapi.co/ 

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
