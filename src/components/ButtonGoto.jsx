import Clarity from '@microsoft/clarity';

Clarity.init(import.meta.env.APPAPPID_CLARITY);

export default function GotoButton({ label = "Pesan Sekarang", href = "#", eventName = "", className = "" }) {

    async function handleClick(href, event = "") {
        // console.log("event:", event);
        if(event != ""){
            Clarity.event(event);
        }

        window.location.href = href;
    }

    return (<button
        onClick={() => handleClick(href, eventName)}
        className={className}
        title={label}
    >
        {label}
    </button>);
}