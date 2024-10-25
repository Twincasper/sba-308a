
# SBA 308A

For my SBA of the 308A module, I utilized the dog api to create an interactive user interface that allows users to generate a photo grid of a specific dog breed, or even use a fetch button to generate a random assortment of doggy pics!

## Table of Contents
- [Authors](#authors)
- [Screenshots](#screenshots)
- [API Reference](#api-reference)
  - [Get random dog images](#get-random-dog-images)
  - [Get images of a specific breed](#get-images-of-a-specific-breed)
  - [Get all breeds](#get-all-breeds)
- [Color Reference](#color-reference)


## Authors

- [@Twincasper](https://www.github.com/Twincasper) aka Justin Watson


## Screenshots

![Home page screenshot](./screenshots/home.png)
![Dropdown](./screenshots/dropdown.png)


## API Reference

#### Get random dog images

```http
  GET ${BASE_URL}/images/search?limit=10&order=RAND
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `limit`   | `1-100`  | Number of images to return |
| `order`   | `ASC/DESC/RAND`  | The Order to return the images in by their upload date. RAND = random |

#### Get images of a specific breed

```http
  GET ${BASE_URL}/images/search?limit=6&breed_ids=${selectedBreedId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `breed_ids`      | `integer` | **Required**. Id of item to fetch |
| `limit`      | `1-100` | Number of images to return |

#### Get all breeds

```http
  GET ${BASE_URL}/breeds
```


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| --color-body      | ![#283618](https://via.placeholder.com/10/283618?text=+) #283618   |
| --color-secondary | ![#bc6c25](https://via.placeholder.com/10/bc6c25?text=+) #bc6c25   |
| --color-accent    | ![#fefae0](https://via.placeholder.com/10/fefae0?text=+) #fefae0   |

