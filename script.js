/* Hello World */

/*alert('Hello world');
 */

function hello(i) {
    alert('Hello world');
}

function showDescriptionPodcast(id)
{
    if (document.getElementById(id).classList == 'podcastDescription_hide') {
        document.getElementById(id).classList.add('podcastDescription_show');
        document.getElementById(id).classList.remove('podcastDescription_hide');
    }
    else {
        document.getElementById(id).classList.add('podcastDescription_hide');
        document.getElementById(id).classList.remove('podcastDescription_show');
    }
    
}
