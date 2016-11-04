/**
 * Created by Yolanda on 21/10/2016.
 */
$(document).ready(function() {
    $.ajax({type: "GET",
        crossDomain : true,
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?mashape-key=a8nmq5fxdZmshI0CbuvDc9uATgsVp1L8X6sjsnt4sygwvCpfNi",
        data: {method: "getQuote",format: "jsonp",lang: "en"},
        dataType: "jsonp",
        jsonp: "jsonp",
        jsonpCallback: "myJsonMethod",
    });
    $(".btn").click(function() {
        $.ajax({type: "GET",
            crossDomain : true,
            url: "https://andruxnet-random-famous-quotes.p.mashape.com/?mashape-key=a8nmq5fxdZmshI0CbuvDc9uATgsVp1L8X6sjsnt4sygwvCpfNi",
            data: {method: "getQuote",format: "jsonp",lang: "en"},
            dataType: "jsonp",
            jsonp: "jsonp",
            jsonpCallback: "myJsonMethod",
        });

    });

    // on hover to the quote-box a line will appear
    $(".quote-box").mouseover(function() {
        var styles = {
            width: "600px",
            height: "4px",
            background: "black",
            transition: "width 5s",
            margin: "15px"
        };
        $(".line").css(styles);
    });

    // on mouse out do the reverse
    $(".quote-box").mouseout(function() {
        var styles = {
            width: "0px",
            height: "4px",
            background: "black",
            transition: "width 5s",
            margin: "15px"
        };
        $(".line").css(styles);
    });

});

function myJsonMethod(response){
    var data = "<p class='quote-style open-quote'>" + response.quoteText + "</p>";
    var author = "<p class='author-style'>- " + response.quoteAuthor + "</p>";
    $(".quote-text").html(data);
    if(response.quoteAuthor !== '') {
        $(".quote-author").html(author);
    }
    var twit = "<a class='twitter-share-button btn btn-default' href='https://twitter.com/intent/tweet?text="+ response.quoteText + response.quoteAuthor+"' target='_blank'>" +
        "<i class='fa fa-twitter fa-lg'></i></a>";
    $(".twitter").html(twit);
}

