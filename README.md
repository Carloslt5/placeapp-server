# placeapp-server


## Auth Routes

Base URL `/api/auth`

| HTTP Method 	| URI path      	   | Description              |
|-------------	|---------------	   |--------------------------|
| POST         	| `/login`             | Login user               |
| POST         	| `/singup`            | Singup  user             |
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
| POST          | `/create `          | Create new comment        |
| PUT           | `/:id/edit`         | Edit comment              |
| DELETE        | `/:id/delete `      | Delete comment            |
