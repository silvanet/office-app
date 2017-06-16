
$(document).ready(function() {

  const BASE_URL = '/office';
  let Model = null;

  function request() {
    $.get(BASE_URL, response);
  }

  function response(data){
    Model = data;
    startDirectory(Model);
  }

  const $dir = $('.directory'), $body = $('body'), $floor = $('.header');
  let counter = 0, subCounter = 10, html = '';

  function startDirectory(data) {
    if(counter === data.length) { counter = 0; }
    renderCheck(data);
    t = setTimeout(function(){ startDirectory(Model) }, 5000);
  }

  function renderCheck(arr) {
  // member variables
    $dir.empty();
    const { list } = arr[counter];

    if(list.length <= 10) {
      list.forEach( item => {
        html += render(item);
      });
      display(arr[counter]);
      counter++;
    } else if (list.length > subCounter) {
      for(let i = 0; i < subCounter; i++) {
        html += render(list[i]);
      }
      display(arr[counter]);
      subCounter += 10;
    } else {
      for(let j = (subCounter - 10); j < list.length; j++) {
        html += render(list[j]);
      }
      display(arr[counter]);
      subCounter = 10;
      counter++;
    }
  }

  function render(business) {
    return (
      `<div class="row">
          <div class="one-half column">
            <p style="text-align:center;">${business.name}</p>
          </div>
          <div class="one-half column">
            <p style="text-align:center;">${business.location}</p>
          </div>
        </div>`
    );
  }

  function display(business) {
    $body.css("background", "url(" + business.img  + ") no-repeat center");
    $floor.text(business.floor);
    $dir.html(html);
    html = ``;
  }

  request();
});
