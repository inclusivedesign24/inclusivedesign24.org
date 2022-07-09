# inclusivedesign24.org

Repository for https://inclusivedesign24.org. Any commits to this repo are deployed directly via netlify.com. `main` branch is the live site.

## Local development setup

Run `npm install` to set up all node dependencies locally. If this has been done previously, it's a good idea to run an `npm update` to make sure everything is still as it should.

## npm scripts

* `npm run build` deletes the `/dist` folder (if present), runs Eleventy, and builds the static site in a fresh `/dist` folder
* `npm run serve` same as the build script, but then also runs a local server on [localhost:8080](http://localhost:8080)

## Netlify deployment

The main branch is deployed to [`https://main--vigilant-morse-657bbe.netlify.app`](https://main--vigilant-morse-657bbe.netlify.app). Other branches can be previewed by prefixing the domain with the name of the branch (i.e. `https://branchname--vigilant-morse-657bbe.netlify.app`).
