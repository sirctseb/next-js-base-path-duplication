# Reproduction
1. Make a Next.js app
1. Set a `basePath` of anything in next.config.js
1. Delete the pages/index.js file so there is no root page
1. Add a page at /pages/something.js
1. Add a rewrite from '/' to '/something'
1. Start the app `yarn dev`
1. Go to the base path: http://localhost:3000/anything/

# Expected behavior
The url redirects to https://localhost:3000/anything (no slash) according to the default `trailingSlash` setting and shows the content of the something.js page

# Observed behavior
The url redirects to https://localhost:3000/anything and displays a 404

If you set `trailingSlash: true` in next.config.js, the rewrite works
