# Development README.md

## Information
[WIP] README file will be added to this repository following the DSAC OSPO Outbound Review Checklist. It will communicate important information about your project. A README, along with a repository license, citation file, contribution guidelines, and a code of conduct, will communicate expectations for this project and helps us manage contributions.

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
