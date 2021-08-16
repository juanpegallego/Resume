const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    aviso()
})

const aviso = () => {
    Swal.fire({
        title: 'Error!',
        text: 'It seems like the server is not working properly.',
        icon: 'error',
        confirmButtonText: 'Oops! Ok '
    })
}


        
document.getElementById('arrowIcon').addEventListener('click', function(){
    window.scrollTo(0, 200)
}) 