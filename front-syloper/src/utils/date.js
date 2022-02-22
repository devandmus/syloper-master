export function dateFormatter(date) {

    var date = new Date(date)
    var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    return date.toLocaleDateString("en-US", options)
}