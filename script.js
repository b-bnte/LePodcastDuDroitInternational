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

function showSeason(button_id, id) {

    // Button
    if (button_id == "btn_tht") {
      document.getElementById(button_id).classList.add('raise_pressed_red')
      document.getElementById(button_id).classList.remove('raise_red')
    }
    else {
      document.getElementById(button_id).classList.add('raise_pressed')
      document.getElementById(button_id).classList.remove('raise')
    }

    if (button_id == "btn_season1") {
        document.getElementById("btn_season1").classList.add('raise_pressed')
        document.getElementById("btn_season1").classList.remove('raise')

        document.getElementById("btn_season2").classList.add('raise')
        document.getElementById("btn_season2").classList.remove('raise_pressed')  
        document.getElementById("btn_tht").classList.add('raise_red')
        document.getElementById("btn_tht").classList.remove('raise_pressed_red')
    }
    else if (button_id == "btn_tht") {
        document.getElementById("btn_tht").classList.add('raise_pressed_red')
        document.getElementById("btn_tht").classList.remove('raise_red')

        document.getElementById("btn_season2").classList.add('raise')
        document.getElementById("btn_season2").classList.remove('raise_pressed')
        document.getElementById("btn_season1").classList.add('raise')
        document.getElementById("btn_season1").classList.remove('raise_pressed')
    }
    else {
      document.getElementById("btn_season2").classList.add('raise_pressed')
      document.getElementById("btn_season2").classList.remove('raise')

      document.getElementById("btn_season1").classList.add('raise')
      document.getElementById("btn_season1").classList.remove('raise_pressed')
      document.getElementById("btn_tht").classList.add('raise_red')
      document.getElementById("btn_tht").classList.remove('raise_pressed_red')
  }

    // Episodes
    var x = document.getElementById(id)

    document.getElementById("season1").style.display = "none"
    document.getElementById("season2").style.display = "none"
    document.getElementById("tht").style.display = "none"

    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none"
    }
}