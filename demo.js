(function () {
window.gen_complete = true;
var process_count = 0; // start with 1 because initial load publishes an additional end.processing topic

// PubSub already in require directory - just request ref
window.require(['pubsub'], function (p) {
    p.subscribe('end.processing', function () {
        console.log('Finished');
        process_count--;

        if (process_count === 0) {
            window.gen_complete = true;
        }
    });
});

window.require(['pubsub'], function (p) {
    p.subscribe('start.processing', function () {
        console.log('Starting');
        process_count++;
        window.gen_complete = false;
    });
});

var locations = [
    'Austin, TX',
    'Eiffel Tower, Paris, France',
    'Denver, CO',
    'Vancouver, BC',
    'San Francisco, CA',
    'Rome',
    'Seattle, WA', // Seattle is trouble
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
$time = $('<span id="demo_countdown">')
    .text('0')
    .css('font-size', '120%'),
$message = $('<p id="demo_message">')
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
    ),
$pause = $('<a id="demo_pause" data-active="Pause" data-inactive="Unpause" class="button">Pause</a>')
    .on('click', function () {
        if (interval_id) {
            undemo();
            $pause.text($pause.data('inactive'));
        }
        else {
            demo();
            $pause.text($pause.data('active'));
        }
    }),
all_the_things = function () {
    if (!window.gen_complete) {
        return;
    }
    $time.text(--countdown);
    if (countdown > 0) {
        return;
    }
    $search.val(locations[s_i]).trigger('change');
    $distance.val(distances[Math.floor(Math.random() * d_len)]);
    $generate.click();
    //console.log('Started', locations[s_i]);

    // set up next iteration
    s_i = s_i < s_len - 1 ? s_i + 1 : 0;
    countdown = interval;
},
undemo = function () {
    window.clearInterval(interval_id);
    interval_id = null;
},
demo = function () {
    interval_id = window.setInterval(all_the_things, 1000);
};
$('label[for=route_length]').text('Length (approx.):');
$('#map_container').find('div').filter('[title="MapQuest OSM layer"]').click();
$('#left').find('.inner').append($message);
window.undemo = undemo;

demo();
$message.append('<br/><br/>', $pause);
}());