import './bootstrap';
import.meta.glob([ '../images/**', ]);
import './theme';

window.confirmDelete = function(id, name){
    Swal.fire({
        title: 'Are you sure?',
        text: "You wont be able to restore it!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById(name + '_' + id).submit();
            }
        })
}

window.cannot = function(message){
    Swal.fire(
        'Error',
        message,
        'error'
    )
}
