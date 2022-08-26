//get information
            function myfunc(event) {
                event.preventDefault();

                var name = document.getElementById("name").value;
                var birthdate= document.getElementById("birthdate").value;
                var email = document.getElementById("email").value;
                var mobile = document.getElementById("mobile").value;
                var cardname = document.getElementById("cardname").value;
                var cardnumber = document.getElementById("cardnumber").value;
                var cvv = document.getElementById("cvv").value;

//local storage                
                localStorage.setItem('Is_name', name);
                localStorage.setItem('Is_birthdate', birthdate);
                localStorage.setItem('Is_email', email);
                localStorage.setItem('Is_mobile', mobile);
                localStorage.setItem('Is_cardname', cardname);
                localStorage.setItem('Is_cardnumber', cardnumber);
                localStorage.setItem('Is_cvv', cvv);
            }
  