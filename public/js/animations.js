 $(function(){

            $(window).on("scroll", function(){

                var xpos = $(window).scrollTop();
                console.log(xpos);


                if(xpos > 200) {
                    $("#content-1").removeClass("slide-in-right-1").addClass("slide-in-right-2");
                    $("#big-picture").addClass("tint");
                    $("nav").removeClass("nav-color-1").addClass("nav-color-2");
                    //$("#words").removeClass("container-fluid").addClass("container");
                    $("#title").css("transform", "translateX(13em)");
                    $("#list").css("transform", "translateX(-13em)");

                } else {
                    $("#content-1").removeClass("slide-in-right-2").addClass("slide-in-right-1");
                    $("#big-picture").removeClass("tint");
                    $("nav").removeClass("nav-color-2").addClass("nav-color-1");
                  //  $("#words").removeClass("container").addClass("container-fluid");
                     $("#title").css("transform", "translateX(0em)");
                     $("#list").css("transform", "translateX(0em)");



                }


                 if(xpos > 630) {

                    $("#content-2").removeClass("slide-in-left-1").addClass("slide-in-left-2");
                } else {
                    $("#content-2").removeClass("slide-in-left-2").addClass("slide-in-left-1");
                }

                if(xpos > 1090) {

                    $("#content-3").removeClass("slide-in-right-1").addClass("slide-in-right-2");
                } else {
                    $("#content-3").removeClass("slide-in-right-2").addClass("slide-in-right-1");
                }


            });

        });
