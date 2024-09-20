.DEFAULT_GOAL := help
SHELL := /bin/bash

.PHONY: help back front
help: # See: https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

back: ## Run the backend
	cd back && npm i && npm run dev

front: ## Run the frontend
	cd front && npm i && npm run dev
