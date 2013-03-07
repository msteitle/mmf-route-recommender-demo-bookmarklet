# MapMyFitness Route Recommender Demo Bookmarklet
======================================

Bookmarklet to run a simple demo of the MapMyFitness Route Recommender.

## Usage

1. Add the following as a bookmark in your browser.

    javascript:(function(){var d=document,s=d.createElement('script');s.src='https://raw.github.com/msteitle/mmf-route-recommender-demo-bookmarklet/master/bookmarklet.js';d.body.appendChild(s);}())

2. Go to www.mapmyfitness.com and log in with an MVP account.

3. Navigate to the Route Recommender page (www.mapmyfitness.com/maps/auto_route)

4. Click on bookmark.

5. Enjoy.

## Notes

Suggested browser is Chrome.

This bookmarklet assumes jQuery is on the page and is available as `$`.

You must wait for the map to load (you see map) before executing the bookmarklet.
