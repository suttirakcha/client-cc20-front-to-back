import Swal from "sweetalert2";

export default function createAlert(icon?: string, title?: string) {
  return Swal.fire<any>({
    title: title || "Something wrong",
    icon: icon || "info"
  });
}
