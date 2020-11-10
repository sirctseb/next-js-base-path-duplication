# Reproduction
1. Make a Next.js app
1. Set a `basePath` of anything in next.config.js
1. Start the app `yarn dev`
1. Go to the base path with a search param: http://localhost:3000/anything?x=1

# Expected behavior
The url stays http://localhost:3000/anything?x=1

# Observed behavior
The url changes to http://localhost:3000/anything/anything?x=1

![Gif](/next-dup.gif)
