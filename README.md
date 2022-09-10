# wine list creation tool


## Project structure

Its a mono-repo with many seperate services that work together.

`api` - backend service written in python which holds the application datamodel and provides REST API for web and mobile apps.
`web` - single page web UI that consumes `api` for end users to create mailing lists.


```
- api
    - app
    - scrapers
        - __init__.py
        - lcbo_popular_products.py
        - lcbo_stores.py
    - main.py
    - requirements.txt
    - Dockerfile

- web
    - components
    - pages
    - package.json
    - Dockerfile
- docker-compose.yaml
- README
```