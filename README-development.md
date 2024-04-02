# Development README.md
## Installation
```
brew install rbenv
rbenv install
bundle install
```

## Running the development server
```
make serve
```

You should now be able to access the site at:
http://127.0.0.1:4000/?secret=hithere

Note: This server does not rebuild automatically. After any code changes, you will have to re-run the `make serve` command for it to rebuild.
