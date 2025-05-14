$(document).ready(function() {
    var currentIndex = 0;
    var itemsToShow = 4; // Number of images to show at once
    var totalImages = $('.skill-img li').length;

    // Function to show the images
    function showImages() {
        $('.skill-img li').hide(); 
        $('.skill-img li').slice(currentIndex, currentIndex + itemsToShow).show();
        $('#currentIndexTracker').text(`Current Index is: ${currentIndex}`);
    }

    // Initial display
    showImages();

    // Next button click
    $('#nextBtn').on('click', function() {
        currentIndex += itemsToShow;
        if (currentIndex >= totalImages) {
            currentIndex = 0; // Loop back to the start
        }
        showImages();
    });

    // Prev button click
    $('#prevBtn').on('click', function() {
        currentIndex -= itemsToShow;
        if (currentIndex < 0) {
            currentIndex = Math.max(totalImages - itemsToShow, 0); // Loop back to the end
        }
        showImages();
    });

    // Autoplay functionality
    var autoplayInterval = setInterval(function() {
        currentIndex += itemsToShow;
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
        showImages();
    }, 3000);

    // Pause autoplay on hover
    $('.carousel').hover(
        function() {
            clearInterval(autoplayInterval);
        },
        function() {
            autoplayInterval = setInterval(function() {
                currentIndex += itemsToShow;
                if (currentIndex >= totalImages) {
                    currentIndex = 0;
                }
                showImages();
            }, 3000);
        }
    );
});
