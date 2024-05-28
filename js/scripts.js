$(document).ready(function() {
    // Smooth scrolling for navigation
    $('.nav-link').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Easter egg: Surprise element
    $('.navbar-brand').on('click', function() {
        const surprise = $('<img>').attr('src', 'images/surprise.gif').addClass('img-fluid surprise-element');
        $('body').append(surprise);
        setTimeout(function() {
            surprise.remove();
        }, 3000);
    });
});
