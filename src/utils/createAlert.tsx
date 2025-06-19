import Swal, { type SweetAlertOptions } from "sweetalert2";

export default function createAlert(icon?: string, title?: string) {
  return Swal.fire({
    title: title || "Something wrong",
    icon: icon || "info"
  });
}
