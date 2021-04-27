var personalForm = document.getElementById('personalForm');
        var businessForm = document.getElementById('businessForm');

        function personal(){
            personalForm.style.transform = "translateX(340px)";
            businessForm.style.transform = "translateX(300px)";
        }

        function business(){
            personalForm.style.transform = "translateX(0px)";
            businessForm.style.transform = "translateX(0px)";
        }