import { FaBluetooth } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const presentAlert = (msg) => {
  MySwal.fire({
    title: msg,
  });
};

const presentToast = (msg) => {
  const Toast = MySwal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,    
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: 'error',
    title: msg,
  });
};

export { presentAlert, presentToast };