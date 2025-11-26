import Swal from 'sweetalert2'

export default function FastworkButton() {
    async function getContact() {
        try {
            const res = await fetch(`/api/settings?name=fastwork`);
            const json = await res.json();
            if (json.success) {
                window.open(json.data, "tab");
            } else {
                Swal.fire({
                    toast: true,
                    title: "Terjadi kesalahan!",
                    text: 'Fastwork tidak tersedia!',
                    timer: 3000,
                    position: 'top-right',
                    showConfirmButton: false,
                     icon: "error"
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (<button
        onClick={() => getContact()}
        className="bg-gray-100 flex flex-col py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none w-[200px] cursor-pointer"
        title="Contact me on Fastwork"
    >
        <span
            className="ml-4 flex items-start leading-none"
        >
            <span className="text-xs text-gray-600"
            >CONTACT ME ON</span
            >
        </span>
        <img src="/fastwork.svg" alt="" />

    </button>);
}