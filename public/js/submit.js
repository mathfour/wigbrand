$("#submit").on("click", function(){

            if (
               parseInt($("#q1 option:selected").val()) === NaN ||
                $("#q2 option:selected").text() === "" ||
                $("#q3 option:selected").val() === "" ||
                $("input[name=q4]:checked").val() === undefined ||
                $("#q5 option:selected").val() === "" ||
                !$("input[name=q6]:checked").val() ||
                !$("input[name=q7]:checked").val() ||
                !$("input[name=q8]:checked").val() ||
                !$("input[name=q9]:checked").val() ||
                !$("input[name=q10]:checked").val() ||
                !$("input[name=q11]:checked").val() ||
                !$("input[name=q12]:checked").val() ||
                !$("input[name=q13]:checked").val() ||
                !$("input[name=q14]:checked").val() ||
                !$("input[name=q15]:checked").val() ||
                !$("input[name=q16]:checked").val() ||
                !$("input[name=q17]:checked").val() ||
                !$("input[name=q18]:checked").val() ||
                !$("input[name=q19]:checked").val() ||
                !$("input[name=q20]:checked").val() ||
                !$("input[name=q21]:checked").val() ||
                !$("input[name=q22]:checked").val() ||
                !$("input[name=q23]:checked").val() ||
                !$("input[name=q24]:checked").val() ||
                !$("input[name=q25]:checked").val() ||
                !$("input[name=q26]:checked").val() ||
                !$("input[name=q27]:checked").val() ||
                !$("input[name=q28]:checked").val() ||
                !$("input[name=q29]:checked").val() ||
                !$("input[name=q30]:checked").val()
        ) 
    {
        console.log("this should run!");           
        alert("You have left one or more questions unanswered.");        
    } 
    else {

        var currentLocation = window.location.href;

        var results = [
                    parseInt($("#q1 option:selected").val()),
                    $("#q2 option:selected").text(),
                    $("#q3 option:selected").val(),
                    $("input[name=q4]:checked").val(),
                    $("#q5 option:selected").val(),
                    parseInt($("input[name=q6]:checked").val()),
                    parseInt($("input[name=q7]:checked").val()),
                    parseInt($("input[name=q8]:checked").val()),
                    parseInt($("input[name=q9]:checked").val()),
                    parseInt($("input[name=q10]:checked").val()),
                    parseInt($("input[name=q11]:checked").val()),
                    parseInt($("input[name=q12]:checked").val()),
                    parseInt($("input[name=q13]:checked").val()),
                    parseInt($("input[name=q14]:checked").val()),
                    parseInt($("input[name=q15]:checked").val()),
                    parseInt($("input[name=q16]:checked").val()),
                    parseInt($("input[name=q17]:checked").val()),
                    parseInt($("input[name=q18]:checked").val()),
                    parseInt($("input[name=q19]:checked").val()),
                    parseInt($("input[name=q20]:checked").val()),
                    parseInt($("input[name=q21]:checked").val()),
                    parseInt($("input[name=q22]:checked").val()),
                    parseInt($("input[name=q23]:checked").val()),
                    parseInt($("input[name=q24]:checked").val()),
                    parseInt($("input[name=q25]:checked").val()),
                    parseInt($("input[name=q26]:checked").val()),
                    parseInt($("input[name=q27]:checked").val()),
                    parseInt($("input[name=q28]:checked").val()),
                    parseInt($("input[name=q29]:checked").val()),
                    parseInt($("input[name=q30]:checked").val()),
                ];

                $.post("/survey/new", results)
                    .done(function(data) {
                        console.log(data);
                    });
                }
                
            console.log(results);

            return false;
        });