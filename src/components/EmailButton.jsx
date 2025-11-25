export default function EmailButton() {
    function getContact(type) {
        window.alert(type)
    }

    return (<button
        onClick={() => getContact("email")}
        className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none w-[200px]"
    >
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14"
        ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"></g><g
                id="SVGRepo_iconCarrier"
            >
                <path
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke="#a467c1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#a467c1"
                    strokeWidth="2"
                    strokeLinecap="round"></rect>
            </g></svg
        >
        <span
            className="ml-4 flex items-start flex-col leading-none"
        >
            <span className="text-xs text-gray-600 mb-1"
            >CONTACT ME</span
            >
            <span className="title-font font-medium">Email</span>
        </span>
    </button>);
}