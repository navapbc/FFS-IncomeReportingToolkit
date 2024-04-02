.PHONY: build

build:
	bundle exec github-pages build
serve: build
	ruby -run -e httpd _site -p 4000
