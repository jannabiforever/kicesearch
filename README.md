# Warning ⚠️

This project's core utility is currently not implemented.

# Setup

To run this application in your local environment,
you must setup meilisearch and node environment first.

1. Go install [MeiliSearch](https://www.meilisearch.com/) and [NodeJS](https://nodejs.org) in your environment,
or you could just use meilisearch cloud with data in this repo.
<br/>

2. Clone this repository with command below.
```bash
git clone https://github.com/jannabiforever/kicesearch.git
cd kicesearch
```
<br/>

3. Setup your .env file in the root of this project folder.
This has MEILISEARCH_URL and MEILISEARCH_API_KEY as key.
MEILISEARCH_API_KEY ([it is, master key for entering meilisearch server](https://www.meilisearch.com/docs/learn/self_hosted/getting_started_with_self_hosted_meilisearch?utm_campaign=oss&utm_source=docs&utm_medium=home-page)) should be any alphanumeric string with 16 or more bytes.
```
# example of .env
MEILISEARCH_URL="http://localhost:7700/"
MEILISEARCH_API_KEY = "aSampleMasterKey"
```
<br/>

4. Before running, you should assign json files into meilisearch server once.
Check json files in this repo.
<br/>

5. Now you can `npm run dev`!