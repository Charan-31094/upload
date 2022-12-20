//
//Excel
//
window.onload
$(function(){
    
    $('#load01').click(function(){ 
        $('#iframeHolder').html('<iframe width=100% height="600" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=AB0B9DD9ED8CB8E3%21256&authkey=%21AC-ZHb6_LQBKhr4&em=2&AllowTyping=True&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&edrtees6=false&resen=false"></iframe>');
    });   
});
        
        
$(function(){
    $('#load02').click(function(){ 
        $('#iframeHolder').html('<iframe width=100% height="500" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=AB0B9DD9ED8CB8E3%21184&authkey=%21APumpJ3E8GTLJcA&em=2&AllowTyping=True&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&edrtees6=false&resen=false"></iframe>');
        });   
});
$(function(){
    $('#load03').click(function(){ 
        $('#iframeHolder').html('<iframe width="600" height="484" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=AB0B9DD9ED8CB8E3%21189&authkey=%21AB6Ajk8OuBO-6qo&em=2&wdAllowInteractivity=False&Item="CSE%2C%20CSIT"!A1%3AG21&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=false&edrtees6=false&resen=false"></iframe>');
    });   
});
        
        
$(function(){
    $('#load04').click(function(){ 
        $('#iframeHolder').html('<iframe width=100% height="800" frameborder="0" scrolling="no" src="https://onedrive.live.com/embed?resid=AB0B9DD9ED8CB8E3%21283&authkey=%21ABjqhBnUmluE-OY&em=2&AllowTyping=True&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True&edesNext=true&edrtees6=false&resen=false"></iframe>');
        });   
});
//
//OneNotes
//
$(function(){
    $('#load11').click(function(){ 
        $('#iframeHolder').html('<iframe width=100% height="600" frameborder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQkBBl3cQbCH8DotqlKCDRrrle5L3qpQYhYtpnx4_iBYnHXh0BB8542UeV7wk1YChNKThAZ6MSxXrVH/pubhtml?widget=true&amp;headers=false"></iframe>');
        });   
});
        
        
$(function(){
    $('#load12').click(function(){ 
        $('#iframeHolder').html('');
        });   
});
$(function(){
    $('#load13').click(function(){ 
        $('#iframeHolder').html('');
        });   
});
        
        
$(function(){
    $('#load14').click(function(){ 
        $('#iframeHolder').html('');
        });   
});
var words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});