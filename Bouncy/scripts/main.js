/**
 * Created by Alexander on 15.04.2017.
 */
;(function ($) {
    $(function () {
        $( document ).ready(function() {
            $('.grid').isotope({
                itemSelector : '.grid-item',
                layoutMode: 'masonry',
                masonry: {
                    columnWidth: 270,
                    gutter: 10
                }
            });
        });
        $( document ).ready(function() {
            var $container = $('.grid');
            // filter buttons
            $('#filters button').click(function(){
                var $this = $(this);
                // don't proceed if already selected
                if ( !$this.hasClass('is-checked') ) {
                    $this.parents('#options').find('.is-checked').removeClass('is-checked');
                    $this.addClass('is-checked');
                }
                var selector = $this.attr('data-filter');
                $container.isotope({  itemSelector: '.grid-item', filter: selector });
                return false;
            });
        });
        $('a').click(function(){
            $('html, body').animate({
                scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
            }, 1000);
            return false;
        });
    });
    $(function () {
        $('.slider').slick({
            dots: true,
            arrows: false
        });
    });
    $(function () {
        $('.slider2').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
        });
    });
    window.onload = function () {
        var map;
        var point =  {lat: 48.752219, lng: 37.593790};
        var point2 =  {lat: 53.752219, lng: 25.593790},
            iv1content = document.querySelector('.info-window-1');
        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 17,
                disableDefaultUI: true
            });
            var marker = new google.maps.Marker({
                position: point,
                map: map,
                title: 'hello',
                icon: 'images/key.png'
            });
            var infowindow = new google.maps.InfoWindow({
                content: iv1content
            });
            marker.addListener('click', function(){
                infowindow.open(map, marker);
            });
        }
        initMap()
    }
})(jQuery);