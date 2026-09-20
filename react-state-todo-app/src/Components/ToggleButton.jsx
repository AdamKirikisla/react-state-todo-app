export default function ToggleButton({ checked, onClick }){
    return(
        <button
            type="button"
            aria-label={checked ? "Mark task as not done" : "Mark task as done"}
            aria-pressed={checked}
            className={checked ? "toggle-button checked" : "toggle-button"}
            onClick={onClick}
        >
            <span className="checkmark"></span>
        </button>
    )
}
