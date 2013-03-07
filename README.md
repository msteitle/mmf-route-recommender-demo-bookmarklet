# MapMyFitness Route Recommender Demo Bookmarklet
======================================

Bookmarklet to run a simple demo of the MapMyFitness Route Recommender.

## Usage

Add the following as a bookmark and click on it whenever viewing the integration dashboard.

    javascript:(function(){var d=document,s=d.createElement('script');s.src='https://raw.github.com/msteitle/mmf-route-recommender-demo-bookmarklet/master/bookmarklet.js';d.body.appendChild(s);}())

## Notes

Suggested browser is Chrome.

This bookmarklet assumes jQuery is on the page and is available as `$`.

You must wait for the map to load (you see map) before executing the bookmarklet.
