# placeapp-server


## Auth Routes

Base URL `/api/auth`

| HTTP Method 	| URI path      	   | Description              |
|-------------	|---------------	   |--------------------------|
| POST         	| `/login`             | Login user               |
| POST         	| `/signup`            | Singup  user             |
| GET         	| `/verify`            | Verify auth token        |


## Places Routes

Base URL `/api/places`

| HTTP Method 	| URI path      	  | Description               |
|-------------	|---------------	  |---------------------------|
| GET         	| `/getAllPlaces`     | All places list           |
| POST         	| `/createPlace`      | Create a new place        |
| GET         	| `/:id`              | Matching id place details |
| PUT         	| `/:id/edit`         | Matching id place edition |
| POST      	| `/:id/favourites`   | Add your favourites       |
| DELETE        | `/:id/delete`       | Create a new place        |


## User Routes

Base URL `/api/users`

| HTTP Method 	| URI path      	  | Description               |
|-------------	|---------------	  |---------------------------|
| GET         	| `/getAllUsers`      | Get all users             |
| GET         	| `/:id`              | Get user                  |
| PUT          	| `/:id/edit`         | Upadate user              |
| DELETE        | `/:id/delete`       | Delete user               |


## Comments routes

Base URL `/api/comments`

| METHOD        | URI Path            | Description               |
|---------------|---------------------|---------------------------|
| GET           | `/:id `             | Get all comments          |
| POST          | `/create `          | Create new comment        |
| PUT           | `/:id/edit`         | Edit comment              |
| DELETE        | `/:id/delete `      | Delete comment            |


## Groups routes

Base URL `/api/groups`

| METHOD        | URI Path            | Description               |
|---------------|---------------------|---------------------------|
| GET           | `/`                 | Get all groups            |
| GET           | `/:id `             | Get one group             |
| POST          | `/create`           | Create group              |
| PUT           | `/:id/join `        | Join group                |
| POST          | `/:id/unjoin `      | Unjoin group              |
| DELETE        | `/:id/delete `      | Delete group              |

## Cloudinary routes

Base URL `/api/upload`

| METHOD        | URI Path            | Description               |
|---------------|---------------------|---------------------------|
| POST          | `/image `           | Upload new image          |

