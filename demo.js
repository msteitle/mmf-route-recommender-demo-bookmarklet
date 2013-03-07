var locations = [
    'Denver, CO',
    'Austin, TX',
    'Eiffel Tower, Paris, France',
    'San Francisco, CA',
    'Seattle, WA',
    'London Eye, London, England',
    'Wat Arun, Bangkok, Thailand'
],
distances = [
    5,
    10,
    20
],
$search = $('#location_search_text'),
$distance = $('#route_length'),
$generate = $('#auto_route_button'),
s_len = locations.length,
d_len = distances.length,
s_i = 0,
d_i = 0,
interval = countdown = 20,
$time = $('<span>')
    .text(countdown)
    .css('font-size', '120%'),
demo = function () {
    $time.text(--countdown);
    if (countdown > 0) {
        return;
    }
    $search.val(locations[s_i]).trigger('change');
    $distance.val(distances[Math.floor(Math.random() * d_len)]);
    $generate.click();
    s_i = s_i < s_len ? s_i + 1 : 0;
    countdown = interval;
};
$('#left').find('.inner').append(
    $('<p>')
        .css({
        "text-align": "center",
        "clear": "both",
        "margin-top": "2rem",
        "font-weight": "bold",
        "border": "1px solid #666",
        "padding": "0.5rem",
        "border-width": "1px 0",
        "background-color": "#ddd"
        })
        .append(
            'Generating new route in ',
            $time,
            ' seconds.'
        )
);
var interval_id = window.setInterval(demo, 1000);


javascript:(function(){var d=document,s=d.createElement('script');s.src='https://raw.github.com/JasonSanford/jira-git-list-bookmarklet/master/bookmarklet.js';d.body.appendChild(s);}());