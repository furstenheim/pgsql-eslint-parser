# WORK IN PROGRESS

## What is this?
An eslint parser for postgres sql. Mostly a wrapper around https://github.com/pganalyze/libpg_query

## What is this for?
Eslint is a generic linting platform that supports custom parsers. The end goal of the project is to be able to lint queries in JS and Typescript. Create custom rules for migration scripts, but also lint queries in your integration tests. One could for example, force that all queries use parameters