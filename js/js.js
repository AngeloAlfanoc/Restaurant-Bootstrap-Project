$('.item').click(function() {
    $(this).toggleClass('active');
  });
  
  $(document).ready(function () {
    $('#loc1').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $(".img-responsive").attr("src", image);
    });
});