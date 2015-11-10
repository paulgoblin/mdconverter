'use strict'

function init() {
  // $('.render').click(renderMarkup)
  $('textarea').on('keydown',debounce);

}

function debounce () {
  $('textarea').off('keydown',debounce);
  window.setTimeout(function(){
    $('textarea').on('keydown',debounce);
    renderMarkup();
  },1000)
}

function renderMarkup(){

  var markdown = $('.markdown').val();

  var options = {
    method: 'POST',
    url: '/render',
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify( {markdown: markdown} )
  };

  $.ajax(options)
  .done(function(data){
    var $convertedHtml = $.parseHTML(data);
    $('#rendered').empty().append($convertedHtml);

  })
  .fail(function(err){
    if (err) console.log('error posting mrkdwn: ', err);
  })
}


$(document).ready(init)



