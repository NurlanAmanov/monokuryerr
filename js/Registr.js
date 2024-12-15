function updateText(role) {
    const roledescription = document.getElementById('roledescription');
    const parttext = document.getElementById('parttext'); 
    const kuryer = document.getElementById('kuryer'); 
    const partnyor = document.getElementById('partnyor'); 

    if (role === 'kuryer') {

        kuryer.style.display = "block";
        partnyor.style.display = "none";
        roledescription.innerText = 'Kuryer olaraq qeydiyyatdan keçərək sifarişlərin çatdırılması üzrə fəaliyyət göstərə bilərsiniz.';
    } else if (role === 'partnyor') {
       
        partnyor.style.display = "block";
        kuryer.style.display = "none";
        parttext.innerText = 'Partnyor olaraq qeydiyyatdan keçərək öz biznesinizi inkişaf etdirə bilərsiniz.';
    } else {
     
        roledescription.innerText = '';
        kuryer.style.display = "block";
        partnyor.style.display = "none";
    }
}
window.onload = function () {
    document.getElementById('kuryer-radio').checked = true; 
    updateText('kuryer'); 
};
