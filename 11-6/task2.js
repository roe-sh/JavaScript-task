var fnames = document.getElementById('fnames')
var lnames = document.getElementById('lnames')
function valname() {
    var fname = document.getElementById('Fname').value;
    var lname = document.getElementById('Lname').value;
    const rename = /^[^\d]*$/;
    if (!rename.test(fname)){
        fnames.style.visibility = 'visible'
    }else{
        fnames.style.visibility = 'hidden'
    }
    if (!rename.test(lname)){
        lnames.style.visibility = 'visible'
    }else{
        lnames.style.visibility = 'hidden'
    }

}
var bdates = document.getElementById('bdates')
function valdate() {
    var bdate = document.getElementById('Bdate').value;
    const regdate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
    if (!regdate.test(bdate)){
        bdates.style.visibility = 'visible'
    }else{
        bdates.style.visibility = 'hidden'
    }

}
var emails = document.getElementById('emails')
var email2s = document.getElementById('email2s')
function valemail() {
    var email = document.getElementById('email').value;
    var email2 = document.getElementById('email2').value;
    const regemail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!regemail.test(email)){
        emails.style.visibility = 'visible'
    }else{
        emails.style.visibility = 'hidden'
        
    if (email != email2){
        email2s.style.visibility = 'visible'
    }else{
        email2s.style.visibility = 'hidden'
    }
    }


}
var passs = document.getElementById('passs')
var pass2s = document.getElementById('pass2s')
function valpass() {
    var pass = document.getElementById('pass').value;
    var pass2 = document.getElementById('pass2').value;
    const regpass = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regpass.test(pass)){
        passs.style.visibility = 'visible'
    }else{
        passs.style.visibility = 'hidden'
        
        if (pass != pass2){
            pass2s.style.visibility = 'visible'
        }else{
            pass2s.style.visibility = 'hidden'
        }
    }


}