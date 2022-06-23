$(function () {
  // Loading...
  function imagesProgress() {
    var $container = $("#progress"),
      $progressBar = $container.find(".bubble2"),
      $progressText = $container.find(".progress-text"),
      imgLoad = imagesLoaded("body"),
      imgTotal = imgLoad.images.length,
      imgLoaded = 0,
      current = 0,
      progressTimer = setInterval(updateProgress, 1000 / 60);

    imgLoad.on("progress", function () {
      imgLoaded++;
    });

    function updateProgress() {
      var target = (imgLoaded / imgTotal) * 100;

      current += (target - current) * 0.1;
      $progressText.text(Math.floor(current) + "%");

      if (current >= 100) {
        clearInterval(progressTimer);
        //$container.addClass("progress-complete");
        $progressBar
          .add($progressText)
          .delay(500)
          .animate({ opacity: 0 }, 250, function () {
            $container
              .animate({ width: "0%" }, 2000, "easeInOutQuint")
              .addClass("active");
          });
        $("body").addClass("active");
      }
      if (current > 99.98) {
        current = 100;
      }
    }
  }

  imagesProgress();
});
