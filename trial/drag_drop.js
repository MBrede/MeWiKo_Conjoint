
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var start_zone = document.getElementById("start_zone");
  var target = ev.target;
  while(target.getAttribute('class') != 'dropzone'){
    var target = target.parentNode;
  }
  if (target.children.length > 1) {
    for (var i = 0; i < target.childNodes.length; i++) {
      var to_move = target.childNodes[i];
      try {
        if (to_move.getAttribute('class') == 'canvas') {
          start_zone.appendChild(to_move);
        }
      } catch(err) {}
    }
  }
  var to_drop = document.getElementById(data)
  while(to_drop.getAttribute('class') != 'canvas'){
    var to_drop = to_drop.parentNode;
  }
  target.setAttribute('data', to_drop.getAttribute("data"));
  target.appendChild(to_drop);
}
