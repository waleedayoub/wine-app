# wine list creation tool

## Development Setup

using docker-compose, run the following command:
```bash
$ docker-compose build && docker-compose up
```
Web UI is accessible at http://localhost:8000

## Project structure

Its a mono-repo with many seperate services that work together.

`app` - single page web UI that consumes `api` for end users to create mailing lists. Also contains the datamodel and backend API.
`scrapers` - python modules that scrape content from different websites


```

- scrapers
    - __init__.py
    - lcbo_popular_products.py
    - lcbo_stores.py
- app
    - components
    - pages
    - package.json
    - Dockerfile
- docker-compose.yaml
- README
```
