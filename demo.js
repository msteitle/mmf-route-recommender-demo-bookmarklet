(function () {
window.gen_complete = true;

// PubSub already in require directory - just request ref
window.require(['pubsub'], function (p) {
    p.subscribe('end.processing', function () {
        console.log('Finished');
        window.gen_complete = true;
    });
});

var locations = [
    'Austin, TX',
    'Eiffel Tower, Paris, France',
    'Denver, CO',
    'Vancouver, BC',
    'San Francisco, CA',
    'Rome',
    'Seattle, WA',
    'Osaka-jo, Osaka, Japan',
    'Reflecting Pool, Washington DC',
    'Amsterdam',
    'Portland, OR',
    'Shanghai, China',
    'Orland Park, Chicago, IL',
    'Melbourne, Australia',
    'Cairo, Egypt'
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
interval = 11,
interval_id,
countdown = 1,
$time = $('<span>')
    .text('0')
    .css('font-size', '120%'),
demo = function () {
    if (!window.gen_complete) {
        return;
    }
    $time.text(--countdown);
    if (countdown > 0) {
        return;
    }
    $search.val(locations[s_i]).trigger('change');
    $distance.val(distances[Math.floor(Math.random() * d_len)]);
    window.gen_complete = false;
    $generate.click();
    console.log('Started', locations[s_i]);

    // set up next iteration
    s_i = s_i < s_len - 1 ? s_i + 1 : 0;
    countdown = interval;
},
undemo = function () {
    window.clearInterval(interval_id);
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
$('label[for=route_length]').text('Length (approx.):');
interval_id = window.setInterval(demo, 1000);
window.undemo = undemo;
}());