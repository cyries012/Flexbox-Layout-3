$(document).ready(function() {
    
    $('nav .menu ul li a').click(function() {
        var page = $(this).attr('href');
        $('.ajax').load('content/' + page + '.html');
        return false;
    })
    
    $(function() {
        $('.toggleNav').on('click',function() {
        $('nav .menu ul').toggleClass('open');
          });
        });
});