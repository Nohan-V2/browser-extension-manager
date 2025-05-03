function ToggleBtn({ isActive, onToggle }) {
    return (
        <input
            className="toggle-btn"
            type="checkbox"
            name="slider"
            id="slider"
            checked={isActive}
            onChange={onToggle}
        />
    );
}

export default ToggleBtn;