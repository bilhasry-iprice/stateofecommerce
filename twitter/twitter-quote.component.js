a.component('twitterQuote', {

    templateUrl: 'twitter/twitter-quote.template.html',
    controller: function twitterController( $scope, $element) {

      var twitter   = $element[0];
      var text      = $(twitter).attr('data-text');
      var via       = $(twitter).attr('data-via');
      var enc_url   = $(twitter).attr('data-url'); //encrypted url
      var hashtags  = $(twitter).attr('data-hashtags');
      var color     = $(twitter).attr('data-color');
      var font_size = $(twitter).attr('data-size');

      var url = 'https://twitter.com/intent/tweet?';
      url += 'text=' + encodeURIComponent(text); //text
      url += '&via=' + via; //via 
      url += '&url=' + encodeURIComponent(enc_url);//url
      url += '&hashtags=' + hashtags//hashtags

      $scope.url = url;
      $scope.text = text;
      $scope.size = font_size;
      $scope.color = color;
    }
  });
