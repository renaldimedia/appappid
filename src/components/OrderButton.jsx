import Swal from "sweetalert2";
import { useState } from "react";
import clarity from "../lib/clarity";
export default function OrderButton({ label = "Pesan Sekarang", message = "Saya tertarik untuk memesan layanan pembuatan website." }) {
    const [loading, setLoading] = useState(false);

    async function getContact(messageToSend) {
        clarity.event("click-order-button");

        try {
            setLoading(true);

            const res = await fetch(`/api/settings?name=whatsapp`);
            const json = await res.json();

            if (json.success) {
                window.open(json.data + "?text=" + encodeURI(messageToSend), "tab");
            } else {
                Swal.fire({
                    toast: true,
                    title: "Terjadi kesalahan!",
                    text: 'Whatsapp tidak tersedia!',
                    timer: 3000,
                    position: 'top-right',
                    showConfirmButton: false,
                    icon: "error"
                })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    return (<button
        onClick={() => getContact(message)}
        className={`cursor-pointer flex items-center mt-auto text-white bg-primary border-0 py-2 px-4 w-full focus:outline-none rounded ${loading ? "opacity-70 pointer-events-none" : "hover:bg-gray-500"
            }`}
        disabled={loading}
        title={label}
    >
        {loading ? "Loading..." : label}

        {!loading && (
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
            >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        )}
    </button>);
}