function build_picture(object,pars) {
  var path_to_images = '/static/'
  var canvas = document.createElement("img");
  canvas.setAttribute('src', path_to_images + 'mockup.png')

  var texts = JSON.parse(JSON.stringify(sentences.sort(func)));

  var keys = Object.keys(parameters)

  for (var j = 0; j < keys.length; j++){
      for (var i = 0; i < texts.length; i++){
        texts[i] = texts[i].replace(keys[j], parameters[keys[j]][pars[keys[j]]])
      }
  }

  var text_size = (.25 * window.innerWidth / 438) * 14 * .8;

  object.style.width = 438 + 'px'

  var first_text = document.createElement('div');
  first_text.setAttribute('class', 'first_text');
  first_text.innerHTML = texts[0];
  first_text.style.width = '80%';
  first_text.style.fontSize = text_size + 'px';

  var first_mask_container = document.createElement('div');
  first_mask_container.setAttribute('class', 'first_mask');
  first_mask_container.style.top = 130 + text_size * ((texts[0].length / 40) + 0.5) + 'px';

  var first_mask  = document.createElement("img");
  first_mask.setAttribute('src', path_to_images + 'small_mask.png');
  first_mask_container.appendChild(first_mask);

  var snd_text = document.createElement('div');
  snd_text.setAttribute('class', 'snd_text');
  snd_text.innerHTML = texts[1];
  snd_text.style.width = '80%';
  snd_text.style.fontSize = text_size + 'px';
  snd_text.style.top = 130 + text_size * ((texts[0].length / 40) + 0.5) +  68 + 'px';

  var snd_mask_container = document.createElement('div');
  snd_mask_container.setAttribute('class', 'snd_mask');
  snd_mask_container.style.top = 130 + text_size * ((texts[0].length / 40) + 0.5) + 75 + text_size * ((texts[1].length / 40) + 0.5) +'px';

  var snd_mask  = document.createElement("img");
  snd_mask.setAttribute('src', path_to_images + 'mask.png');
  snd_mask_container.appendChild(snd_mask);

  object.appendChild(canvas);
  object.appendChild(first_mask_container);
  object.appendChild(snd_mask_container);
  object.appendChild(first_text);
  object.appendChild(snd_text);

  object.setAttribute("data", JSON.stringify(pars));

  for(var i = 0; i < object.childNodes.length; i++){
    for(var j = 0; j < object.childNodes[i].childNodes.length; j++){
      try{
        var to_name = object.childNodes[i].childNodes[j];
        to_name.setAttribute('id', to_name.getAttribute('class') + '_' + object.id);
      } catch(err) {}
    }
    var to_name = object.childNodes[i];
    to_name.setAttribute('id', to_name.getAttribute('class') + '_' + object.id);
  }



}

function set_imgs() {
  for (var i = 0; i < 3; i++) {
    var to_fill = document.getElementById('drag' + i)
    build_picture(to_fill,list_o_pars[i])
  }
  target = document.getElementsByClassName('dropzone');
  for (var i = 0; i < target.length; i++) {
    target[i].style.height = 1.05 * (.25 * window.innerWidth / 439) * 370 + 'px';
  }
  var target_zone = document.getElementById('target_zone');
  target_zone.style.width = .9 * window.innerWidth + 'px';
  var start_zone = document.getElementById('start_zone');
  start_zone.style.width = .9 * window.innerWidth + 'px';
}


list_o_pars = [{"QUALITY": 1,
"DESIGN": 1,
"FORMAT": 1,
"IMPORTANCE": 1,
"SAMPLESIZE": 1,
"STATISTICS": 1},
{"QUALITY": 0,
"DESIGN": 0,
"FORMAT": 0,
"IMPORTANCE": 0,
"SAMPLESIZE": 0,
"STATISTICS": 0},
{"QUALITY": 0,
"DESIGN": 1,
"FORMAT": 0,
"IMPORTANCE": 1,
"SAMPLESIZE": 0,
"STATISTICS": 1}]
window.onload = set_imgs;
