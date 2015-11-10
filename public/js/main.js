'use strict'

function init() {
  $('.render').click(renderMarkup)
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

  console.log('opts: ', options)
  $.ajax(options)
  .done(function(data){
    console.log('mkrdwn response: ', data);
    var $convertedHtml = $.parseHTML(data);
    console.log('convertedhtml', $convertedHtml)
    $('#rendered').empty().append($convertedHtml);

  })
  .fail(function(err){
    if (err) console.log('error posting mrkdwn: ', err);
  })
}





$(document).ready(init)



